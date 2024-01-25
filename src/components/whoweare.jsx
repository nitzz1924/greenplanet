import React from "react";

const newnature = {
  color: "black",
  fontSize: "50px",
  fontWeight: "light",
  textAlign: "left",
  lineHeight: "60px",
  position: "relative",
};
const Whoweare = () => {
  return (
    <div>
      <div className="container-fluid" id="newnature">
        <div className="row">
          <div className="col-lg-6">
            <div className="p-5 m-5">
              <div className="heading" style={newnature}>
                <strong style={{ color: "#3c5639" }}>S</strong>tepping Up
                Progress in this Defining Decade
              </div>
              <div style={{ color: "black", textAlign: "left" }}>
                <strong>A</strong>longside communities, we’re urgently clearing
                obstacles and finding solutions to the climate and biodiversity
                crises.Whether it's the gentle rustle of leaves or the symphony
                of birdsong, every moment here is a celebration of the natural
                world. Experience the soothing harmony of earth and sky as you
                embark on a journey of rejuvenation and rediscovery. Welcome to
                a place where nature's touch revives the soul.
              </div>
            </div>
          </div>
          <div className="col-lg-6 row">
            <div className="col-lg-6">
              <div className="py-5 m-5">
                <div
                  className="woweare"
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    fontWeight: "700",
                  }}
                >
                  <strong>W</strong>ho We Are
                </div>
                <div
                  style={{
                    color: "black",
                    textAlign: "left",
                    fontSize: "18px",
                  }}
                >
                  <strong style={{ color: "#3c5639" }}>E</strong>xperience the
                  soothing harmony of earth and sky as you embark on a journey
                  of rejuvenation and rediscovery. Welcome to a place where
                  nature's touch revives the soul.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="py-5 m-5">
                <div
                  className="woweare"
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    fontWeight: "700",
                  }}
                >
                  <strong>W</strong>hat We Do
                </div>
                <div
                  style={{
                    color: "black",
                    textAlign: "left",
                    fontSize: "18px",
                  }}
                >
                  <strong style={{ color: "#3c5639" }}>T</strong>o make the
                  highest possible impact on the climate and biodiversity crises
                  between now and 2030, we’re developing breakthrough ideas,
                  amplifying local leaders and influencing policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
