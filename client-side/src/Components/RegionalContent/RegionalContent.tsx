import React from "react";
import EidDarazSe from "../../Asset/maahru-blog-featured-image.png";
import Channels from "../Channels/Channels";
import ProductList from "../PrroductList/ProductList";
import classes from "./RegionalContent.module.css";

function RegionalContent() {
  return (
    <div className={classes.regional__Container}>
      <a href="/">
        <img src={EidDarazSe} alt="" className={classes.countDownContent} />
      </a>
      <ul className={`columns ${classes.channels__list}`}>
        <Channels
          url="https://icms-image.slatic.net/images/ims-web/52d5fa78-71ee-4174-ada6-829c46e84768.png "
          alt="imf"
          name="Mart"
        />
        <Channels
          url="https://icms-image.slatic.net/images/ims-web/ba5cad01-52dc-4546-82e0-8f227a6fff74.png "
          alt="imf"
          name="Fashion"
        />
        <Channels
          url="https://icms-image.slatic.net/images/ims-web/eeb41c48-d76c-4421-86fd-b8df8ab1a2c6.png"
          alt="imf"
          name="Beauty"
        />
      </ul>

      <ProductList />
    </div>
  );
}

export default RegionalContent;
