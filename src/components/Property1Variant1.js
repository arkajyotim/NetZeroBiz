import { useMemo } from "react";
import "./Property1Variant1.css";

const Property1Variant1 = ({
  property1Variant2Position,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant21Style = useMemo(() => {
    return {
      position: property1Variant2Position,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [property1Variant2Position, property1Variant2Top, property1Variant2Left]);

  return (
    <div className="property-1variant21" style={property1Variant21Style}>
      <b className="laptops1">Laptops</b>
      <img className="frame-icon7" alt="" src="/frame2.svg" />
    </div>
  );
};

export default Property1Variant1;
