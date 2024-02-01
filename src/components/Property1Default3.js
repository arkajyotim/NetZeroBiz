import { useMemo } from "react";
import "./Property1Default3.css";

const Property1Default3 = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default3Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className="property-1default3" style={property1Default3Style}>
      <div className="backlogo421" />
      <b className="search-products5">Search Products</b>
      <img className="frame-icon8" alt="" src="/frame.svg" />
    </div>
  );
};

export default Property1Default3;
