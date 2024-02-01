import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="login-brown" />
      <b className="login">LOGIN</b>
    </div>
  );
};

export default Property1Default;
