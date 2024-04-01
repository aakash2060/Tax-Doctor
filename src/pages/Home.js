import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/our service.jpg";
import "../pages/Home.css";
import WhatsApp from "../assets/whatsapp.png";
import MessengerCustomerChat from "react-messenger-customer-chat";
export const Home = () => {
  const carousel = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "79vh",
    objectFit: "cover",
  };

  const third = {
    width: "100%",
    height: "79vh",
    objectFit: "contain",
  };

  const chatIcon = {
    position: "fixed",
    bottom: "20%", // Adjusted bottom position
    left: "95%", // Adjusted left position
    transform: "translateX(-50%)", // Center horizontally
    zIndex: "1000",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    AnimationEffect: "shake",
  };

  const openWhatsApp = () => {
    const whatsappURL =
    "https://wa.me/+9779843713458?text=Hello%2C%20Namaste%21%20I%20have%20some%20questions%3F";
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="carousel" style={carousel}>
        <Carousel interval={2000} pause="hover">
          <Carousel.Item>
            <img
              className="pic"
              style={imgStyle}
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="pic2"
              style={imgStyle}
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="pic3" style={third} src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="fixed-bottom right -100 p-3" style={chatIcon}>
          <img src={WhatsApp} width={65} alt="aaa" onClick={openWhatsApp} />
          <MessengerCustomerChat
            pageId="101149956381509"
            appId="432968499221329"/>
        </div>
        
        <div
          className="OurServicesContainer"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="AboutUs"
            style={{
              maxWidth: "800px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div id="About Us"
              className="Heading"
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
                About Us
            </div>
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
            </p>
          </div>
          <div
            className="GMaps"
            style={{
              maxWidth: "calc(50% - 20px)",
              marginLeft: "20px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.262590248167!2d85.29002883476562!3d27.72784930000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004f48dedb%3A0x40e866e18e0bfab8!2sTax%20Doctor!5e0!3m2!1sen!2sus!4v1711590439177!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
