import styles from "../styles/Info.module.css";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Info() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        <div className={styles.title}>gabrielle johnson yoga</div>
        <img className={styles.instaLogo} src="/insta-logo.png" />
        <div className={styles.infoMain}>
          <div className={styles.subtitle}>Schedule</div>
          <div className={styles.schedule}>Wednesdays 6:15 pm EST</div>
          <div className={styles.schedule}>Saturdays 10 am EST</div>
          <div className={styles.notice}>
            Times are subject to change, updates will come in the weekly
            newsletter
          </div>
          <div className={styles.payment}>
            $10 per class,{" "}
            <a
              href="https://venmo.com"
              target="_blank"
              className={styles.paymentLink}
            >
              venmo
            </a>{" "}
            or{" "}
            <a
              className={styles.paymentLink}
              href="https://paypal.com"
              target="_blank"
            >
              paypal
            </a>
          </div>
          <div className={styles.smallTitle}>Weekly newsletter signup</div>
          <div className={styles.newsletter}></div>
        </div>
      </motion.div>
    </Layout>
  );
}
