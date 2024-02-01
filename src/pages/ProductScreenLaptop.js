import SportsFilterContainer1 from "../components/SportsFilterContainer1";
import SportsFilterContainer from "../components/SportsFilterContainer";
import ShopCard from "../components/ShopCard";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default from "../components/Property1Default";
import "./ProductScreenLaptop.css";

const ProductScreenLaptop = () => {
  return (
    <div className="product-screen-laptop">
      <img
        className="background-blobs-icon5"
        alt=""
        src="/backgroundblobs.svg"
      />
      <SportsFilterContainer1 />
      <SportsFilterContainer />
      <div className="search-bar3">
        <div className="backlogo413" />
        <b className="search-products3">Search Products</b>
        <img className="frame-icon3" alt="" src="/frame.svg" />
      </div>
      <div className="navbar4">
        <div className="backlogo414" />
        <b className="contact4">Contact</b>
        <b className="about-us4">About Us</b>
        <b className="products4">Products</b>
        <b className="home12">Home</b>
        <img className="navbar-inner" alt="" src="/line-2.svg" />
      </div>
      <ShopCard />
      <ContainerCardForm roBizTop="78px" roBizLeft="69px" />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="17px"
        property1DefaultLeft="1584px"
      />
    </div>
  );
};

export default ProductScreenLaptop;
