import SportsFilterContainer1 from "../components/SportsFilterContainer1";
import SportsFilterContainer from "../components/SportsFilterContainer";
import FormContainer from "../components/FormContainer";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default from "../components/Property1Default";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="product-screen-1">
      <img
        className="background-blobs-icon1"
        alt=""
        src="/backgroundblobs.svg"
      />
      <SportsFilterContainer1 />
      <SportsFilterContainer />
      <div className="search-bar">
        <div className="backlogo41" />
        <b className="search-products">Search Products</b>
        <img className="frame-icon" alt="" src="/frame.svg" />
      </div>
      <div className="navbar1">
        <div className="backlogo42" />
        <b className="contact1">Contact</b>
        <b className="about-us1">About Us</b>
        <b className="products1">Products</b>
        <b className="home5">Home</b>
        <img className="navbar-child" alt="" src="/line-2.svg" />
      </div>
      <div className="shop">
        <div className="row-2">
          <div className="backlogo43" />
          <div className="backlogo44" />
          <div className="backlogo45" />
          <img className="backlogo4-icon" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <b className="redragon-k617-fizz">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        </div>
        <FormContainer />
        <div className="header" />
      </div>
      <ContainerCardForm roBizTop="78px" roBizLeft="69px" />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="17px"
        property1DefaultLeft="1584px"
      />
    </div>
  );
};

export default ProductScreen;
