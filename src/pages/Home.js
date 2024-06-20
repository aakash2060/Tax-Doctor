import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/our service.jpg";
import WhatsApp from "../assets/whatsapp.png";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Carousel interval={2000} pause="hover">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div id="about-us" className="row mt-4">
        <div className="col-lg-6">
          <div className="about-us p-4" style={{border:'10'}}>
            <h2>About Us</h2>
            <p>
              Welcome to Tax Doctor, your trusted financial consulting firm. We
              specialize in a wide array of services tailored to meet your
              financial needs. Our offerings include accounting services,
              preparation of financial statements, projected and provisional
              financial statements, loan file documentation, D1, D2, D3 return
              filing, VAT and TDS return filing, obtaining tax clearance
              certificates, and handling all tax-related activities with
              precision and expertise. At Tax Doctor, we understand the
              complexities of business operations, which is why we also offer
              services such as company registration and renewal, updates of
              company addresses, objectives, and capital, as well as assistance
              in obtaining share lagat and managing purchase and sales of
              shares. Our expertise extends to PAN, VAT, and ward registrations,
              Banijya and Gharelu registration and renewal, and internal control
              management. With a focus on excellence and attention to detail,
              Tax Doctor ensures efficient fixed assets and inventory
              management, providing you with comprehensive financial solutions.
              Trust Tax Doctor to be your partner in achieving financial success
              and stability.
              <p>
                <br></br>
                We operate on the same philosophy and goals set up by our
                founders to serve our clients honestly with high concern for
                their best interests and achieve high level of customer
                satisfaction. This fact is epitomized by large level retention
                of old customers apart from addition of many a new domestic and
                global players, every month. Tax Doctor is a
                firm with "One Stop Solution" policy for its clients, where we
                are delivering a wide range of business advisory services. We
                assist our clients and their businesses, organizations with tax
                strategy, planning and compliance. We help Organizations work
                smarter and grow faster, reach out to us to build effective
                organizations, reduce costs, manage risk and regulations and
                leverage talent. We help companies maximize value during these
                moments of exceptional change. With a global network of trusted
                advisors, we support companies with their accounting, financial
                reporting and valuation needs. Our practitioners combine
                accounting, valuation and tax expertise to help you preserve the
                value of your business. At Tax Doctor we
                strongly believe in establishing long term relationship with the
                clients. To us every client is equally important and when they
                repose their trust in us, it becomes our bounden duty to serve
                them with utmost care and the highest level of professional
                competence. We accept the fact that we are not the largest firm
                nor do we have a global presence, but our team is like a family.
                Every member of the team at Tax Doctor is
                encouraged to be friendly, professional and fully committed to
                delivering the best service. Our strength lies in our
                versatility – wherein you would experience being served
                personally by a senior member as if you have engaged the
                smallest of accounting firms and yet he can draw upon the vast
                experience and skills of various partners and firms’
                professionals to ensure that he is able to provide you with all
                round solution which is second to none.
              </p>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="gmaps p-4">
            <div className="location-heading mb-4"><h2 style={{marginBottom:'10px'}}>Our Locations</h2></div>
            <div className="location-map">
            <p style={{ padding: "10px", fontFamily:"" , fontWeight: "bold"}}>Samakhusi address</p>
              <iframe
                title="Samakhusi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.262590248167!2d85.29002883476562!3d27.72784930000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004f48dedb%3A0x40e866e18e0bfab8!2sTax%20Doctor!5e0!3m2!1sen!2sus!4v1711590439177!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 10 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="location-map">
              <p style={{ padding: "10px", fontFamily:"" , fontWeight: "bold", margin:'10px'}}>Banasthali address</p>
              <iframe
                title="Banasthali Location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113019.22316900724!2d85.21062965816533!3d27.72189490011074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb190036e08e43%3A0x91bb8f65134fd735!2sKathmandu%2044600%2C%20Nepal!3m2!1d27.7219193!2d85.2930311!5e0!3m2!1sen!2sus!4v1714307841700!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12">
          <div className="chat-icons d-flex justify-content-end">
            <img
              src={WhatsApp}
              className="whatsapp-icon"
              width={65}
              alt="WhatsApp"
              onClick={() => {
                window.open(
                  "https://wa.me/+9779843713458?text=Hello%2C%20Namaste%21%20I%20have%20some%20questions%3F",
                  "_blank"
                );
              }}
            />
            <MessengerCustomerChat
              pageId="10114995638150"
              appId="432968499221329"
              htmlRef="messenger-ref"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
