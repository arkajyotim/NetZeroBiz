import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignedInUser1.css";

const SignedInUser1 = () => {
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

  return (
    <div className="signed-in-user-1" data-animate-on-scroll>
      <img
        className="background-blobs-icon12"
        alt=""
        src="/backgroundblobs.svg"
      />
      <div className="filters14">
        <div className="back7" />
        <div className="filter-section6">
          <b className="sports3">Sports</b>
          <b className="grocery7">Grocery</b>
          <b className="clothing7">Clothing</b>
          <img className="checkbox-icon39" alt="" src="/checkbox.svg" />
          <img className="checkbox-icon40" alt="" src="/checkbox.svg" />
          <img className="checkbox-icon41" alt="" src="/checkbox.svg" />
          <img className="checkbox-icon42" alt="" src="/checkbox.svg" />
          <img className="checkbox-icon43" alt="" src="/checkbox.svg" />
          <img className="checkbox-icon44" alt="" src="/checkbox.svg" />
          <b className="filters15">Filters</b>
          <b className="electronics7">Electronics</b>
          <b className="health7">Health</b>
          <b className="beauty3">Beauty</b>
        </div>
        <img className="color-circle-icon2" alt="" src="/colorcircle.svg" />
        <img className="price-icon6" alt="" src="/price-icon.svg" />
        <div className="price-section6">
          <img className="price-section-child13" alt="" src="/line-1.svg" />
          <div className="price-section-child14" />
          <div className="price-section-child15" />
          <b className="b19">$0</b>
          <b className="b20">$1000</b>
          <b className="b21">$69</b>
        </div>
      </div>
      <div className="shop7">
        <div className="row-25" data-animate-on-scroll>
          <div className="backlogo455" />
          <div className="backlogo456" />
          <div className="backlogo457" />
          <img className="backlogo4-icon12" alt="" src="/backlogo4.svg" />
          <b className="ezee-black-garbage4">
            Ezee Black Garbage Bags for Dustbin | 90 Pcs | Medium 19 X 21 Inches
            | 30 Pcs x Pack of 3
          </b>
          <img className="image-5-icon10" alt="" src="/image-51@2x.png" />
          <b className="redragon-k617-fizz4">
            Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact
            Mechanical Keyboard
          </b>
          <img className="image-6-icon10" alt="" src="/image-6@2x.png" />
          <b className="qizlar-extended-gaming4">
            Qizlar Extended Gaming Mouse Pad | Extra Large Mouse Mat for Gamer
          </b>
          <img className="image-7-icon10" alt="" src="/image-7@2x.png" />
          <b className="wild-stone-code4">
            Wild Stone Code Titanium Body Perfume for Men, 120ml
          </b>
          <img className="image-8-icon10" alt="" src="/image-8@2x.png" />
        </div>
        <div className="row-35" data-animate-on-scroll>
          <div className="backlogo455" />
          <div className="backlogo456" />
          <div className="backlogo457" />
          <img className="backlogo4-icon12" alt="" src="/backlogo4.svg" />
          <b className="lg-electronics-ultragear-27gp74">
            LG Electronics Ultragear-27Gp750-B Full Hd IPS,27 Inch(68.5 Cm) 240
            Hz Nvidia G-Sync Compatible,Freesync Premium,LCD,1920 X 1080
            Pixels(…
          </b>
          <img className="image-5-icon11" alt="" src="/image-52@2x.png" />
          <b className="redragon-k617-fizz4">
            <p className="himalaya-wellness-pure-herbs-m4">
              <a
                className="himalaya-wellness-pure4"
                href={`https://www.amazon.in/Himalaya-Wellness-Herbs-Meshashringi-Metabolic/dp/B006FE0JJ2?pd_rd_w=4ezSl&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=RSG126QVBFYRR7M2560W&pd_rd_wg=UzBDf&pd_rd_r=9bc68698-bc04-4ac0-9316-9dab96359c71&pd_rd_i=B006FE0JJ2&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_nped_pd_gwd_bag_pd_gw_rp_2_t`}
                target="_blank"
              >
                Himalaya Wellness Pure Herbs Meshashringi Metabolic Wellness -
                60 Tablet
              </a>
            </p>
            <p className="himalaya-wellness-pure-herbs-m4">
              60 Count (Pack of 1)
            </p>
          </b>
          <img className="image-6-icon11" alt="" src="/image-61@2x.png" />
          <b className="lakme-absolute-skin4">
            Lakme Absolute Skin Natural Mousse Golden Light 04, SPF8 Natural
            Finish Matte Cream Foundation -Long Lasting Weightless Full Coverage
            Face Makeup,....
          </b>
          <img className="image-7-icon10" alt="" src="/image-71@2x.png" />
          <a
            className="engage-woman-deodorant4"
            href={`https://www.amazon.in/Engage-Woman-Deodorant-Tease-Pack/dp/B087TY9PHD?pd_rd_w=hAyl1&content-id=amzn1.sym.29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_p=29b45bd4-f0c3-4ec8-9fe3-0244fb94c268&pf_rd_r=AKMGFBR5ABRG49565PZP&pd_rd_wg=0bkbl&pd_rd_r=26190a20-5ea7-48a4-911a-7903b8d02a15&pd_rd_i=B087TY9PHD&psc=1&ref_=pd_bap_d_grid_rp_0_5_t`}
            target="_blank"
          >
            Engage Woman Deodorant, Tease, 150 ml (Pack of 3)
          </a>
          <img className="image-8-icon11" alt="" src="/image-81@2x.png" />
        </div>
        <div className="header6" data-animate-on-scroll />
      </div>
      <img className="profile-small-icon" alt="" src="/frame1.svg" />
      <img className="frame-icon8" alt="" src="/frame@2x.png" />
      <b className="rexon"> Rexon</b>
      <div className="drop-down-profile" data-animate-on-scroll>
        <div className="drop-down-profile-child" />
        <div className="your-orders">Your Orders</div>
        <div className="your-wishlist">Your Wishlist</div>
        <div className="your-address">Your Address</div>
        <div className="switch-accounts">Switch Accounts</div>
        <div className="sign-out">Sign out</div>
        <img className="image-10-icon" alt="" src="/image-10@2x.png" />
        <div className="drop-down-profile-item" />
      </div>
      <div className="view-profile3">
        <div className="view-profile4">View profile</div>
      </div>
      <div
        className="main-logo13"
        onClick={onMainLogoContainerClick}
        data-animate-on-scroll
      >
        <div className="logo-black13" />
        <b className="robiz14">roBiz</b>
        <b className="netze14">NetZe</b>
      </div>
      <div className="navbar9" data-animate-on-scroll>
        <div className="backlogo461" />
        <div className="home47" onClick={onHomeContainerClick}>
          <b className="view-profile4">Home</b>
        </div>
        <div className="about-us9">
          <b className="view-profile4">About Us</b>
        </div>
        <div className="contact9">
          <b className="view-profile4">Contact</b>
        </div>
        <div className="products13" onClick={onProductsContainerClick}>
          <b className="view-profile4">Products</b>
        </div>
      </div>
      <div className="search-bar9" data-animate-on-scroll>
        <div className="backlogo462" />
        <input
          className="search-products9"
          placeholder="Search Products"
          type="text"
        />
        <button className="frame5">
          <img className="vector-icon76" alt="" src="/vector.svg" />
          <img className="vector-icon77" alt="" src="/vector.svg" />
        </button>
      </div>
    </div>
  );
};

export default SignedInUser1;
