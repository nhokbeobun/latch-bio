import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { ButtonTransparent } from "../ButtonTransparent";
export function Header() {
  return (
    <header style={style.header}>
      <div className="container">
        <div style={style.wrapContent} className="flex">
          <div className="logo">
            <Image src="/logo.svg" alt="Logo" width={125} height={60} />
          </div>
          <div className="nav ">
            <ul style={style.nav} className="flex">
              <li style={style.li}>
                <Link href="/">
                  <a style={style.a}>Product</a>
                </Link>
              </li>
              <li style={style.li}>
                <Link style={style.a} href="/">
                  <a style={style.a}>Use Cases</a>
                </Link>
              </li>
              <li style={style.li}>
                <Link style={style.a} href="/">
                  <a style={style.a}>Developer</a>
                </Link>
              </li>
              <li style={style.li}>
                <Link style={style.a} href="/">
                  <a style={style.a}>Resources</a>
                </Link>
              </li>
              <li style={style.li}>
                <Link style={style.a} href="/">
                  <a style={style.a}>Company</a>
                </Link>
              </li>
            </ul>
            <div className="userfunction">
              <div className="login">
                <Link href="/">
                  <a style={style.login}>Log in</a>
                </Link>
              </div>
              <div className="buttonArea flex">
                <Button title={"Sign Up"} />
                <ButtonTransparent title={"Request Demo"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
const style = {
  header: {
    height: "80px",
    position: "fixed",
    left: "0",
    right: "0",
    zIndex: "10",
    background: "rgba(16, 20, 39, 0.90)",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
  },
  wrapContent: {
    height: "80px",
    // borderBottom: "0.5px solid rgb(226 227 229 / 40%)",
  },
  nav: {
    borderRight: "0.5px solid rgb(226 227 229 / 40%)",
  },
  li: {
    listStyleType: "none",
    padding: "0 15px",
    height: "100%",
  },
  a: {
    fontSize: "14px",
    opacity: "1",
    transition: ".5s",
  },
  login: {
    padding: "0 15px",
  },
};
