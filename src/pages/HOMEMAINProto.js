import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HOMEMAINProto.css";

const HOMEMAINProto = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsContainerClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  return (
    <div className="home-main-proto">
      <img
        className="background-blobs-icon4"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="main-logo5">
        <div className="logo-black5" />
        <b className="robiz5">roBiz</b>
        <b className="netze5">NetZe</b>
      </div>
      <div className="middle-content-homepage1">
        <img className="image-9-icon1" alt="" src="/image-9@2x.png" />
        <b className="or1">or</b>
        <b className="explore-a-wide1">{`Explore a wide range of products listed by your local manufacturers and sellers and get them at very affordable prices and get it delivered to you ASAP. So why wait `}</b>
      </div>
      <b className="empower-business-management1">
        Empower Business management in remote areas by overcoming the hurdles
      </b>
      <div className="view-button-component1">
        <div className="view-buttondefault2">
          <div className="view-buttondefault2">
            <div className="view-buttondefault-item" />
            <b className="view-products1">View Products</b>
            <img className="arrow-icon2" alt="" src="/arrow.svg" />
          </div>
        </div>
      </div>
      <div className="login6">
        <div className="login-brown3" />
        <b className="login7">LOGIN</b>
      </div>
      <div className="search-bar3">
        <div className="backlogo418" />
        <b className="search-products3">Search Products</b>
        <img className="frame-icon2" alt="" src="/frame.svg" />
      </div>
      <div className="join-us2">
        <div className="view-buttondefault-item" />
        <b className="join-us3">Join Us</b>
        <img className="arrow-icon3" alt="" src="/arrow.svg" />
      </div>
      <div className="navbar3">
        <div className="backlogo419" />
        <div className="home11">
          <b className="home12">Home</b>
        </div>
        <div className="about-us3">
          <b className="home13">About Us</b>
        </div>
        <div className="contact3">
          <b className="home13">Contact</b>
        </div>
      </div>
      <div className="home-parent" onClick={onGroupContainerClick}>
        <b className="home13">Home</b>
        <div className="group-child" />
      </div>
      <div className="products3" onClick={onProductsContainerClick}>
        <div className="view-buttondefault2">
          <b className="home16" onClick={onHomeTextClick}>
            Products
          </b>
        </div>
        <div className="products-child" />
      </div>
    </div>
  );
};

export default HOMEMAINProto;
