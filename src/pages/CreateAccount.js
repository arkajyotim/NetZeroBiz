import ContainerCardForm from "../components/ContainerCardForm";
import ShopAddressContainer from "../components/ShopAddressContainer";
import ContactForm from "../components/ContactForm";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div className="create-account">
      <img
        className="background-blobs-icon4"
        alt=""
        src="/backgroundblobs.svg"
      />
      <ContainerCardForm roBizTop="465px" roBizLeft="97px" />
      <div className="white-background" />
      <b className="create-account-as">Create Account As</b>
      <div className="seller">
        <div className="seller-child" />
        <b className="seller1">Seller</b>
      </div>
      <div className="buyer">
        <div className="buyer-child" />
        <b className="buyer1">Buyer</b>
      </div>
      <div className="create-account1">
        <div className="seller-child" />
        <b className="create">Create</b>
      </div>
      <ShopAddressContainer locationAddress="Shop Address" />
      <ShopAddressContainer locationAddress="Business Name" propTop="592px" />
      <ContactForm contactNumber="Contact No." />
      <ContactForm contactNumber="Email" propLeft="616px" propTop="456px" />
      <ContactForm
        contactNumber="Last Name"
        propLeft="1215px"
        propTop="318px"
      />
      <ContactForm
        contactNumber="First Name"
        propLeft="616px"
        propTop="320px"
      />
    </div>
  );
};

export default CreateAccount;
