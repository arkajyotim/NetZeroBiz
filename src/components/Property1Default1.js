import { useMemo } from "react";
import ViewButtonDefault from "./ViewButtonDefault";
import "./Property1Default1.css";

const Property1Default1 = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className="property-1default1" style={property1Default1Style}>
      <ViewButtonDefault
        viewButtonDefaultWidth="100%"
        viewButtonDefaultHeight="100%"
        viewButtonDefaultPosition="absolute"
        viewButtonDefaultTop="0%"
        viewButtonDefaultRight="0%"
        viewButtonDefaultBottom="0%"
        viewButtonDefaultLeft="0%"
      />
    </div>
  );
};

export default Property1Default1;
