import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>gabrielle johnson yoga</title>
        <meta name="description" content="Yoga by Gabrielle Johnson" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/uyy5sgw.css" />
      </Head>
      {children}
    </div>
  );
}
