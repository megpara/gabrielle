import { doc, getDoc } from "firebase/firestore";
import { db } from "../pages/_app";
import Portal from "./Portal";
import styles from "../styles/Popup.module.css";
import { useEffect, useState } from "react";
import Link from "next/dist/client/link";

export default function Popup({ open, closePopup }) {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (open) {
      setDisplay(true);
    }
  }, [open]);

  const animationStyle = open ? styles.modalExpand : styles.modalRetract;

  const onAnimationEnd = () => !open && setDisplay(false);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    getDoc(doc(db, "classes", "ZhbNctSX1RPz2AquN14b")).then((snapshot) => {
      setSchedule(snapshot.data().schedule);
    });
  }, []);

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
            <div className="flex flex-col items-center font-extralight">
              <div className="subtitle">Upcoming classes</div>
              {schedule.map((scheduleEntry) => (
                <div>
                  <div>{scheduleEntry.title}</div>
                </div>
              ))}
              <Link href="/schedule">
                <div className="pt-6 font-normal underline decoration-1 underline-offset-2">
                  View the schedule
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
}
