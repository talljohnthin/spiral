import React, { useState, useEffect } from "react";
import TermsAndDisclosuresModal from "./TermsAndDisclosuresModal";
import SellInfoModal from "./SellInfoModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import ContactUsModal from "./ContactUsModal";
import { useSelector } from "react-redux";

function Index() {
  const [termsModal, setTermsModal] = useState(false);
  const [sellInfoModal, setSellInfoModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const isLanding = useSelector((state) => state.data.landingView);

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

      <footer className={isLanding ? "footer landing" : "footer"}>
        <li>Dream Big Media Inc</li>
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
