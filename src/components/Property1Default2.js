import { useMemo } from "react";
import "./Property1Default2.css";

const Property1Default2 = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default2Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className="property-1default2" style={property1Default2Style}>
      <div className="property-1default-child" />
      <b className="join-us">Join Us</b>
      <img className="arrow-icon1" alt="" src="/arrow.svg" />
    </div>
  );
};

export default Property1Default2;
