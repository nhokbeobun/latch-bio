import Image from "next/image";
import React from "react";

export function Button({ title, paddingLarge }) {
  return paddingLarge ? (
    <div className="button flex" style={style.padingLarge}>
      <span className="title">{title}</span>
      <Image
        src="/next.svg"
        alt="Vercel Logo"
        className="icon"
        width={15}
        height={15}
      />
    </div>
  ) : (
    <div className="button flex">
      <span className="title">{title}</span>
      <Image
        src="/next.svg"
        alt="Vercel Logo"
        className="icon"
        width={15}
        height={15}
      />
    </div>
  );
}
const style = {
  padingLarge: {
    padding: "15px 40px ",
  },
};
