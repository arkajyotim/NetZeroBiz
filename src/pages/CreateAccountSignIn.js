import { useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CreateAccountSignIn.css";

const CreateAccountSignIn = () => {
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

  const onSignUpTextClick = useCallback(() => {
    navigate("/create-account-seller");
  }, [navigate]);

  const onCreateAccountDefaultContainerClick = useCallback(() => {
    navigate("/signed-in-user");
  }, [navigate]);

  const onBackButtonImgClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="create-account-sign-in" data-animate-on-scroll>
      <img
        className="background-blobs-icon9"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="white-background4" />
      <div className="dont-have-an">Dont Have an Account?</div>
      <div className="sign-up" onClick={onSignUpTextClick}>
        Sign Up
      </div>
      <div
        className="create-accountdefault1"
        onClick={onCreateAccountDefaultContainerClick}
      >
        <div className="create-accountdefault-item" />
        <b className="create3">Create</b>
      </div>
      <b className="sign-in2">Sign In</b>
      <img
        className="back-button-img3"
        alt=""
        src="/back-button-img@2x.png"
        onClick={onBackButtonImgClick}
      />
      <img className="image-11-icon" alt="" src="/image-11@2x.png" />
      <TextField
        className="first-name10"
        color="primary"
        label="Password"
        variant="filled"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <TextField
        className="first-name11"
        color="primary"
        label="Email"
        variant="filled"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "112px" }, width: "553px" }}
      />
      <div
        className="main-logo10"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black10" />
        <b className="robiz11">roBiz</b>
        <b className="netze11">NetZe</b>
      </div>
    </div>
  );
};

export default CreateAccountSignIn;
