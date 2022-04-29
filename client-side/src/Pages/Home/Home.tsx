import CardSlider from "../../Components/CardSlider/CardSlider";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import RegionalContent from "../../Components/RegionalContent/RegionalContent";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <HomeHeader />
      <CardSlider />
      <RegionalContent />
    </div>
  );
};

export default Home;
