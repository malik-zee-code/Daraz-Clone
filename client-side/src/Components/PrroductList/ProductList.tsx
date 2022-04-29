import React, { useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/product-ActionCreators";
import { AppDispatch, RootState } from "../../redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export type products = {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: { rate: number; count: number };
};

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => {
    return state.products.product;
  });

  useEffect(() => {
    setTimeout(() => dispatch(fetchProduct()), 1000);
  }, [dispatch]);

  const loading = useSelector((state: RootState) => state.products.isloading);

  return (
    <React.Fragment>
      <h1 className={classes["just-for-you"]}>Just For You </h1>
      {loading && <LoadingSpinner />}
      {!loading && (
        <div className={classes.productList__Container}>
          {products.map((product: products) => {
            return (
              <ProductItem
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                id={product.id}
                rating={product.rating}
              />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductList;
