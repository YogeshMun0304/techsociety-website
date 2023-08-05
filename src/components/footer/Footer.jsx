import React from "react";
import CollegeLogo from "../../assets/collegelogo.svg";
import {LocationOn, Mail, LocalPhone, Instagram} from "@mui/icons-material";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={CollegeLogo} alt="college-logo" />
        <div className="centre-text">
          <h1>
            International Institute of Information Technology, Bhubaneswar
          </h1>
          <div>
            <a href="https://www.google.com/maps/place/International+Institute+of+Information+Technology+Bhubaneswar/@20.2947474,85.7408214,17z/data=!4m14!1m7!3m6!1s0x3a1907923fc9c557:0xd3b0b05336a9dfaa!2sInternational+Institute+of+Information+Technology+Bhubaneswar!8m2!3d20.2947474!4d85.7433963!16s%2Fm%2F05f711n!3m5!1s0x3a1907923fc9c557:0xd3b0b05336a9dfaa!8m2!3d20.2947474!4d85.7433963!16s%2Fm%2F05f711n?entry=ttu">
              <p>
                <LocationOn /> Gothapatna, PO: Malipada, Bhubaneswar-751003,
                India
              </p>
            </a>
            <a href="mailto:offdean@iiit-bh.ac.in">
              <p>
                <Mail /> offdean@iiit-bh.ac.in
              </p>
            </a>
            <a href="tel:9999999999">
              <p>
                <LocalPhone /> 987-654-3210
              </p>
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="mailto:tech-society@iiit-bh.ac.in">
            <Mail />{" "}tech-society@iiit-bh.ac.in
          </a><br />
          <a href="https://instagram.com/techsociiitbh">
            <Instagram /> {" "}techsociiitbh
          </a>
        </div>
      </div>
      <div className="footer-bottom">© Copyright Tech-society 2023</div>
    </div>
  );
}

export default Footer;
