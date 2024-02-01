import { useMemo } from "react";
import "./Property1Variant2.css";

const Property1Variant2 = ({
  property1Variant4Position,
  property1Variant4Top,
  property1Variant4Left,
}) => {
  const property1Variant4Style = useMemo(() => {
    return {
      position: property1Variant4Position,
      top: property1Variant4Top,
      left: property1Variant4Left,
    };
  }, [property1Variant4Position, property1Variant4Top, property1Variant4Left]);

  return (
    <div className="property-1variant4" style={property1Variant4Style}>
      <b className="laptops2">Laptops</b>
      <img className="frame-icon9" alt="" src="/frame1.svg" />
    </div>
  );
};

export default Property1Variant2;
