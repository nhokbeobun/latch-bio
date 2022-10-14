import Image from "next/image";
import React from "react";

export function ButtonTransparent({ title, paddingLarge }) {
  return paddingLarge ? (
    <div className="button flex" style={style.requestButtonLarge}>
      <span className="title">{title}</span>
      <Image
        src="/next-white.svg"
        alt="next"
        className="icon"
        width={15}
        height={15}
      />
    </div>
  ) : (
    <div className="button flex" style={style.requestButton}>
      <span className="title">{title}</span>
      <Image
        src="/next-white.svg"
        alt="next"
        className="icon"
        width={15}
        height={15}
      />
    </div>
  );
}
const style = {
  requestButton: {
    backgroundColor: "transparent",
    color: "white",
    marginLeft: "15px",
    border: "1px solid white",
  },
  requestButtonLarge: {
    backgroundColor: "transparent",
    color: "white",
    marginLeft: "15px",
    border: "1px solid white",
    padding: "15px 40px ",
  },
};
