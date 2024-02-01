import { useMemo } from "react";
import "./ViewButtonDefault1.css";

const ViewButtonDefault1 = ({
  viewButtonDefaultWidth,
  viewButtonDefaultHeight,
  viewButtonDefaultPosition,
  viewButtonDefaultTop,
  viewButtonDefaultRight,
  viewButtonDefaultBottom,
  viewButtonDefaultLeft,
}) => {
  const viewButtonDefault1Style = useMemo(() => {
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
    <div className="view-buttondefault1" style={viewButtonDefault1Style}>
      <div className="view-buttondefault-child" />
      <b className="view-products">View Products</b>
      <img className="arrow-icon" alt="" src="/arrow.svg" />
    </div>
  );
};

export default ViewButtonDefault1;
