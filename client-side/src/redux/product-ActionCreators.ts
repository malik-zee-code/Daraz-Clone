import axios from "axios";
import { AppDispatch } from ".";
import { products } from "../Components/PrroductList/ProductList";
import { productAction } from "./products";

export const fetchProduct = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      try {
        dispatch(productAction.fetchAll({ loadedData: [], isloading: true }));
        const response = await axios.get("http://127.0.0.1:3001");
        const { data } = response;
        let loadedData: products[];
        loadedData = [];
        for (let index in data) {
          loadedData.push({
            id: data[index]._id,
            title: data[index].title,
            price: data[index].price,
            image: data[index].image,
            description: data[index].description,
            rating: data[index].rating,
          });
        }
        console.log(loadedData);

        dispatch(
          productAction.fetchAll({ loadedData: loadedData, isloading: false })
        );
      } catch (e) {
        throw new Error("Something went wrong");
      }
    };
    fetchData();
  };
};

export const postProduct = (postProductItem: products) => {
  return async (dispatch: AppDispatch) => {
    const post = async () => {
      dispatch(productAction.postProduct({ data: {}, isloading: true }));
      const response = await axios.post(
        "http://127.0.0.1:3001",
        postProductItem
      );
      const { data } = response;
      dispatch(productAction.postProduct({ data: data, isloading: false }));
    };
    post();
  };
};
