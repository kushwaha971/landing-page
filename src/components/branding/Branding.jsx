import React from "react";

import team from "../../images/designer-team-working-on-creative-design.svg";


const Branding = () => {
  const imageInfo = () => {
    return (
      <div>
        <div>
          <img
            src={team}
            alt="Team Work"
            style={{
              maxWidth: window.innerWidth <= 768 ? 350 : "",
              marginTop: window.innerWidth <= 768 ? "" : "80px",
              marginRight: window.innerWidth <= 768 ? "" : "100px",
              marginLeft: window.innerWidth <= 768 ? "15px" : "150px",
            }}
          />
        </div>
      </div>
    );
  };

  const data = () => {
    return (
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
            padding: window.innerWidth <= 480 ? "10px 5px" : "10px 5px",
          }}
        >
          branding & design system
        </h1>
        <p
          style={{
            fontWeight: 400,
            lineHeight: "28px",
            left: window.innerWidth <= 768 ? "" : 188,
            fontSize: window.innerWidth <= 768 ? 16 : 25,
            padding: window.innerWidth <= 480 ? "10px 5px" : "10px 5px",
          }}
        >
          commonly used in the graphic, print & publishing industires for
          previweing visual layout and mockup
        </p>

        <div
          style={{
            fontSize: "30px",
            padding: window.innerWidth <= 768 ? "10px 10px" : "15px 5px",
            display: window.innerWidth <= 768 ? "none" : "",
          }}
        >
          <i class=" fi-rr-arrow-right"></i>
        </div>
        <div
          style={{
            fontSize: "30px",
            padding: window.innerWidth <= 480 ? "12px 10px" : "15px 5px",
            display: window.innerWidth <= 768 ? "" : "none",
          }}
        >
          <i class=" fi-rr-arrow-down"></i>
        </div>

        <div></div>
      </div>
    );
  };

  return (
    <>
      <div
       
        style={{
          display: window.innerWidth <= 768 ? "" : "flex",
          fontFamily: "Poppins",
          fontStyle: "normal",
          textTransform: "capitalize",
          color: "#272D38",
          backgroundImage: 'linear-gradient(to right bottom , #fff, #d9e5f5)'
        }}
      >
        {window.innerWidth <= 768 ? data() : imageInfo()}
        {window.innerWidth <= 768 ? imageInfo() : data()}
      </div>
    </>
  );
};

export default Branding;
