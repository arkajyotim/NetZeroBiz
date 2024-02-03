import { useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateAccountSeller.css";

const CreateAccountSeller = () => {
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

  const onBuyerContainerClick = useCallback(() => {
    navigate("/create-account-buyer");
  }, [navigate]);

  const onCreateAccountDefaultContainerClick = useCallback(() => {
    navigate("/signed-in-user");
  }, [navigate]);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="create-account-seller" data-animate-on-scroll>
      <img
        className="background-blobs-icon8"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="white-background2" />
      <TextField
        className="first-name4"
        color="primary"
        label="Last Name"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name5"
        color="primary"
        label="Email"
        variant="standard"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name6"
        color="primary"
        label="Contact No."
        variant="outlined"
        type="tel"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <div className="already-have-an">Already Have an account ?</div>
      <b className="create-account-as2">Create Account As</b>
      <img
        className="back-button-img2"
        alt=""
        src="/back-button-img@2x.png"
        onClick={onBackButtonImgClick}
      />
      <TextField
        className="first-name7"
        color="primary"
        label="First Name"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name8"
        color="primary"
        label="Business Name"
        variant="outlined"
        type="text"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "1152px" }}
      />
      <TextField
        className="first-name9"
        color="primary"
        label="Shop Adress"
        variant="outlined"
        type="text"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "1153px" }}
      />
      <div className="seller6">
        <div className="seller7">
          <div className="seller-inner" />
          <b className="seller8">Seller</b>
        </div>
      </div>
      <div className="buyer4" onClick={onBuyerContainerClick}>
        <div className="buyer-inner" />
        <b className="buyer5">Buyer</b>
      </div>
      <div className="white-background3" />
      <div
        className="create-accountdefault"
        onClick={onCreateAccountDefaultContainerClick}
      >
        <div className="seller-inner" />
        <b className="create2">Create</b>
      </div>
      <div className="sign-in">
        <div className="sign-in1">Sign in</div>
      </div>
      <div
        className="main-logo9"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black9" />
        <b className="robiz10">roBiz</b>
        <b className="netze10">NetZe</b>
      </div>
    </div>
  );
};

export default CreateAccountSeller;
