import Portal from "./Portal";
import styles from "../styles/Popup.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Popup({ open, closePopup }) {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (open) {
      setDisplay(true);
    }
  }, [open]);

  const animationStyle = open ? styles.modalExpand : styles.modalRetract;

  const onAnimationEnd = () => !open && setDisplay(false);

  return (
    <Portal selector="#popup">
      {display && (
        <div>
          <div
            className={`${styles.popup} ${animationStyle}`}
            onAnimationEnd={onAnimationEnd}
          >
            <div className={styles.exit} onClick={closePopup}>
              X
            </div>
            <div className="flex flex-col items-center font-extralight leading-7">
              <div className="title pb-4">upcoming class</div>
              <div>
                Join me for a biweekly{" "}
                <a
                  href="https://us02web.zoom.us/j/8822051411"
                  target="_blank"
                  className="font-bold"
                >
                  zoom
                </a>{" "}
                class
              </div>
              <div>Dec 17th and 31st @ 10 am et/ 9 am ct</div>
              <div>
                $15 per class,{" "}
                <a
                  href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=81da10072b&e=5b3b7ecfc2"
                  target="_blank"
                  className="font-bold"
                >
                  venmo
                </a>{" "}
                or{" "}
                <a
                  href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=3d9a1b81cf&e=5b3b7ecfc2"
                  target="_blank"
                  className="font-bold"
                >
                  paypal
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
}
