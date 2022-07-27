import Head from "next/head";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>gabrielle johnson yoga</title>
        <meta name="description" content="Yoga by Gabrielle Johnson" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/uyy5sgw.css" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </>
  );
}
