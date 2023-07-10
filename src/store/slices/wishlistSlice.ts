import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWishListItem } from "types/index";

interface MovieState {
  wishlistItems: IWishListItem[];
}

const initialState: MovieState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<{title:string, img:string, type:string, imdbID:string}>) => {
      const repeatedItem = state.wishlistItems.some(
        (item) => item.imdbID === action.payload.imdbID
      );
      if (!repeatedItem) {
        state.wishlistItems.push(action.payload);
      } else {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.imdbID !== action.payload.imdbID
        );
      }
    },
    removeWishListItem: (state, action:PayloadAction<string>)=>{
      state.wishlistItems = state.wishlistItems.filter(item => item.imdbID !== action.payload)
    }
  },
});

export const { addToWishList, removeWishListItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
