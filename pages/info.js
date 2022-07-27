import styles from "../styles/Info.module.css";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { db } from "./_app";
import { doc, getDoc } from "@firebase/firestore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

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
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover"
          src="homepage.jpg"
        />
        <Title>Gabrielle Johnson Yoga</Title>
      </div>
      {/* <div className={styles.infoMain}>
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
          Access to class via monthly subscription on{" "}
          <a
            href="https://www.patreon.com/gabriellejyoga"
            target="_blank"
            className={styles.link}
          >
            patreon
          </a>{" "}
          or sign up for a drop-in on{" "}
          <a
            href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=81da10072b&e=5b3b7ecfc2"
            target="_blank"
            className={styles.link}
          >
            venmo
          </a>
          /
          <a
            className={styles.link}
            href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=3d9a1b81cf&e=5b3b7ecfc2"
            target="_blank"
          >
            paypal
          </a>
          .
        </div> */}
      {/* <div className={styles.links}>
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
          </div> */}
      {/* </div> */}
      <Footer />
    </Layout>
  );
}
