import React from "react";
import bussiness_pepople from "../../../images/business-people-discussing-business-idea(1).svg";


function Home() {
  console.log(window.innerWidth);
  return (
    <>
      <div
        style={{
          display: window.innerWidth <= 768 ? "" : "flex",
          fontFamily: "Poppins",
          fontStyle: "normal",
          textTransform: "capitalize",
          color: "#272D38",
          backgroundImage: 'linear-gradient(to top left, #fff, #d9e5f5)'
        }}
        className="cont_home"
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
              fontSize: window.innerWidth <= 768 ? 40 : 60,
              paddin: window.innerWidth <= 768 ? "10px 5px" : "10px 10px",
            }}
          >
            Building Digital <br />
            Products, brands <br />& experience
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
            digital agency is your online team management tool that easy and
            ptompt
          </p>
          <button
            style={{
              width: "167px",
              height: "48px",
              background: "#8EADD5",
              color: "white",
              cursor: "pointer",
              borderRadius: "5px",
              paddin: window.innerWidth <= 480 ? "12px 10px" : "12px 1px",
            }}
          >
            contact us
          </button>
        </div>

        <div>
          <img
            src={bussiness_pepople}
            alt="Bussiness peopele"
            style={{
              maxWidth: window.innerWidth <= 768 ? 300 : "",
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

export default Home;
