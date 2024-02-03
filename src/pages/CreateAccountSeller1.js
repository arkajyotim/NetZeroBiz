import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccountSeller1.css";

const CreateAccountSeller1 = () => {
  const navigate = useNavigate();

  const onBackButtonImgClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="create-account-seller-2">
      <img
        className="background-blobs-icon1"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="white-background" />
      <b className="create-account-as">Create Account As</b>
      <img
        className="back-button-img"
        alt=""
        src="/back-button-img@2x.png"
        onClick={onBackButtonImgClick}
      />
      <div className="create-account">
        <div className="create-account-child" />
        <b className="create">Create</b>
      </div>
      <div className="shop-address">
        <div className="shop-address-child" />
        <div className="business-name">
          <div className="shop-address1">Shop Address</div>
        </div>
      </div>
      <div className="business-name1">
        <div className="shop-address-child" />
        <div className="business-name">
          <div className="shop-address1">Business Name</div>
        </div>
      </div>
      <div className="contact-no">
        <div className="contact-no-child" />
        <div className="business-name">
          <div className="shop-address1">Contact No.</div>
        </div>
      </div>
      <div className="email">
        <div className="contact-no-child" />
        <div className="business-name">
          <div className="shop-address1">Email</div>
        </div>
      </div>
      <div className="last-name">
        <div className="contact-no-child" />
        <div className="business-name">
          <div className="shop-address1">Last Name</div>
        </div>
      </div>
      <div className="first-name">
        <div className="contact-no-child" />
        <div className="business-name">
          <div className="shop-address1">First Name</div>
        </div>
      </div>
      <div className="seller">
        <div className="seller1">
          <div className="seller-child" />
          <b className="seller2">Seller</b>
        </div>
      </div>
      <div className="buyer">
        <div className="buyer-child" />
        <b className="buyer1">Buyer</b>
      </div>
      <div className="main-logo2" onClick={onMainLogoContainerClick}>
        <div className="logo-black2" />
        <b className="robiz2">roBiz</b>
        <b className="netze2">NetZe</b>
      </div>
    </div>
  );
};

export default CreateAccountSeller1;
