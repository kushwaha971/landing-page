import React from "react";
import ContactImg from "../../images/customer-support.svg";


const ContactSection = () => {
  return (
    <>
      <div
        style={{
          display: window.innerWidth <= 768 ? "" : "flex",
          fontFamily: "Poppins",
          fontStyle: "normal",
          color: "#272D38",
          textTransform: "capitalize",
          backgroundImage: "linear-gradient(to bottom right, #fff, #e4edf9)"
        }}
       
      >
        <div>
          <div>
            <img
              src={ContactImg}
              alt=""
              style={{
                display: window.innerWidth <= 768 ? "none" : "",
                maxWidth: window.innerWidth <= 768 ? 400 : "",
                marginTop: window.innerWidth <= 768 ? "" : "80px",
                marginRight: window.innerWidth <= 768 ? "" : "100px",
                marginLeft: window.innerWidth <= 768 ? "" : "150px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: window.innerWidth <= 480 ? 40 : 150,
            marginRight: window.innerWidth <= 768 ? "" : "50px",
          }}
        >
          <h1
            style={{
              lineHeight: "100%",
              fontSize: window.innerWidth <= 768 ? "40px" : "60px",
              paddin: window.innerWidth <= 768 ? "10px 5px" : "10px 5px",
            }}
          >
            Be a part of the next big thing
          </h1>

          <p
            style={{
              fontWeight: "400",
              lineHeight: "28px",
              left: window.innerWidth <= 768 ? "" : 188,
              fontSize: window.innerWidth <= 768 ? 16 : 25,
              padding: window.innerWidth <= 480 ? "12px 10px" : "15px 5px",
            }}
          >
          We work with Brans, Startups, to SMEs. Colaborate for more impact and growt

          </p>
          <button
            style={{
              width: "167px",
              height: "48px",
              color: "white",
              cursor: "pointer",
              background: "#8EADD5",
              borderRadius: "5px",
              paddin: window.innerWidth <= 480 ? "12px 10px" : "12px 1px",
            }}
          >
            contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
