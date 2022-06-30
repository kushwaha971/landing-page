import React from "react";


const CompaniesSection = () => {
  const logoI = {
    fontSize: window.innerWidth <= 768 ? "10px" : "30px",
    marginRight: window.innerWidth <= 768 ? "3px" : "30px",
    marginLeft: window.innerWidth <= 768 ? "3px" : "30px",
    fontStyle: "normal",
    fontFamily: "Poppins",
    textDecoration: 'none',
    color: 'black',
    padding:window.innerWidth <= 768 ? '10px':'8px'
  };
  return (
    <>
      <div style={{ textAlign: "center", background: "#F6F6F6" }}>
        <div
          style={{
            fontWeight: "300",
            padding: "10px",
            lineHeight: "100%",
            textTransform: "capitalize",
            color: "#667085",
            fontSize: window.innerWidth <= 768 ? "14px" : "16px",
            fontFamily: "Raleway",
            paddingTop: '10px',
            
           
          }}
        >
          Trusted by 4,000+ companies
        </div>
        <div
          style={{
            alignItems: "center",
            height: "50px",
            borderRadius: "8px",
            justifyContent: "space-between",
          
          }}
        >
        
         <a href="https://open.spotify.com/" target='__blank'  style={logoI}><i class="fi fi-brands-spotify" >Soptify </i> </a> 
          <a href="https://slack.com" target='__blank' style={logoI}><i class="fi fi-brands-slack"  > Slack</i></a>
          <a href="https://www.dropbox.com/" target='__blank'  style={logoI}><i class="fi fi-brands-dropbox"> Dropbox</i></a>
          
          <a href="https://www.youtube.com/"  target='__blank' style={logoI} ><i class="fi fi-brands-youtube" >Youtube </i></a>
          
        </div>
      </div>
    </>
  );
};

export default CompaniesSection;
