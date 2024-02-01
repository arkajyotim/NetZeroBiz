import { useMemo } from "react";
import "./ContainerCardForm.css";

const ContainerCardForm = ({ roBizTop, roBizLeft }) => {
  const mainLogoStyle = useMemo(() => {
    return {
      top: roBizTop,
      left: roBizLeft,
    };
  }, [roBizTop, roBizLeft]);

  return (
    <div className="main-logo" style={mainLogoStyle}>
      <div className="logo-black" />
      <b className="robiz1">roBiz</b>
      <b className="netze1">NetZe</b>
    </div>
  );
};

export default ContainerCardForm;
