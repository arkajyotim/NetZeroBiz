import { useMemo } from "react";
import "./ShopAddressContainer.css";

const ShopAddressContainer = ({ locationAddress, propTop }) => {
  const shopAddressStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="shop-address" style={shopAddressStyle}>
      <div className="shop-address-child" />
      <div className="business-name">
        <div className="shop-address1">{locationAddress}</div>
      </div>
    </div>
  );
};

export default ShopAddressContainer;
