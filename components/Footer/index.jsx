import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
export function Footer() {
  return (
    <Link
      className={styles.footer}
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    >
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </Link>
  );
}
const style = {
//   fontFamily: {
//     sansSerif: '-apple-system, "Helvetica Neue", Arial, sans-serif',
//     mono: "Menlo, Monaco, monospace",
//   },
//   colors: {
//     text: "#333",
//     background: "#fff",
//     link: "#1eaaf1",
//     linkHover: "#0d8ecf",
//     border: "#ddd",
//     warning: "#fff3cd",
//     success: "#d4edda",
//   },
};
