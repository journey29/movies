import { IMovie, IMovies } from "types/index"
import { api } from "./index"

const moviesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<IMovies, {searchQuery:string, page:string, apiKey:string, type?:string}>({
      query: (params) => `?s=${params.searchQuery}&page=${params.page}&apikey=${params.apiKey}&type=${params.type}`,
    }),
    getMovieByTitle: build.query<IMovie, {searchQuery?:string, apiKey:string}>({
      query: (params) => `?t=${params.searchQuery}&apiKey=${params.apiKey}`
    })
  }),
  overrideExisting: false,
})

export const { useGetMoviesQuery, useGetMovieByTitleQuery } = moviesApi