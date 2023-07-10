import classes from './Movie.module.scss'
import { MyLoader } from 'components/Loader'
import { useGetMovieByTitleQuery } from 'store/api/movies.api'
import { useParams } from 'react-router-dom'

export const Movie = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetMovieByTitleQuery({searchQuery:id, apiKey:import.meta.env.VITE_MOVIES_DB_ID})

    return (
        <div className={classes.movie}>
            <div className="container">
                <div className={classes.content}>
                    {isLoading
                        ? <MyLoader />
                        : <>
                            <img src={data?.Poster} />
                            <div className={classes.info}>
                                <h4>{data?.Title}</h4>
                                <div className={classes.plot}>
                                    <p><span>Plot:</span>{data?.Plot}</p>
                                </div>
                                <div className={classes.subInfo}>
                                    <p>{data?.Released}</p>
                                    <p>{data?.Ratings[0].Value}</p>
                                    <p>{data?.Year}</p>
                                </div>
                                <p><span>Genre:</span>{data?.Genre}</p>
                                <div>
                                    <p><span>Actors:</span>{data?.Actors};</p>
                                    <p><span>Writer:</span>{data?.Writer}</p>
                                </div>
                                <p><span>Language:</span>{data?.Language}</p>
                                <p><span>Runtime:</span>{data?.Runtime}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div >
    )
}
