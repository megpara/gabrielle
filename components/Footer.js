import { useState } from "react";
import styles from "../styles/Footer.module.css";

const buttonText = {
  LOADING: "Loading",
  IDLE: "Submit",
  SUCCESS: "Complete",
  ERROR: "Uh oh",
};

export default function Footer() {
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
    <div className={styles.footer}>
      <div className={styles.newsletterContainer}>
        <div className={styles.smallTitle}>newsletter signup</div>
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
    </div>
  );
}
