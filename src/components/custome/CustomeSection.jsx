import React from "react";
import business from "../../images/businessman-analyzing-data.svg";


function CustomeSection() {
  return (
    <>
      <div
        style={{
          display: window.innerWidth <= 768 ? "" : "flex",
          fontFamily: "Poppins",
          fontStyle: "normal",
          textTransform: "capitalize",
          color: "#272D38",
          backgroundImage: "linear-gradient(to  right top, #fff, #d9e5f5)"
        }}
       
      >
        <div
          style={{
            textAlign: "center",
            padding: window.innerWidth <= 768 ? 40 : 150,
          }}
        >
          <h1
            style={{
              fontWeight: 700,
              lineHeight: "100%",
              fontSize: window.innerWidth <= 768 ? 40 : 70,
              padding: window.innerWidth <= 480 ? "10px 5px" : "10px 10px",
            }}
          >
            Custome & Plugin <br /> Development
          </h1>

          <p
            style={{
              fontWeight: 400,
              lineHeight: "30px",
              left: window.innerWidth <= 768 ? "" : 188,
              fontSize: window.innerWidth <= 768 ? 16 : 25,
              padding: window.innerWidth <= 480 ? "12px 10px" : "15px 5px",
            }}
          >
            Commonly used in the graphic, print & publishing industris for
            previewing visual layout and <br />
            mockups
          </p>
          <div
            style={{
              fontSize: "30px",
              padding: window.innerWidth <= 768 ? "12px 10px" : "15px 5px",
              display: window.innerWidth <= 768 ? "none" : "",
            }}
          >
            <i class=" fi-rr-arrow-right"></i>
          </div> 
          <div
            style={{
              fontSize: "30px",
              padding: window.innerWidth <= 768 ? "12px 10px" : "15px 5px",
              display: window.innerWidth <= 768 ? "" : "none",
            }}
          >
            <i class="fi fi-rr-arrow-down"></i>
          </div>
        </div>
        <div style={{ marginTop: window.innerWidth <= 768 ? "" : "80px" }}>
          <img
            src={business}
            alt="Bussiness Alnalyzing"
            style={{
              maxWidth: window.innerWidth <= 768 ? 350 : '',
              marginTop: window.innerWidth <= 768 ? "" : "80px",
              marginRight: window.innerWidth <= 768 ? "" : "250px",
              marginLeft: window.innerWidth <= 768 ? "15px" : "",
              height: "450px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CustomeSection;
