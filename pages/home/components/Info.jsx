import React from "react";
import Image from "next/image";
import { Button } from "../../../components";
import { ButtonTransparent } from "../../../components/ButtonTransparent";
export function Info() {
  return (
    <section className="intro flex" style={style.section}>
      <div className="row" style={style.flex}>
        <div className="col-md-6 info">
          <div className="title" style={style.title}>
            Harmonize your Wet and Dry Lab.
          </div>
          <div className="detail" style={style.detail}>
            Stop wrestling with cloud infrastructure and broken informatics
            tools.<br></br> Start discovering biological insights today.
          </div>
          <div className="buttonArea flex" style={style.button}>
            <Button title={"Request Demo"} paddingLarge={true} />
            <ButtonTransparent title={"Get Started For Free"} paddingLarge={true}/>
          </div>
        </div>
        <div className="col-md-6">
          <img src="/bg.jpeg" alt="background" className="img" />
        </div>
      </div>
    </section>
  );
}
const style = {
  section: {
    height: "100vh",
  },
  title: {
    fontSize: "72px",
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
  button: {
    justifyContent: "flex-start",
  },
  flex: {
    alignItems: "center",
    width: "100%",
  },
};
