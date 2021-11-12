import styles from "../styles/Info.module.css";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const buttonText = {
  LOADING: "Loading",
  IDLE: "Submit",
  SUCCESS: "Complete",
  ERROR: "Uh oh",
};

export default function Info() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (e) => {
    setEmail(e.currentTarget.value);
    setState("IDLE");
  };

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      console.log(errorMessage);
      setState("ERROR");
    }
  };
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        <div className={styles.title}>gabrielle johnson yoga</div>
        <a href="https://www.instagram.com/gabbiejohnson/" target="_blank">
          <img className={styles.instaLogo} src="/insta-logo.png" />
        </a>
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
              href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=81da10072b&e=5b3b7ecfc2"
              target="_blank"
              className={styles.paymentLink}
            >
              venmo
            </a>{" "}
            or{" "}
            <a
              className={styles.paymentLink}
              href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=3d9a1b81cf&e=5b3b7ecfc2"
              target="_blank"
            >
              paypal
            </a>
          </div>
          <div className={styles.smallTitle}>Weekly newsletter signup</div>
          <input onChange={onChange} className={styles.newsletter}></input>
          <button
            className={styles.submit}
            onClick={subscribe}
            disabled={state === "LOADING"}
          >
            {buttonText[state]}
          </button>
          {state === "ERROR" && <p className={styles.notice}>{errorMessage}</p>}
          {state === "SUCCESS" && <p className={styles.notice}>Thank you!</p>}
        </div>
      </motion.div>
    </Layout>
  );
}
