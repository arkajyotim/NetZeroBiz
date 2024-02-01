import { useMemo } from "react";
import ViewButtonDefault1 from "./ViewButtonDefault1";
import "./ViewButtonDefault.css";

const ViewButtonDefault = ({
  viewButtonDefaultWidth,
  viewButtonDefaultHeight,
  viewButtonDefaultPosition,
  viewButtonDefaultTop,
  viewButtonDefaultRight,
  viewButtonDefaultBottom,
  viewButtonDefaultLeft,
}) => {
  const viewButtonDefaultStyle = useMemo(() => {
    return {
      width: viewButtonDefaultWidth,
      height: viewButtonDefaultHeight,
      position: viewButtonDefaultPosition,
      top: viewButtonDefaultTop,
      right: viewButtonDefaultRight,
      bottom: viewButtonDefaultBottom,
      left: viewButtonDefaultLeft,
    };
  }, [
    viewButtonDefaultWidth,
    viewButtonDefaultHeight,
    viewButtonDefaultPosition,
    viewButtonDefaultTop,
    viewButtonDefaultRight,
    viewButtonDefaultBottom,
    viewButtonDefaultLeft,
  ]);

  return (
    <div className="view-buttondefault" style={viewButtonDefaultStyle}>
      <ViewButtonDefault1
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

export default ViewButtonDefault;
