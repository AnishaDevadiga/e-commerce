import React from "react";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100%", width: "100%" }}>
        <center>
          {" "}
          <h1>Welcome to E-Commerce Websites</h1>
          <br />
          <h3>
            E-commerce Website A website that allows people to buy and sell
            physical goods, services, and digital products over the internet
            rather than at a brick-and-mortar location. Through an e-commerce
            website, a business can process orders, accept payments, manage
            shipping and logistics, and provide customer service.
          </h3>
          <h2>Start Your Shopping Now....</h2>
        </center>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1717050025~exp=1717053625~hmac=c58802ad2617f1c644c9d7c6f49bff788fe771c6aae32ac49f711393908838db&w=1060')",
          backgroundPosition: "Center",
          width: "100%",
          height: "400px",
        }}
      ></div>
    </div>
  );
}

export default Home;
