import React from "react";
import andrew from "../../images/andrew.svg";
import smith from "../../images/smith.svg";
import vera from "../../images/vera.svg";

function Testimonials() {
  const data = [
    {
      pic: andrew,
      name: "andrew rathore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      pic: vera,
      name: "Vera Duncan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
    {
      pic: smith,
      name: "mark smith",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ",
    },
  ];
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          textTransform: "capitalize",
          color: "#272D38",
          fontFamily: "Domine",
          fontStyle: "normal",
          backgroundImage: 'linear-gradient(to  right , #fff, #ecf2fa)'
        }}
     
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: window.innerWidth <= 768 ? "12px" : "16px",
            fontWeight: "400",
            lineHeight: "28px",
          }}
        >
          TESTIMONIALS
        </h3>

        <h1
          style={{
            textAlign: "center",
            fontWeight: window.innerWidth <= 786 ? "700" : "750",
            fontSize: window.innerWidth <= 768 ? "32px" : "45px",
            lineHeight: "100%",
          }}
        >
          Read What Other <br /> have to Say
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:window.innerWidth <= 768 ? "repeat(1,1fr)" : "repeat(3,1fr)",
            gridGap: "2px",
            marginLeft: "15px",
          }}
        >
          {data.map((value) => {
            return (
              <div>
                <div style={{ textAlign: "center" }}>
                  <img src={value.pic} alt="" />
                </div>

                <h3
                  style={{
                    textAlign: " center",
                    fontWeight: "400",
                    fontSize: "30px",
                    lineHeight: "28px",
                  }}
                >
                  {value.name}
                </h3>
                <p
                  style={{
                    textAlign: " center",
                    fontWeight: "300",
                    fontSize: "18px",
                    color: 'grey'
                   
                  }}
                >
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
