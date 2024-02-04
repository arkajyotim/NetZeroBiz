import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccountBuyer.css";

const CreateAccountBuyer = () => {
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

  const onBackButtonImgClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSellerContainerClick = useCallback(() => {
    navigate("/create-account-seller");
  }, [navigate]);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="create-account-buyer" data-animate-on-scroll>
      <img
        className="background-blobs-icon2"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="white-background1" />
      <b className="create-account-as1">Create Account As</b>
      <div className="create-account1">
        <div className="create-account-item" />
        <b className="create1">Create</b>
      </div>
      <div className="business-name4">
        <div className="business-name-item" />
        <div className="contact-no-container">
          <div className="delivery-address">Delivery Address</div>
        </div>
      </div>
      <div className="contact-no2">
        <div className="contact-no-item" />
        <div className="contact-no-container">
          <div className="delivery-address">Contact No.</div>
        </div>
      </div>
      <div className="email2">
        <div className="contact-no-item" />
        <div className="contact-no-container">
          <div className="delivery-address">Email</div>
        </div>
      </div>
      <div className="last-name2">
        <div className="contact-no-item" />
        <div className="contact-no-container">
          <div className="delivery-address">Last Name</div>
        </div>
      </div>
      <div className="first-name2">
        <div className="contact-no-item" />
        <div className="contact-no-container">
          <div className="delivery-address">First Name</div>
        </div>
      </div>
      <img
        className="back-button-img1"
        alt=""
        src="/back-button-img@2x.png"
        onClick={onBackButtonImgClick}
      />
      <div className="buyer2">
        <div className="buyer-item" />
        <b className="buyer3">Buyer</b>
      </div>
      <div className="seller3" onClick={onSellerContainerClick}>
        <div className="seller4">
          <div className="seller-item" />
          <b className="seller5">Seller</b>
        </div>
      </div>
      <div className="main-logo3" onClick={onMainLogoContainerClick}>
        <div className="logo-black3" />
        <b className="robiz3">roBiz</b>
        <b className="netze3">NetZe</b>
      </div>
    </div>
  );
};

export default CreateAccountBuyer;
