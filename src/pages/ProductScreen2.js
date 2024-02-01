import SportsFilterContainer1 from "../components/SportsFilterContainer1";
import SportsFilterContainer from "../components/SportsFilterContainer";
import FormContainer from "../components/FormContainer";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default from "../components/Property1Default";
import Property1Variant from "../components/Property1Variant";
import Property1Variant2 from "../components/Property1Variant2";
import "./ProductScreen2.css";

const ProductScreen2 = () => {
  return (
    <div className="product-screen-2">
      <img
        className="background-blobs-icon6"
        alt=""
        src="/backgroundblobs.svg"
      />
      <SportsFilterContainer1 />
      <SportsFilterContainer />
      <div className="navbar5">
        <div className="backlogo415" />
        <b className="contact5">Contact</b>
        <b className="about-us5">About Us</b>
        <b className="products5">Products</b>
        <b className="home13">Home</b>
        <img className="line-icon" alt="" src="/line-2.svg" />
      </div>
      <div className="shop2">
        <div className="row-22">
          <div className="backlogo416" />
          <div className="backlogo417" />
          <div className="backlogo418" />
          <img className="backlogo4-icon2" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage2">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon2" alt="" src="/image-5@2x.png" />
          <b className="redragon-k617-fizz2">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon2" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming2">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon2" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code2">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon2" alt="" src="/image-8@2x.png" />
        </div>
        <FormContainer />
        <div className="header2" />
      </div>
      <ContainerCardForm roBizTop="78px" roBizLeft="69px" />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="17px"
        property1DefaultLeft="1584px"
      />
      <div className="search-bar4">
        <div className="backlogo419" />
        <b className="search-products4">Search Products</b>
        <img className="frame-icon4" alt="" src="/frame.svg" />
        <Property1Variant
          property1Variant2Position="absolute"
          property1Variant2Top="-1px"
          property1Variant2Left="0px"
        />
      </div>
      <Property1Variant2
        property1Variant4Position="absolute"
        property1Variant4Top="167px"
        property1Variant4Left="1119px"
      />
    </div>
  );
};

export default ProductScreen2;
