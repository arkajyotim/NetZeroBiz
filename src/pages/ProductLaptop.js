import SportsFilterContainer1 from "../components/SportsFilterContainer1";
import SportsFilterContainer from "../components/SportsFilterContainer";
import ShopCardForm1 from "../components/ShopCardForm1";
import ShopCardForm from "../components/ShopCardForm";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default from "../components/Property1Default";
import "./ProductLaptop.css";

const ProductLaptop = () => {
  return (
    <div className="product-laptop">
      <img
        className="background-blobs-icon2"
        alt=""
        src="/backgroundblobs.svg"
      />
      <SportsFilterContainer1 />
      <SportsFilterContainer />
      <div className="search-bar1">
        <div className="backlogo46" />
        <b className="search-products1">Search Products</b>
        <img className="frame-icon1" alt="" src="/frame.svg" />
      </div>
      <ShopCardForm1 />
      <ShopCardForm />
      <ContainerCardForm roBizTop="78px" roBizLeft="69px" />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="17px"
        property1DefaultLeft="1584px"
      />
      <div className="navbar2">
        <div className="backlogo47" />
        <div className="home6">
          <b className="home7">Home</b>
        </div>
        <div className="about-us2">
          <b className="home7">About Us</b>
        </div>
        <div className="contact2">
          <b className="home7">Contact</b>
        </div>
        <div className="products2">
          <b className="home7">Products</b>
        </div>
      </div>
    </div>
  );
};

export default ProductLaptop;
