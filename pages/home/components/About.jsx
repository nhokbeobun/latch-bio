import React from "react";
import { SlideShowImage } from "../../../components/Slideshow";

export function About() {
  const contentIntegrated = [
    {
      name: "Import  Datasets",
      sub: "Import raw data from your cloud, your service provider, or your team's instruments.",
    },
    {
      name: "Upload Workflows",
      sub: "Import raw data from your cloud, your service provider, or your team's instruments.",
    },
    {
      name: "Run &  Analyze",
      sub: "Import raw data from your cloud, your service provider, or your team's instruments.",
    },
    {
      name: "Visualize Biological Insights",
      sub: "Import raw data from your cloud, your service provider, or your team's instruments.",
    },
  ];
  return (
    <section>
      <div className="title" style={style.titleSub}>
        Trusted By Industry Leaders at
      </div>
      <SlideShowImage />
      <div className="container-80">
        <div className="row">
          <div className="col-md-6">
            <div className="title-2" style={style.title2}>
              The Integrated Platform for Bioinformatics
            </div>
            <div className="detail-2" style={style.detail}>
              <div style={{ padding: "15px 0" }}>
                Scientific discovery is bottlenecked by the fragmentation of
                tooling across biology and bioinformatics teams.
              </div>
              <div>
                We built a harmonized bioinformatics platform between wet lab
                and dry lab in the cloud to help teams accelerate their R&D.
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "80px" }}>
          {contentIntegrated.map(function (obj, index) {
            return IntegratedChild(obj);
          })}
        </div>
        {[1, 2, 3].map(function (obj, index) {
          return DetailChild();
        })}
      </div>
    </section>
  );
}
function IntegratedChild(content) {
  return (
    <div className="col-md-3">
      <div className="thumb" style={style.thumb}>
        <img src="/img1.jpg" style={style.image} />
      </div>
      <div className="nameThumb" style={style.nameThumb}>
        {content?.name}
      </div>
      <div className="subThumb" style={style.subThumb}>
        {content?.sub}
      </div>
    </div>
  );
}

function DetailChild() {
  return (
    <div
      className="detail"
      style={{
        padding: "40px",
        backgroundColor: "#151b30",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <div className="row">
        <div className="col-md-4">
          <div className="detail-img">
            <img src="/img1.jpg" style={{ width: "64px", height: "64px" }} />
          </div>
          <div className="detail-title" style={style.titleChile}>
            Easily integrate your organization’s datasets
          </div>
          <div className="detail-sub" style={style.subChild}>
            Latch supports integration with your organization’s AWS S3. Access
            hundreds of terabytes of data in an organic filesystem you are
            familiar with.
          </div>
        </div>
        <div className="col-md-8 detail-child">
          <div style={style.detailImage}>
            <img src="/child.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  titleSub: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  detail: {
    fontSize: "20px",
    color: "#BFC0C5",
    letterSpacing: "-0.01em",
    lineHeight: "150%",
    marginBottom: "20px",
  },
  //detail-child -------------------
  subChild: {
    fontSize: "16px",
    color: "#BFC0C5",
    letterSpacing: "-0.01em",
    lineHeight: "150%",
  },
  titleChile: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "15px 0 10px",
  },
  detailImage: {
    overflow: "hidden",
    height: "450px",
    borderRadius: "20px",
  },
  /////IntegratedChild child
  subThumb: {
    fontSize: "12px",
    color: "#BFC0C5",
    letterSpacing: "-0.01em",
    lineHeight: "150%",
  },
  nameThumb: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  thumb: {
    width: "95px",
    height: "95px",
  },
};
