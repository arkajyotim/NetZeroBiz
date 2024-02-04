import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignedInUser.css";

const SignedInUser = () => {
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

  const onFrameClick = useCallback(() => {
    navigate("/signed-in-user-1");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/signed-in-user-1");
  }, [navigate]);

  const onMainLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProductsContainerClick = useCallback(() => {
    navigate("/product-screen-1");
  }, [navigate]);

  return (
    <div className="signed-in-user" data-animate-on-scroll>
      <img
        className="background-blobs-icon11"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="filters12" data-animate-on-scroll>
        <div className="back6" />
        <div className="filter-section5">
          <b className="sports2">Sports</b>
          <b className="grocery6">Grocery</b>
          <b className="clothing6">Clothing</b>
          <img className="checkbox-icon33" alt="" src="/checkbox9.svg" />
          <img className="checkbox-icon34" alt="" src="/checkbox10.svg" />
          <img className="checkbox-icon35" alt="" src="/checkbox11.svg" />
          <img className="checkbox-icon36" alt="" src="/checkbox12.svg" />
          <img className="checkbox-icon37" alt="" src="/checkbox13.svg" />
          <img className="checkbox-icon38" alt="" src="/checkbox14.svg" />
          <b className="filters13">Filters</b>
          <b className="electronics6">Electronics</b>
          <b className="health6">Health</b>
          <b className="beauty2">Beauty</b>
        </div>
        <img className="color-circle-icon1" alt="" src="/colorcircle.svg" />
        <img className="price-icon5" alt="" src="/price-icon.svg" />
        <div className="price-section5">
          <img className="price-section-child10" alt="" src="/line-1.svg" />
          <div className="price-section-child11" />
          <div className="price-section-child12" />
          <b className="b16">$0</b>
          <b className="b17">$1000</b>
          <b className="b18">$69</b>
        </div>
      </div>
      <div className="shop6" data-animate-on-scroll>
        <div className="row-24" data-animate-on-scroll>
          <div className="backlogo446" />
          <div className="backlogo447" />
          <div className="backlogo448" />
          <img className="backlogo4-icon10" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage3">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon8" alt="" src="/image-51@2x.png" />
          <b className="redragon-k617-fizz3">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon8" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming3">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon8" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code3">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon8" alt="" src="/image-8@2x.png" />
        </div>
        <div className="row-34">
          <div className="backlogo446" />
          <div className="backlogo447" />
          <div className="backlogo448" />
          <img className="backlogo4-icon10" alt="" src="/backlogo4.svg" />
          <b className="lg-electronics-ultragear-27gp73">
            LG Electronics Ultragear-27Gp750-B Full Hd IPS,27 Inch(68.5 Cm) 240
            Hz Nvidia G-Sync Compatible,Freesync Premium,LCD,1920 X 1080
            Pixels(…
          </b>
          <img className="image-5-icon9" alt="" src="/image-52@2x.png" />
          <b className="redragon-k617-fizz3">
            <p className="himalaya-wellness-pure-herbs-m3">
              <a
                className="himalaya-wellness-pure3"
                href={`https://www.amazon.in/Himalaya-Wellness-Herbs-Meshashringi-Metabolic/dp/B006FE0JJ2?pd_rd_w=4ezSl&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=RSG126QVBFYRR7M2560W&pd_rd_wg=UzBDf&pd_rd_r=9bc68698-bc04-4ac0-9316-9dab96359c71&pd_rd_i=B006FE0JJ2&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_nped_pd_gwd_bag_pd_gw_rp_2_t`}
                target="_blank"
              >
                Himalaya Wellness Pure Herbs Meshashringi Metabolic Wellness -
                60 Tablet
              </a>
            </p>
            <p className="himalaya-wellness-pure-herbs-m3">
              60 Count (Pack of 1)
            </p>
          </b>
          <img className="image-6-icon9" alt="" src="/image-61@2x.png" />
          <b className="lakme-absolute-skin3">
            Lakme Absolute Skin Natural Mousse Golden Light 04, SPF8 Natural
            Finish Matte Cream Foundation -Long Lasting Weightless Full Coverage
            Face Makeup,....
          </b>
          <img className="image-7-icon8" alt="" src="/image-71@2x.png" />
          <a
            className="engage-woman-deodorant3"
            href={`https://www.amazon.in/Engage-Woman-Deodorant-Tease-Pack/dp/B087TY9PHD?pd_rd_w=hAyl1&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=AKMGFBR5ABRG49565PZP&pd_rd_wg=0bkbl&pd_rd_r=26190a20-5ea7-48a4-911a-7903b8d02a15&pd_rd_i=B087TY9PHD&psc=1&ref_=pd_bap_d_grid_rp_0_5_t`}
            target="_blank"
          >
            Engage Woman Deodorant, Tease, 150 ml (Pack of 3)
          </a>
          <img className="image-8-icon9" alt="" src="/image-81@2x.png" />
        </div>
        <div className="header5" data-animate-on-scroll />
      </div>
      <div className="navbar7">
        <div className="backlogo452" />
        <div className="home37">
          <b className="home38">Home</b>
        </div>
        <div className="about-us7">
          <b className="home38">About Us</b>
        </div>
        <div className="contact7">
          <b className="home38">Contact</b>
        </div>
        <div className="products11">
          <b className="home38">Products</b>
        </div>
      </div>
      <img
        className="frame-icon6"
        alt=""
        src="/frame11.svg"
        onClick={onFrameClick}
      />
      <img
        className="frame-icon7"
        alt=""
        src="/frame2.svg"
        onClick={onFrameIconClick}
      />
      <div className="welcome-rexon">
        <span>Welcome,</span>
        <b> Rexon</b>
      </div>
      <div
        className="main-logo12"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black12" />
        <b className="robiz13">roBiz</b>
        <b className="netze13">NetZe</b>
      </div>
      <div className="navbar8" data-animate-on-scroll>
        <div className="backlogo453" />
        <div className="home42" onClick={onHomeContainerClick}>
          <b className="home38">Home</b>
        </div>
        <div className="about-us8">
          <b className="home38">About Us</b>
        </div>
        <div className="contact8">
          <b className="home38">Contact</b>
        </div>
        <div className="products12" onClick={onProductsContainerClick}>
          <b className="home38">Products</b>
        </div>
      </div>
      <div className="search-bar8" data-animate-on-scroll>
        <div className="backlogo454" />
        <input
          className="search-products8"
          placeholder="Search Products"
          type="text"
        />
        <button className="frame4">
          <img className="vector-icon74" alt="" src="/vector.svg" />
          <img className="vector-icon75" alt="" src="/vector1.svg" />
        </button>
      </div>
    </div>
  );
};

export default SignedInUser;
