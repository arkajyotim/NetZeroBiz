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
      <img
        className="background-blobs-icon"
        alt=""
        src="/backgroundblobs.svg"
      />
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
          <b className="home1">Home</b>
        </div>
        <div className="about-us">
          <b className="home1">About Us</b>
        </div>
        <div className="contact">
          <b className="home1">Contact</b>
        </div>
        <div className="products">
          <b className="home1">Products</b>
        </div>
      </div>
      <Property1Default3
        property1DefaultPosition="absolute"
        property1DefaultTop="95px"
        property1DefaultLeft="1053px"
      />
    </div>
  );
};

export default HOMEMAIN;
