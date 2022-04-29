import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import StarsRating from "stars-rating";

const ProductItem: React.FC<{
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: { rate: number; count: number };
}> = (props) => {
  return (
    <Link to={`/products/${props.id}`} className={classes.product__contaier}>
      <div className={classes.product__image__container}>
        <img className={classes.product__image} src={props.image} alt="" />
      </div>
      <div className={classes.product__description}>
        <h2 className={classes.title}>{props.title.slice(0, 30)}...</h2>
        <h1 className={classes.product__price}>${props.price}</h1>
        <span className={classes.strike}>$400</span>
        <span className={classes.discount}> -40%</span>
        <StarsRating
          count={5}
          size={20}
          color2={"#ffd700"}
          value={props.rating.rate}
          edit={false}
        />
        <span className={classes.count}>({props.rating.count})</span>
      </div>
    </Link>
  );
};

export default ProductItem;
