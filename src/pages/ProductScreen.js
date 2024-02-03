<<<<<<< HEAD
import SportsFilterContainer1 from "../components/SportsFilterContainer1";
import SportsFilterContainer from "../components/SportsFilterContainer";
import FormContainer from "../components/FormContainer";
import ContainerCardForm from "../components/ContainerCardForm";
import Property1Default from "../components/Property1Default";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="product-screen-1">
      <img
        className="background-blobs-icon1"
        alt=""
        src="/backgroundblobs.svg"
      />
      <SportsFilterContainer1 />
      <SportsFilterContainer />
      <div className="search-bar">
        <div className="backlogo41" />
        <b className="search-products">Search Products</b>
        <img className="frame-icon" alt="" src="/frame.svg" />
      </div>
      <div className="navbar1">
        <div className="backlogo42" />
        <b className="contact1">Contact</b>
        <b className="about-us1">About Us</b>
        <b className="products1">Products</b>
        <b className="home5">Home</b>
        <img className="navbar-child" alt="" src="/line-2.svg" />
      </div>
      <div className="shop">
        <div className="row-2">
          <div className="backlogo43" />
          <div className="backlogo44" />
          <div className="backlogo45" />
          <img className="backlogo4-icon" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <b className="redragon-k617-fizz">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        </div>
        <FormContainer />
        <div className="header" />
      </div>
      <ContainerCardForm roBizTop="78px" roBizLeft="69px" />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop="17px"
        property1DefaultLeft="1584px"
      />
=======
import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductScreen.css";

const ProductScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsContainerClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/create-account-seller");
  }, [navigate]);

  return (
    <div className="product-screen-1" data-animate-on-scroll>
      <img
        className="background-blobs-icon6"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="filters8" data-animate-on-scroll>
        <div className="back4" />
        <div className="filter-section3">
          <b className="filters9">Filters</b>
          <div className="component-22">
            <Link className="checkbox" to="/product-laptop">
              <img className="vector-icon39" alt="" src="/vector.svg" />
            </Link>
            <Link className="laptop2" to="/product-laptop">
              Laptop
            </Link>
          </div>
          <img className="checkbox-icon22" alt="" src="/checkbox.svg" />
          <b className="clothing4">Clothing</b>
          <img className="checkbox-icon23" alt="" src="/checkbox.svg" />
          <b className="clothing4">Electronics</b>
          <img className="checkbox-icon23" alt="" src="/checkbox.svg" />
          <b className="clothing4">Grocery</b>
          <img className="checkbox-icon23" alt="" src="/checkbox.svg" />
          <b className="clothing4">Health</b>
        </div>
        <div className="color-circle2">
          <img className="vector-icon40" alt="" src="/vector.svg" />
          <img className="vector-icon41" alt="" src="/vector.svg" />
          <img className="vector-icon42" alt="" src="/vector.svg" />
          <img className="vector-icon43" alt="" src="/vector.svg" />
          <img className="vector-icon44" alt="" src="/vector.svg" />
          <img className="vector-icon45" alt="" src="/vector.svg" />
          <img className="vector-icon46" alt="" src="/vector.svg" />
          <img className="vector-icon47" alt="" src="/vector.svg" />
          <img className="vector-icon48" alt="" src="/vector.svg" />
          <img className="vector-icon49" alt="" src="/vector.svg" />
          <img className="vector-icon40" alt="" src="/vector.svg" />
          <img className="vector-icon41" alt="" src="/vector.svg" />
          <img className="vector-icon42" alt="" src="/vector.svg" />
          <img className="vector-icon43" alt="" src="/vector.svg" />
          <img className="vector-icon44" alt="" src="/vector.svg" />
          <b className="color5">Color</b>
        </div>
        <b className="price2">Price</b>
        <img className="price-icon3" alt="" src="/price-icon.svg" />
        <div className="price-section3">
          <img className="price-section-child4" alt="" src="/line-1.svg" />
          <div className="price-section-child5" />
          <div className="price-section-child6" />
          <b className="b9">$0</b>
          <b className="b10">$1000</b>
          <b className="b11">$69</b>
        </div>
        <div className="area4">
          <div className="location2" />
          <b className="area5">Area</b>
          <b className="choose-location2">choose location</b>
        </div>
      </div>
      <div className="shop4" data-animate-on-scroll>
        <div className="row-22" data-animate-on-scroll>
          <div className="backlogo428" />
          <div className="backlogo429" />
          <div className="backlogo430" />
          <img className="backlogo4-icon6" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage1">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon4" alt="" src="/image-51@2x.png" />
          <b className="redragon-k617-fizz1">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon4" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming1">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon4" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code1">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon4" alt="" src="/image-8@2x.png" />
        </div>
        <div className="row-32">
          <div className="backlogo428" />
          <div className="backlogo429" />
          <div className="backlogo430" />
          <img className="backlogo4-icon6" alt="" src="/backlogo4.svg" />
          <b className="lg-electronics-ultragear-27gp71">
            LG Electronics Ultragear-27Gp750-B Full Hd IPS,27 Inch(68.5 Cm) 240
            Hz Nvidia G-Sync Compatible,Freesync Premium,LCD,1920 X 1080
            Pixels(…
          </b>
          <img className="image-5-icon5" alt="" src="/image-52@2x.png" />
          <b className="redragon-k617-fizz1">
            <p className="himalaya-wellness-pure-herbs-m1">
              <a
                className="himalaya-wellness-pure1"
                href={`https://www.amazon.in/Himalaya-Wellness-Herbs-Meshashringi-Metabolic/dp/B006FE0JJ2?pd_rd_w=4ezSl&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=RSG126QVBFYRR7M2560W&pd_rd_wg=UzBDf&pd_rd_r=9bc68698-bc04-4ac0-9316-9dab96359c71&pd_rd_i=B006FE0JJ2&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_nped_pd_gwd_bag_pd_gw_rp_2_t`}
                target="_blank"
              >
                Himalaya Wellness Pure Herbs Meshashringi Metabolic Wellness -
                60 Tablet
              </a>
            </p>
            <p className="himalaya-wellness-pure-herbs-m1">
              60 Count (Pack of 1)
            </p>
          </b>
          <img className="image-6-icon5" alt="" src="/image-61@2x.png" />
          <b className="lakme-absolute-skin1">
            Lakme Absolute Skin Natural Mousse Golden Light 04, SPF8 Natural
            Finish Matte Cream Foundation -Long Lasting Weightless Full Coverage
            Face Makeup,....
          </b>
          <img className="image-7-icon4" alt="" src="/image-71@2x.png" />
          <a
            className="engage-woman-deodorant1"
            href={`https://www.amazon.in/Engage-Woman-Deodorant-Tease-Pack/dp/B087TY9PHD?pd_rd_w=hAyl1&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=AKMGFBR5ABRG49565PZP&pd_rd_wg=0bkbl&pd_rd_r=26190a20-5ea7-48a4-911a-7903b8d02a15&pd_rd_i=B087TY9PHD&psc=1&ref_=pd_bap_d_grid_rp_0_5_t`}
            target="_blank"
          >
            Engage Woman Deodorant, Tease, 150 ml (Pack of 3)
          </a>
          <img className="image-8-icon5" alt="" src="/image-81@2x.png" />
        </div>
        <div className="header3" />
      </div>
      <img className="frame-icon3" alt="" src="/frame.svg" />
      <div
        className="main-logo7"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black7" />
        <b className="robiz8">roBiz</b>
        <b className="netze8">NetZe</b>
      </div>
      <div className="navbar5" data-animate-on-scroll>
        <div className="backlogo434" />
        <div className="home22" onClick={onHomeContainerClick}>
          <b className="home23">Home</b>
        </div>
        <div className="about-us5">
          <b className="home23">About Us</b>
        </div>
        <div className="contact5">
          <b className="home23">Contact</b>
        </div>
        <div className="products6" onClick={onProductsContainerClick}>
          <b className="home23">Products</b>
        </div>
      </div>
      <div
        className="login10"
        onClick={onLoginContainerClick}
        data-animate-on-scroll
      >
        <div className="login-brown5" />
        <b className="login11">LOGIN</b>
      </div>
      <div className="search-bar5" data-animate-on-scroll>
        <div className="backlogo435" />
        <input
          className="search-products5"
          placeholder="Search Products"
          type="text"
        />
        <button className="frame2">
          <img className="vector-icon55" alt="" src="/vector.svg" />
          <img className="vector-icon56" alt="" src="/vector.svg" />
        </button>
      </div>
>>>>>>> 7fff243 (frontend)
    </div>
  );
};

export default ProductScreen;
