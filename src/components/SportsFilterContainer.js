import "./SportsFilterContainer.css";

const SportsFilterContainer = () => {
  return (
    <div className="filters2">
      <div className="back1" />
      <div className="filter-section">
        <b className="sports1">Sports</b>
        <b className="grocery1">Grocery</b>
        <b className="clothing1">Clothing</b>
        <img className="checkbox-icon6" alt="" src="/checkbox.svg" />
        <img className="checkbox-icon7" alt="" src="/checkbox1.svg" />
        <img className="checkbox-icon8" alt="" src="/checkbox2.svg" />
        <img className="checkbox-icon9" alt="" src="/checkbox3.svg" />
        <img className="checkbox-icon10" alt="" src="/checkbox4.svg" />
        <img className="checkbox-icon11" alt="" src="/checkbox5.svg" />
        <b className="filters3">Filters</b>
        <b className="color1">Color</b>
        <b className="color2">Price</b>
        <b className="electronics1">Electronics</b>
        <b className="health1">Health</b>
        <b className="beauty1">Beauty</b>
      </div>
      <img className="color-circle-icon" alt="" src="/colorcircle.svg" />
      <img className="price-icon" alt="" src="/price-icon.svg" />
      <div className="price-section">
        <img className="price-section-child" alt="" src="/line-1.svg" />
        <div className="price-section-item" />
        <div className="price-section-inner" />
        <b className="b1">$0</b>
        <b className="b2">$1000</b>
        <b className="b3">$69</b>
      </div>
    </div>
  );
};

export default SportsFilterContainer;
