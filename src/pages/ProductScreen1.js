import SportsFilterContainer1 from "../components/SportsFilterContainer1";
import SportsFilterContainer from "../components/SportsFilterContainer";
import FormContainer from "../components/FormContainer";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default from "../components/Property1Default";
import Property1Variant from "../components/Property1Variant";
import Property1Variant1 from "../components/Property1Variant1";
import "./ProductScreen1.css";

const ProductScreen1 = () => {
  return (
    <div className="product-screen-4">
      <img
        className="background-blobs-icon3"
        alt=""
        src="/backgroundblobs.svg"
      />
      <SportsFilterContainer1 />
      <SportsFilterContainer />
      <div className="navbar3">
        <div className="backlogo48" />
        <b className="contact3">Contact</b>
        <b className="about-us3">About Us</b>
        <b className="products3">Products</b>
        <b className="home11">Home</b>
        <img className="navbar-item" alt="" src="/line-2.svg" />
      </div>
      <div className="shop1">
        <div className="row-21">
          <div className="backlogo49" />
          <div className="backlogo410" />
          <div className="backlogo411" />
          <img className="backlogo4-icon1" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage1">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
          <b className="redragon-k617-fizz1">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon1" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming1">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon1" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code1">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon1" alt="" src="/image-8@2x.png" />
        </div>
        <FormContainer />
        <div className="header1" />
      </div>
      <ContainerCardForm roBizTop="78px" roBizLeft="69px" />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="17px"
        property1DefaultLeft="1584px"
      />
      <div className="search-bar2">
        <div className="backlogo412" />
        <b className="search-products2">Search Products</b>
        <img className="frame-icon2" alt="" src="/frame.svg" />
        <Property1Variant
          property1Variant2Position="absolute"
          property1Variant2Top="-1px"
          property1Variant2Left="0px"
        />
      </div>
      <Property1Variant1
        property1Variant2Position="absolute"
        property1Variant2Top="167px"
        property1Variant2Left="1119px"
      />
    </div>
  );
};

export default ProductScreen1;
