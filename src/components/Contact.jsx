import "../styles/Contact.scss";
import { FaPhone } from "react-icons/fa";
import {IoLocationSharp } from "react-icons/io5";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <p className="heading">REACH US HERE</p>
        <p>
          Creativity is at the core of what we do, but we also recognize the
          significance of results-driven strategies to achieve success.
        </p>
        <form action="">
          <input type="text" placeholder="Full Name" required />
          <div>
            <input type="email" placeholder="Your Official Email" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <textarea
            placeholder="Describe Your Project"
            name="DescribeProject"
            id="projectDescribe"
            cols="30"
            rows="10"
          ></textarea>
          <select name="serviceType" id="serviceType">
            <option value="select servive" defaultChecked>
              Select Service
            </option>
            <option value="performance marketing">Performace Marketing</option>
            <option value="website devlopment">Website Development</option>
          </select>
          <select name="budget" id="budget">
            <option value="default" defaultChecked>
              Select Budget Range
            </option>
            <option value="1 to 5 lakh">Budget 100000 to 500000 ₹</option>
            <option value="5 to 10 lakh">Budget 500000 to 1000000 ₹</option>
            <option value="10 to 50 lakh">Budget 1000000 to 5000000 ₹</option>
            <option value="50 lakh +">Budget 5000000+ ₹</option>
          </select>
          <button className="button" type="submit">
            SUBMIT REQUEST
          </button>
        </form>
      </div>



      <div className="address">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.3707953403105!2d85.7981774802966!3d20.243451182784757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7af35757cbd%3A0xe853f67892f8e2c7!2sPhase-2%2C%20Indraprastha%2C%20Pokhariput%2C%20Bhubaneswar%2C%20Odisha%20751020!5e0!3m2!1sen!2sin!4v1683562058020!5m2!1sen!2sin"
            width="400"
            height="300"
          ></iframe>
        </div>
        <div className="addressMain">
          <div className="addressContent">
            <IoLocationSharp className="contactIcon" />
            <div className="subAddress">
              <p className="head">Registered Office Address</p>
              <p>
                Flat no. 302, A1 wing, Tamando, Bhubaneswar, Odisha - 752054
              </p>
            </div>
          </div>
          <div className="addressContent">
            <IoLocationSharp className="contactIcon" />
            <div className="subAddress">
              <p className="head">Branch Office Address</p>
              <p>
                Plot no. 13, Indraprastha Phase-2, Pokhariput, Bhubaneswar,
                Odisha - 751020
              </p>
            </div>
          </div>
          <div className="addressContent">
            <FaPhone className="contactIcon" />
            <div className="subAddress">
              <p className="head">Call Us</p>
              <p>+91 9937342453 | +91 84560 87333</p>
            </div>
          </div>
          <div className="addressContent">
            <GrMail className="contactIcon" />
            <div className="subAddress">
              <p className="head">Mail Us</p>
              <p>info@nezlertech.com | ceo@nezlertech.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
