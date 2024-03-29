import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOMEMAIN from "./pages/HOMEMAIN";
import ProductScreenBag from "./pages/ProductScreenBag";
import CreateAccountSeller1 from "./pages/CreateAccountSeller1";
import CreateAccountBuyer from "./pages/CreateAccountBuyer";
import ProductScreen1 from "./pages/ProductScreen1";
import HOMEMAINProto from "./pages/HOMEMAINProto";
import ProductLaptop from "./pages/ProductLaptop";
import ProductScreen from "./pages/ProductScreen";
import ProductScreen2 from "./pages/ProductScreen2";
import CreateAccountSeller from "./pages/CreateAccountSeller";
import CreateAccountSignIn from "./pages/CreateAccountSignIn";
import CreateAccountBuyer1 from "./pages/CreateAccountBuyer1";
import SignedInUser from "./pages/SignedInUser";
import SignedInUser1 from "./pages/SignedInUser1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-bag":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-seller-2":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-buyer1":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-2":
        title = "";
        metaDescription = "";
        break;
      case "/home-main-proto":
        title = "";
        metaDescription = "";
        break;
      case "/product-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-1":
        title = "";
        metaDescription = "";
        break;
      case "/product-screen-3":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-seller":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/create-account-buyer":
        title = "";
        metaDescription = "";
        break;
      case "/signed-in-user":
        title = "";
        metaDescription = "";
        break;
      case "/signed-in-user-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOMEMAIN />} />
      <Route path="/product-screen-bag" element={<ProductScreenBag />} />
      <Route
        path="/create-account-seller-2"
        element={<CreateAccountSeller1 />}
      />
      <Route path="/create-account-buyer1" element={<CreateAccountBuyer />} />
      <Route path="/product-screen-2" element={<ProductScreen1 />} />
      <Route path="/home-main-proto" element={<HOMEMAINProto />} />
      <Route path="/product-laptop" element={<ProductLaptop />} />
      <Route path="/product-screen-1" element={<ProductScreen />} />
      <Route path="/product-screen-3" element={<ProductScreen2 />} />
      <Route path="/create-account-seller" element={<CreateAccountSeller />} />
      <Route path="/create-account-sign-in" element={<CreateAccountSignIn />} />
      <Route path="/create-account-buyer" element={<CreateAccountBuyer1 />} />
      <Route path="/signed-in-user" element={<SignedInUser />} />
      <Route path="/signed-in-user-1" element={<SignedInUser1 />} />
    </Routes>
  );
}
export default App;
