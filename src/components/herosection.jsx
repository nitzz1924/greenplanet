import React from "react";

const headingStyle = {
  color: "white",
  fontSize: "50px",
  fontWeight: "light",
  textAlign: "left",
  lineHeight: "60px",
  position: "relative",
};
const newnature = {
  color: "black",
  fontSize: "50px",
  fontWeight: "light",
  textAlign: "left",
  lineHeight: "60px",
  position: "relative",
};
const paraStyle = {
  color: "white",
  textAlign: "left",
  lineHeight: "30px",
  position: "relative",
};
const Herosection = () => {
  return (
    <>
      <div className="container-fluid py-5 my-5" id="herosectionbg">
        <div className="row">
          <div className="col-lg-8  d-grid align-items-center">
            <div className="p-5 m-5">
              <div className="heading" style={headingStyle}>
                <strong>A</strong>waken your senses with the wonders of nature
              </div>
              <div style={paraStyle}>
                <strong>I</strong>mmerse yourself in the embrace of nature's
                wonders. Our sanctuary of greenery offers a tranquil escape from
                the hustle and bustle, inviting you to unwind amidst lush
                landscapes and serene vistas. Whether it's the gentle rustle of
                leaves or the symphony of birdsong, every moment here is a
                celebration of the natural world. Experience the soothing
                harmony of earth and sky as you embark on a journey of
                rejuvenation and rediscovery. Welcome to a place where nature's
                touch revives the soul.
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-5">
            <img
              src="images/bannerimage.png"
              className="img-fluid position-relative w-50"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Herosection;
