import React from "react";

function Footer() {
  const list_style = {
    listStyle: "none",
    fontWeight: "300",
    fontSize: "20px",
    lineSeight: "150%",
    textSransform: "capitalize",
    color: "#666a71",
    lineHeight: window.innerWidth <= 768 ? "40px" : "30px",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth <= 768 ? "repeat(1,1fr)" : "repeat(4,1fr)",
            gridGap: "100px",
            textAlign: "center",
          }}
        >
          {/* col1 */}
          <div>
            <h3>Digital Agency</h3>
            <p style={{ color: "#666a71" }}>
              Building digital products, brands & experience
            </p>
          </div>
          {/* col2 */}
          <div>
            <h3>Resources</h3>
            <ul style={list_style}>
              <li>Guides</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Glossery</li>
            </ul>
          </div>
          {/* col3 */}
          <div>
            <h3>Company</h3>
            <ul style={list_style}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* col4 */}
          <div>
            <h3>Social Media</h3>
            <ul style={list_style}>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "300",
          color: "#272D38",
          fontSize: window.innerWidth <= 768 ? "12px" : "16px",
        }}
      >
        © Matheus. Todos os direitos reservados
      </h3>
    </>
  );
}

export default Footer;
