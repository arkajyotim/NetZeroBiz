import { useMemo } from "react";
import "./ContactForm.css";

const ContactForm = ({ contactNumber, propLeft, propTop }) => {
  const contactNoStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className="contact-no" style={contactNoStyle}>
      <div className="contact-no-child" />
      <div className="contact-no-wrapper">
        <div className="contact-no1">{contactNumber}</div>
      </div>
    </div>
  );
};

export default ContactForm;
