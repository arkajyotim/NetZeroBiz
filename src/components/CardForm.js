import { useMemo } from "react";
import "./CardForm.css";

const CardForm = ({ propTop }) => {
  const row2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="row-23" style={row2Style}>
      <div className="backlogo429" />
      <div className="backlogo430" />
      <div className="backlogo431" />
      <img className="backlogo4-icon5" alt="" src="/backlogo4.svg" />
      <b className="safari-small-size">
        Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
      </b>
      <img className="image-5-icon4" alt="" src="/image-52@2x.png" />
      <b className="safari-small-size1">
        Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
      </b>
      <img className="image-6-icon4" alt="" src="/image-52@2x.png" />
      <b className="safari-small-size2">
        Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
      </b>
      <img className="image-7-icon4" alt="" src="/image-52@2x.png" />
      <b className="safari-small-size3">
        Safari Small Size 15 Ltrs Unisex Standard Backpack - Sea Blue
      </b>
      <img className="image-8-icon4" alt="" src="/image-52@2x.png" />
    </div>
  );
};

export default CardForm;
