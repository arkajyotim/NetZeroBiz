<<<<<<< HEAD
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
=======
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductLaptop.css";

const ProductLaptop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsContainerClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  return (
    <div className="product-laptop" data-animate-on-scroll>
      <img
        className="background-blobs-icon5"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="shop2" data-animate-on-scroll>
        <div className="row-1">
          <img className="backlogo4-icon4" alt="" src="/backlogo4.svg" />
          <div className="backlogo420" />
          <div className="backlogo421" />
          <div className="backlogo422" />
          <b className="hp-smartchoice-14s">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <b className="hp-smartchoice-14s1">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <b className="hp-smartchoice-14s2">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <b className="hp-smartchoice-14s3">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <img className="image-4-icon" alt="" src="/image-4@2x.png" />
          <img className="image-3-icon" alt="" src="/image-4@2x.png" />
          <img className="image-2-icon" alt="" src="/image-4@2x.png" />
          <img className="image-1-icon" alt="" src="/image-4@2x.png" />
        </div>
        <div className="header2" data-animate-on-scroll />
      </div>
      <div className="shop3" data-animate-on-scroll>
        <div className="row-11">
          <img className="backlogo4-icon4" alt="" src="/backlogo4.svg" />
          <div className="backlogo420" />
          <div className="backlogo421" />
          <div className="backlogo422" />
          <b className="hp-smartchoice-14s">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <b className="hp-smartchoice-14s1">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <b className="hp-smartchoice-14s2">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <b className="hp-smartchoice-14s3">
            HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB
            SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
          </b>
          <img className="image-4-icon" alt="" src="/image-4@2x.png" />
          <img className="image-3-icon" alt="" src="/image-4@2x.png" />
          <img className="image-2-icon" alt="" src="/image-4@2x.png" />
          <img className="image-1-icon" alt="" src="/image-4@2x.png" />
        </div>
      </div>
      <div className="login8">
        <div className="login-brown4" />
        <b className="login9">LOGIN</b>
      </div>
      <div className="filters6" data-animate-on-scroll>
        <div className="back3" />
        <div className="filter-section2">
          <b className="filters7">Filters</b>
          <div className="component-21">
            <img className="checkbox-icon17" alt="" src="/checkbox.svg" />
            <a className="laptop1">Laptop</a>
          </div>
          <img className="checkbox-icon18" alt="" src="/checkbox.svg" />
          <b className="clothing3">Clothing</b>
          <img className="checkbox-icon19" alt="" src="/checkbox.svg" />
          <b className="clothing3">Electronics</b>
          <img className="checkbox-icon19" alt="" src="/checkbox.svg" />
          <b className="clothing3">Grocery</b>
          <img className="checkbox-icon19" alt="" src="/checkbox.svg" />
          <b className="clothing3">Health</b>
        </div>
        <div className="color-circle1">
          <img className="vector-icon22" alt="" src="/vector.svg" />
          <img className="vector-icon23" alt="" src="/vector.svg" />
          <img className="vector-icon24" alt="" src="/vector.svg" />
          <img className="vector-icon25" alt="" src="/vector.svg" />
          <img className="vector-icon26" alt="" src="/vector.svg" />
          <img className="vector-icon27" alt="" src="/vector.svg" />
          <img className="vector-icon28" alt="" src="/vector.svg" />
          <img className="vector-icon29" alt="" src="/vector.svg" />
          <img className="vector-icon30" alt="" src="/vector.svg" />
          <img className="vector-icon31" alt="" src="/vector.svg" />
          <img className="vector-icon22" alt="" src="/vector.svg" />
          <img className="vector-icon23" alt="" src="/vector.svg" />
          <img className="vector-icon24" alt="" src="/vector.svg" />
          <img className="vector-icon25" alt="" src="/vector.svg" />
          <img className="vector-icon26" alt="" src="/vector.svg" />
          <b className="color4">Color</b>
        </div>
        <b className="price1">Price</b>
        <img className="price-icon2" alt="" src="/price-icon.svg" />
        <div className="price-section2">
          <img className="price-section-child1" alt="" src="/line-1.svg" />
          <div className="price-section-child2" />
          <div className="price-section-child3" />
          <b className="b6">$0</b>
          <b className="b7">$1000</b>
          <b className="b8">$69</b>
        </div>
        <div className="area2">
          <div className="location1" />
          <b className="area3">Area</b>
          <b className="choose-location1">choose location</b>
        </div>
      </div>
      <div
        className="main-logo6"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black6" />
        <b className="robiz7">roBiz</b>
        <b className="netze7">NetZe</b>
      </div>
      <div className="navbar4" data-animate-on-scroll>
        <div className="backlogo426" />
        <div className="home17" onClick={onHomeContainerClick}>
          <b className="home18">Home</b>
        </div>
        <div className="about-us4">
          <b className="home18">About Us</b>
        </div>
        <div className="contact4">
          <b className="home18">Contact</b>
        </div>
        <div className="products5" onClick={onProductsContainerClick}>
          <b className="home18">Products</b>
        </div>
      </div>
      <div className="search-bar4" data-animate-on-scroll>
        <div className="backlogo427" />
        <input
          className="search-products4"
          placeholder="Search Products"
          type="text"
        />
        <button className="frame1">
          <img className="vector-icon37" alt="" src="/vector.svg" />
          <img className="vector-icon38" alt="" src="/vector.svg" />
        </button>
>>>>>>> 7fff243 (frontend)
      </div>
    </div>
  );
};

export default ProductLaptop;
