import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductScreen2.css";

const ProductScreen2 = () => {
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
    <div className="product-screen-3" data-animate-on-scroll>
      <img
        className="background-blobs-icon7"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="shop5" data-animate-on-scroll>
        <div className="row-23" data-animate-on-scroll>
          <div className="backlogo436" />
          <div className="backlogo437" />
          <div className="backlogo438" />
          <img className="backlogo4-icon8" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage2">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon6" alt="" src="/image-51@2x.png" />
          <b className="redragon-k617-fizz2">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon6" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming2">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon6" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code2">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon6" alt="" src="/image-8@2x.png" />
        </div>
        <div className="row-33">
          <div className="backlogo436" />
          <div className="backlogo437" />
          <div className="backlogo438" />
          <img className="backlogo4-icon8" alt="" src="/backlogo4.svg" />
          <b className="lg-electronics-ultragear-27gp72">
            LG Electronics Ultragear-27Gp750-B Full Hd IPS,27 Inch(68.5 Cm) 240
            Hz Nvidia G-Sync Compatible,Freesync Premium,LCD,1920 X 1080
            Pixels(…
          </b>
          <img className="image-5-icon7" alt="" src="/image-52@2x.png" />
          <b className="redragon-k617-fizz2">
            <p className="himalaya-wellness-pure-herbs-m2">
              <a
                className="himalaya-wellness-pure2"
                href={`https://www.amazon.in/Himalaya-Wellness-Herbs-Meshashringi-Metabolic/dp/B006FE0JJ2?pd_rd_w=4ezSl&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=RSG126QVBFYRR7M2560W&pd_rd_wg=UzBDf&pd_rd_r=9bc68698-bc04-4ac0-9316-9dab96359c71&pd_rd_i=B006FE0JJ2&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_nped_pd_gwd_bag_pd_gw_rp_2_t`}
                target="_blank"
              >
                Himalaya Wellness Pure Herbs Meshashringi Metabolic Wellness -
                60 Tablet
              </a>
            </p>
            <p className="himalaya-wellness-pure-herbs-m2">
              60 Count (Pack of 1)
            </p>
          </b>
          <img className="image-6-icon7" alt="" src="/image-61@2x.png" />
          <b className="lakme-absolute-skin2">
            Lakme Absolute Skin Natural Mousse Golden Light 04, SPF8 Natural
            Finish Matte Cream Foundation -Long Lasting Weightless Full Coverage
            Face Makeup,....
          </b>
          <img className="image-7-icon6" alt="" src="/image-71@2x.png" />
          <a
            className="engage-woman-deodorant2"
            href={`https://www.amazon.in/Engage-Woman-Deodorant-Tease-Pack/dp/B087TY9PHD?pd_rd_w=hAyl1&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=AKMGFBR5ABRG49565PZP&pd_rd_wg=0bkbl&pd_rd_r=26190a20-5ea7-48a4-911a-7903b8d02a15&pd_rd_i=B087TY9PHD&psc=1&ref_=pd_bap_d_grid_rp_0_5_t`}
            target="_blank"
          >
            Engage Woman Deodorant, Tease, 150 ml (Pack of 3)
          </a>
          <img className="image-8-icon7" alt="" src="/image-81@2x.png" />
        </div>
        <div className="header4" data-animate-on-scroll />
      </div>
      <div className="filters10" data-animate-on-scroll>
        <div className="back5" />
        <div className="filter-section4">
          <b className="filters11">Filters</b>
          <div className="component-23">
            <img className="checkbox-icon26" alt="" src="/checkbox6.svg" />
            <b className="laptop3">Laptop</b>
          </div>
          <img className="checkbox-icon27" alt="" src="/checkbox7.svg" />
          <b className="clothing5">Clothing</b>
          <img className="checkbox-icon28" alt="" src="/checkbox6.svg" />
          <b className="clothing5">Electronics</b>
          <img className="checkbox-icon28" alt="" src="/checkbox6.svg" />
          <b className="clothing5">Grocery</b>
          <img className="checkbox-icon28" alt="" src="/checkbox6.svg" />
          <b className="clothing5">Health</b>
        </div>
        <div className="color-circle3">
          <img className="vector-icon57" alt="" src="/vector5.svg" />
          <img className="vector-icon58" alt="" src="/vector5.svg" />
          <img className="vector-icon59" alt="" src="/vector5.svg" />
          <img className="vector-icon60" alt="" src="/vector5.svg" />
          <img className="vector-icon61" alt="" src="/vector5.svg" />
          <img className="vector-icon62" alt="" src="/vector5.svg" />
          <img className="vector-icon63" alt="" src="/vector5.svg" />
          <img className="vector-icon64" alt="" src="/vector5.svg" />
          <img className="vector-icon65" alt="" src="/vector5.svg" />
          <img className="vector-icon66" alt="" src="/vector5.svg" />
          <img className="vector-icon57" alt="" src="/vector5.svg" />
          <img className="vector-icon58" alt="" src="/vector5.svg" />
          <img className="vector-icon59" alt="" src="/vector5.svg" />
          <img className="vector-icon60" alt="" src="/vector5.svg" />
          <img className="vector-icon61" alt="" src="/vector5.svg" />
          <b className="color6">Color</b>
        </div>
        <b className="price3">Price</b>
        <img className="price-icon4" alt="" src="/price-icon.svg" />
        <div className="price-section4">
          <img className="price-section-child7" alt="" src="/line-1.svg" />
          <div className="price-section-child8" />
          <div className="price-section-child9" />
          <b className="b12">$0</b>
          <b className="b13">$1000</b>
          <b className="b14">$69</b>
        </div>
        <div className="area6">
          <div className="location3" />
          <b className="area7">Area</b>
          <b className="choose-location3">choose location</b>
        </div>
      </div>
      <div
        className="main-logo8"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black8" />
        <b className="robiz9">roBiz</b>
        <b className="netze9">NetZe</b>
      </div>
      <div className="navbar6" data-animate-on-scroll>
        <div className="backlogo442" />
        <div className="home27" onClick={onHomeContainerClick}>
          <b className="home28">Home</b>
        </div>
        <div className="about-us6">
          <b className="home28">About Us</b>
        </div>
        <div className="contact6">
          <b className="home28">Contact</b>
        </div>
        <div className="products7" onClick={onProductsContainerClick}>
          <b className="home28">Products</b>
        </div>
      </div>
      <div
        className="login12"
        onClick={onLoginContainerClick}
        data-animate-on-scroll
      >
        <div className="login-brown6" />
        <b className="login13">LOGIN</b>
      </div>
      <div className="search-bar6" data-animate-on-scroll>
        <div className="backlogo443" />
        <input
          className="search-products6"
          placeholder="Search Products"
          type="text"
        />
        <button className="frame3">
          <img className="vector-icon72" alt="" src="/vector.svg" />
          <img className="vector-icon73" alt="" src="/vector1.svg" />
        </button>
      </div>
    </div>
  );
};

export default ProductScreen2;
