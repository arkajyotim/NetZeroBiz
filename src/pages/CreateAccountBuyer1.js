import { useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./CreateAccountBuyer1.css";

const CreateAccountBuyer1 = () => {
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

  const onCreateAccountDefaultContainerClick = useCallback(() => {
    navigate("/signed-in-user");
  }, [navigate]);

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
    <div className="create-account-buyer1" data-animate-on-scroll>
      <img
        className="background-blobs-icon10"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="white-background5" />
      <div
        className="create-accountdefault2"
        onClick={onCreateAccountDefaultContainerClick}
      >
        <div className="create-accountdefault-inner" />
        <b className="create4">Create</b>
      </div>
      <b className="create-account-as3">Create Account As</b>
      <img
        className="back-button-img4"
        alt=""
        src="/back-button-img@2x.png"
        onClick={onBackButtonImgClick}
      />
      <div className="seller9" onClick={onSellerContainerClick}>
        <div className="seller10">
          <div className="seller-child1" />
          <b className="seller11">Seller</b>
        </div>
      </div>
      <div className="buyer6">
        <div className="create-accountdefault-inner" />
        <b className="buyer7">Buyer</b>
      </div>
      <div className="already-have-an1">Already Have an account ?</div>
      <Link className="sign-in3" to="/create-account-sign-in">
        <div className="sign-in4">Sign in</div>
      </Link>
      <TextField
        className="first-name12"
        color="primary"
        label="Last Name"
        variant="standard"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name13"
        color="primary"
        label="Email"
        variant="standard"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name14"
        color="primary"
        label="Contact No."
        variant="standard"
        type="tel"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name15"
        color="primary"
        label="First Name"
        variant="standard"
        type="text"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name16"
        color="primary"
        label="House Address"
        variant="standard"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "1152px" }}
      />
      <div
        className="main-logo11"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black11" />
        <b className="robiz12">roBiz</b>
        <b className="netze12">NetZe</b>
      </div>
    </div>
  );
};

export default CreateAccountBuyer1;
