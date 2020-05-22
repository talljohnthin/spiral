import React, { useState, useEffect } from "react";
import TermsAndDisclosuresModal from "./TermsAndDisclosuresModal";
import SellInfoModal from "./SellInfoModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import ContactUsModal from "./ContactUsModal";

function Index() {
  const [termsModal, setTermsModal] = useState(false);
  const [sellInfoModal, setSellInfoModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const pleaseClose = () => {
    setTermsModal(false);
    setSellInfoModal(false);
    setPrivacyModal(false);
    setContactModal(false);
  };

  return (
    <React.Fragment>
      <TermsAndDisclosuresModal isOpen={termsModal} pleaseClose={pleaseClose} />
      <SellInfoModal isOpen={sellInfoModal} pleaseClose={pleaseClose} />
      <PrivacyPolicyModal isOpen={privacyModal} pleaseClose={pleaseClose} />
      <ContactUsModal isOpen={contactModal} pleaseClose={pleaseClose} />

      <footer className="footer">
        <li>Company Name</li>
        <li className="hasLink" onClick={() => setTermsModal(true)}>
          Terms and Disclosures
        </li>
        <li className="hasLink" onClick={() => setSellInfoModal(true)}>
          Do Not Sell My Info
        </li>
        <li className="hasLink" onClick={() => setPrivacyModal(true)}>
          Privacy Policy
        </li>
        <li className="hasLink" onClick={() => setContactModal(true)}>
          Contact Us
        </li>
      </footer>
    </React.Fragment>
  );
}

export default Index;
