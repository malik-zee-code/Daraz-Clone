import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Components/PrroductList/ProductList";

const initialProductState: { product: Array<products>; isloading: boolean } = {
  product: [],
  isloading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    fetchAll: (state, actions: any) => {
      return {
        product: actions.payload.loadedData,
        isloading: actions.payload.isloading,
      };
    },
    postProduct: (state, actions: any) => {
      return {
        product: [...state.product, actions.payload.data],
        isloading: actions.payload.isloading,
      };
    },
  },
});

export const productAction = productSlice.actions;

export default productSlice.reducer;
