import { useMemo } from "react";
import "./Property1Variant.css";

const Property1Variant = ({
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [property1Variant2Position, property1Variant2Top, property1Variant2Left]);

  return (
    <div className="property-1variant2" style={property1Variant2Style}>
      <div className="search-open">
        <div className="backlogo420" />
        <div className="search-open-child" />
        <div className="laptops">
          <b className="bags">Safari Bagpack</b>
          <img className="frame-icon5" alt="" src="/frame1.svg" />
        </div>
      </div>
      <b className="b">|</b>
      <img className="frame-icon6" alt="" src="/frame.svg" />
    </div>
  );
};

export default Property1Variant;
