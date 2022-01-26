import styles from "../styles/Info.module.css";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { db } from "./_app";
import { doc, getDoc } from "@firebase/firestore";

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
  const [schedule, setSchedule] = useState([]);

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
  useEffect(() => {
    getDoc(doc(db, "classes", "ZhbNctSX1RPz2AquN14b")).then((snapshot) => {
      setSchedule(snapshot.data().schedule);
    });
  }, []);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        <div className={styles.title}>gabrielle johnson yoga</div>
        <div className={styles.icons}>
          <a href="https://vimeo.com/user66224685" target="_blank">
            <img className={styles.icon} src="/vimeo-logo-black.png" />
          </a>
          <a
            href="https://open.spotify.com/user/8449m6rm6h4nk2nnlialfrrq2"
            target="_blank"
          >
            <img className={styles.icon} src="/spotify_logo_black.png" />
          </a>
          <a href="https://www.instagram.com/gabbiejohnson/" target="_blank">
            <img className={styles.icon} src="/insta-logo.png" />
          </a>
        </div>
        <div className={styles.infoMain}>
          <div className={styles.subtitle}>Schedule</div>
          <div className={styles.notice}>
            All classes are 1 hour, all levels welcome.
          </div>
          {schedule.map((classTime) => {
            return (
              <div key={classTime} className={styles.schedule}>
                {classTime}
              </div>
            );
          })}
          <div className={styles.links}>
            $10 per class,{" "}
            <a
              href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=81da10072b&e=5b3b7ecfc2"
              target="_blank"
              className={styles.link}
            >
              venmo
            </a>{" "}
            or{" "}
            <a
              className={styles.link}
              href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=3d9a1b81cf&e=5b3b7ecfc2"
              target="_blank"
            >
              paypal
            </a>
            <a
              className={`${styles.link} ${styles.blockLink}`}
              target="_blank"
              href="https://us02web.zoom.us/j/8822051411"
            >
              zoom link
            </a>
          </div>
          <div className={styles.smallTitle}>Newsletter signup</div>
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
