import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductScreenBag.css";

const ProductScreenBag = () => {
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

  const onSearchBarContainerClick = useCallback(() => {
    navigate("/product-screen-2");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsContainerClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    window.open("/create-account-seller");
  }, []);

  return (
    <div className="product-screen-bag" data-animate-on-scroll>
      <div className="background-blobs">
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <img className="vector-icon3" alt="" src="/vector11.svg" />
        <img className="vector-icon4" alt="" src="/vector21.svg" />
        <img className="vector-icon5" alt="" src="/vector3.svg" />
        <img className="vector-icon6" alt="" src="/vector4.svg" />
        <div className="main-logo1" onClick={onMainLogoContainerClick}>
          <div className="logo-black1" />
          <b className="robiz1">roBiz</b>
          <b className="netze1">NetZe</b>
        </div>
      </div>
      <div className="filters">
        <div className="back" />
        <b className="sports">Sports</b>
        <b className="grocery">Grocery</b>
        <b className="clothing">Clothing</b>
        <img className="checkbox-icon" alt="" src="/checkbox.svg" />
        <img className="checkbox-icon1" alt="" src="/checkbox1.svg" />
        <img className="checkbox-icon2" alt="" src="/checkbox2.svg" />
        <img className="checkbox-icon3" alt="" src="/checkbox3.svg" />
        <img className="checkbox-icon4" alt="" src="/checkbox4.svg" />
        <img className="checkbox-icon5" alt="" src="/checkbox5.svg" />
        <b className="filters1">Filters</b>
        <b className="color">Color</b>
        <b className="electronics">Electronics</b>
        <b className="health">Health</b>
        <b className="beauty">Beauty</b>
      </div>
      <div className="filters2" data-animate-on-scroll>
        <div className="back" />
        <div className="filter-section">
          <b className="sports1">Sports</b>
          <b className="grocery1">Grocery</b>
          <b className="clothing1">Clothing</b>
          <img className="checkbox-icon6" alt="" src="/checkbox.svg" />
          <img className="checkbox-icon7" alt="" src="/checkbox1.svg" />
          <img className="checkbox-icon8" alt="" src="/checkbox2.svg" />
          <img className="checkbox-icon9" alt="" src="/checkbox3.svg" />
          <img className="checkbox-icon10" alt="" src="/checkbox4.svg" />
          <img className="checkbox-icon11" alt="" src="/checkbox5.svg" />
          <b className="filters3">Filters</b>
          <b className="color1">Color</b>
          <b className="color2">Price</b>
          <b className="electronics1">Electronics</b>
          <b className="health1">Health</b>
          <b className="beauty1">Beauty</b>
        </div>
        <img className="color-circle-icon" alt="" src="/colorcircle.svg" />
        <img className="price-icon" alt="" src="/price-icon.svg" />
        <div className="price-section">
          <img className="price-section-child" alt="" src="/line-1.svg" />
          <div className="price-section-item" />
          <div className="price-section-inner" />
          <b className="b">$0</b>
          <b className="b1">$1000</b>
          <b className="b2">$69</b>
        </div>
      </div>
      <div className="shop" data-animate-on-scroll>
        <div className="row-2" data-animate-on-scroll>
          <div className="backlogo42" />
          <div className="backlogo43" />
          <div className="backlogo44" />
          <img className="backlogo4-icon" alt="" src="/backlogo4.svg" />
          <b className="safari-small-size">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <b className="safari-small-size1">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-6-icon" alt="" src="/image-5@2x.png" />
          <b className="safari-small-size2">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-7-icon" alt="" src="/image-5@2x.png" />
          <b className="safari-small-size3">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-8-icon" alt="" src="/image-5@2x.png" />
        </div>
        <div className="row-3">
          <div className="backlogo42" />
          <div className="backlogo43" />
          <div className="backlogo44" />
          <img className="backlogo4-icon" alt="" src="/backlogo4.svg" />
          <b className="safari-small-size">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <b className="safari-small-size1">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-6-icon" alt="" src="/image-5@2x.png" />
          <b className="safari-small-size2">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-7-icon" alt="" src="/image-5@2x.png" />
          <b className="safari-small-size3">
            Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
          </b>
          <img className="image-8-icon" alt="" src="/image-5@2x.png" />
        </div>
        <div className="header" />
      </div>
      <div
        className="search-bar1"
        onClick={onSearchBarContainerClick}
        data-animate-on-scroll
      >
        <div className="backlogo48" />
        <b className="search-products1">Search Products</b>
        <img className="frame-icon" alt="" src="/frame.svg" />
      </div>
      <div className="navbar1" data-animate-on-scroll>
        <div className="backlogo49" />
        <div className="home5">
          <b className="home6" onClick={onHomeTextClick}>
            Home
          </b>
        </div>
        <div className="about-us1">
          <b className="home7">About Us</b>
        </div>
        <div className="contact1">
          <b className="home7">Contact</b>
        </div>
        <div className="products1" onClick={onProductsContainerClick}>
          <b className="home7">Products</b>
        </div>
      </div>
      <div className="login2" onClick={onLoginContainerClick}>
        <div className="login-brown1" />
        <b className="login3">LOGIN</b>
      </div>
    </div>
  );
};

export default ProductScreenBag;
