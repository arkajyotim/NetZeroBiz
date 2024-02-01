import { useMemo } from "react";
import "./CardContainer.css";

const CardContainer = ({ propTop }) => {
  const row1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="row-1" style={row1Style}>
      <img className="backlogo4-icon4" alt="" src="/backlogo4.svg" />
      <div className="backlogo425" />
      <div className="backlogo426" />
      <div className="backlogo427" />
      <b className="hp-smartchoice-14s">
        HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD
        14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
      </b>
      <b className="hp-smartchoice-14s1">
        HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD
        14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
      </b>
      <b className="hp-smartchoice-14s2">
        HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD
        14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
      </b>
      <b className="hp-smartchoice-14s3">
        HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD
        14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built-in
      </b>
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <img className="image-3-icon" alt="" src="/image-4@2x.png" />
      <img className="image-2-icon" alt="" src="/image-4@2x.png" />
      <img className="image-1-icon" alt="" src="/image-4@2x.png" />
    </div>
  );
};

export default CardContainer;
