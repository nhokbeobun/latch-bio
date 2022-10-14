import React from "react";

export function WhyLatch() {
  return (
    <section style={{ paddingTop: "80px" }}>
      <div className="row" style={style.whyLatch}>
        <div className="col-md-4" style={style.titleSub}>
          Why Latch
        </div>
        <div className="col-md-7">
          <div className="title" style={style.titleWhy}>
            One platform to build, automate, and centralize bioinformatics
            workflows.
          </div>
          {[1, 2, 3, 4].map(function (obj, index) {
            return WhyLatchChild();
          })}
        </div>
      </div>
      {ScientificBreakthroughs()}
      {/* <ScientificBreakthroughs /> */}
    </section>
  );
}
function WhyLatchChild() {
  return (
    <div className="child" style={{ marginBottom: "40px" }}>
      <div className="row">
        <div className="col-md-1">
          <div className="icon" style={style.icon}>
            <img src="/icon.svg" style={style.iconImage} />
          </div>
        </div>
        <div className="col-md-9">
          <div className="title" style={style.titleContent}>
            Remove the Headache of Setting Up Your Own Infrastructure
          </div>
          <div className="detail" style={style.detailContent}>
            Save months of creating a user interface and data infrastructure for
            every bioinformatics workflow that you build. Bring your custom
            pipelines, and launch them in Latch within minutes.
          </div>
        </div>
      </div>
    </div>
  );
}

function ScientificBreakthroughs() {
  return (
    <div className="container-80" style={{ marginTop: "200px" }}>
      <div className="row">
        <div className="col-md-6">
          <div className="title-2" style={style.title2}>
            Scientific breakthroughs are being accelerated on Latch.
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40px", marginBottom: "20px" }}>
        {ScientificBreakthroughsChild()}
      </div>
      <div className="flex" style={{ justifyContent: "flex-start" }}>
        <img src="/logo.svg" style={style.brandThumb} />
        <img src="/logo.svg" style={style.brandThumb} />
        <img src="/logo.svg" style={style.brandThumb} />
      </div>
    </div>
  );
}
function ScientificBreakthroughsChild() {
  return (
    <div className="row" style={style.brand}>
      <div className="col-md-3">
        <img src="/logo.svg" style={style.brandIcon} />
      </div>
      <div className="col-md-9" style={style.brandContent}>
        The Innovative Genomics Institute was generating thousands of Sars-Cov-2
        samples but did not have the software infrastructure to run variant
        calling for patient samples at scale. After 30 days, they had a fully
        automated Sars-Cov-2 variant calling pipeline on Latch. Read the Press
        Release on IGI’s website: innovativegenomics.org.
      </div>
    </div>
  );
}
const style = {
  whyLatch: {
    borderTop: "0.5px solid rgb(226 227 229 / 40%)",
    paddingTop: "40px",
    margin: "0",
  },
  titleWhy: {
    fontSize: "28px",
    lineHeight: "115%",
    color: "#E2E3E5",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  titleSub: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  //whylatch-child------------------------------
  detailContent: {
    fontSize: "16px",
    color: "#BFC0C5",
    letterSpacing: "-0.01em",
    lineHeight: "150%",
  },
  titleContent: {
    fontSize: "20px",
    lineHeight: "125%",
    color: "#E2E3E5",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  iconImage: {
    width: "60%",
    height: "60%",
    objectFit: "cover",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "3px",
    backgroundColor: "#151b30",
    position: "relative",
  },
  //---------------------------------
  //scientific
  brandThumb: {
    width: "15%",
    marginRight: "15px",
  },
  brandContent: {
    padding: "40px",
    borderRadius: "15px",
    backgroundColor: "rgba(16, 20, 38, 0.2)",
  },
  brand: {
    background:
      "linear-gradient(126.27deg, #44A1C6 5.09%, rgba(34, 174, 219, 0.82) 49.08%, #35B4B6 100%)",
    boxShadow:
      "inset 0px 3px 5px rgb(241 246 255 / 11%), inset 0px -3px 3px rgb(7 11 99 / 11%)",
    borderRadius: "16px",
    padding: "50px",
    alignItems: "center",
    fontSize: "16px",
    color: "#E2E3E5",
  },
  brandIcon: {
    width: "100%",
  },
};
