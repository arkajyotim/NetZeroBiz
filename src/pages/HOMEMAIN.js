<<<<<<< HEAD
import { useCallback } from "react";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default1 from "../components/Property1Default1";
import Property1Default from "../components/Property1Default";
import Property1Default2 from "../components/Property1Default2";
import Property1Default3 from "../components/Property1Default3";
import "./HOMEMAIN.css";

const HOMEMAIN = () => {
  const onHOMEMAINContainerClick = useCallback(() => {
    window.open("/Join-Us");
  }, []);

  return (
    <div className="home-main" onClick={onHOMEMAINContainerClick}>
=======
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HOMEMAIN.css";

const HOMEMAIN = () => {
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

  const onViewButtonComponentClick = useCallback(() => {
    window.open("/product-screen-1");
  }, []);

  const onJoinUsContainerClick = useCallback(() => {
    navigate("/create-account-seller");
  }, [navigate]);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsContainerClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/create-account-seller");
  }, [navigate]);

  return (
    <div className="home-main" data-animate-on-scroll>
>>>>>>> 7fff243 (frontend)
      <img
        className="background-blobs-icon"
        alt=""
        src="/backgroundblobs.svg"
      />
<<<<<<< HEAD
      <ContainerCardForm />
      <div className="middle-content-homepage">
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <b className="or">or</b>
        <b className="explore-a-wide">{`Explore a wide range of products listed by your local manufacturers and sellers and get them at very affordable prices and get it delivered to you ASAP. So why wait `}</b>
      </div>
      <b className="empower-business-management">
        Empower Business management in remote areas by overcoming the hurdles
      </b>
      <Property1Default1
        property1DefaultPosition="absolute"
        property1DefaultTop="707px"
        property1DefaultLeft="440px"
      />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="24px"
        property1DefaultLeft="1584px"
      />
      <Property1Default2
        property1DefaultPosition="absolute"
        property1DefaultTop="707px"
        property1DefaultLeft="1117px"
      />
      <div className="navbar">
        <div className="backlogo4" />
        <div className="home">
=======
      <div className="middle-content-homepage" data-animate-on-scroll>
        <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        <b className="or" data-animate-on-scroll>
          or
        </b>
        <b className="explore-a-wide">{`Explore a wide range of products listed by your local manufacturers and sellers and get them at very affordable prices and get it delivered to you ASAP. So why wait `}</b>
      </div>
      <b className="empower-business-management" data-animate-on-scroll>
        Empower Business management in remote areas by overcoming the hurdles
      </b>
      <div
        className="view-button-component"
        onClick={onViewButtonComponentClick}
        data-animate-on-scroll
      >
        <div className="view-buttondefault">
          <div className="view-buttondefault">
            <div className="view-buttondefault-child" />
            <b className="view-products">View Products</b>
            <img className="arrow-icon" alt="" src="/arrow.svg" />
          </div>
        </div>
      </div>
      <div
        className="join-us"
        onClick={onJoinUsContainerClick}
        data-animate-on-scroll
      >
        <div className="view-buttondefault-child" />
        <b className="join-us1">Join Us</b>
        <img className="arrow-icon1" alt="" src="/arrow.svg" />
      </div>
      <div
        className="main-logo"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black" />
        <b className="robiz">roBiz</b>
        <b className="netze">NetZe</b>
      </div>
      <div className="navbar" data-animate-on-scroll>
        <div className="backlogo4" />
        <div className="home" onClick={onHomeContainerClick}>
>>>>>>> 7fff243 (frontend)
          <b className="home1">Home</b>
        </div>
        <div className="about-us">
          <b className="home1">About Us</b>
        </div>
        <div className="contact">
          <b className="home1">Contact</b>
        </div>
<<<<<<< HEAD
        <div className="products">
          <b className="home1">Products</b>
        </div>
      </div>
      <Property1Default3
        property1DefaultPosition="absolute"
        property1DefaultTop="95px"
        property1DefaultLeft="1053px"
      />
=======
        <div className="products" onClick={onProductsContainerClick}>
          <b className="home1">Products</b>
        </div>
      </div>
      <div className="search-bar" data-animate-on-scroll>
        <div className="backlogo41" />
        <input
          className="search-products"
          placeholder="Search Products"
          type="text"
        />
        <button className="frame">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector.svg" />
        </button>
      </div>
      <div
        className="login"
        onClick={onLoginContainerClick}
        data-animate-on-scroll
      >
        <div className="login-brown" />
        <b className="login1">LOGIN</b>
      </div>
>>>>>>> 7fff243 (frontend)
    </div>
  );
};

export default HOMEMAIN;
