import { doc, getDoc, setDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./_app";
import styles from "../styles/Admin.module.css";
import Layout from "../components/Layout";

const buttonText = {
  IDLE: "Save",
  SUCCESS: "Complete!",
};

export default function Admin() {
  const [schedule, setSchedule] = useState([]);
  const [state, setState] = useState("IDLE");

  useEffect(() => {
    getDoc(doc(db, "classes", "ZhbNctSX1RPz2AquN14b")).then((snapshot) => {
      setSchedule(snapshot.data().schedule);
      console.log(schedule);
    });
  }, []);

  const addEntry = () => {
    setSchedule([...schedule, ""]);
  };

  const deleteEntry = (index) => {
    setSchedule(schedule.filter((item, i) => i != index));
  };

  const updateEntry = (index, value) => {
    setSchedule(
      schedule.map((item, i) => {
        if (i == index) {
          return value;
        } else {
          return item;
        }
      })
    );
  };

  const saveSchedule = () => {
    setDoc(doc(db, "classes", "ZhbNctSX1RPz2AquN14b"), {
      schedule: schedule,
    }).then(setState("SUCCESS"));
  };

  return (
    <Layout>
      <div className={styles.title}>Admin</div>
      <div className={styles.admin}>
        <div className={styles.subtitle}>Schedule</div>
        {schedule.map((classTime, i) => {
          return (
            <div className={styles.scheduleEntry} key={(classTime, i)}>
              <input
                className={styles.schedule}
                value={classTime}
                onChange={(e) => updateEntry(i, e.target.value)}
              />
              <img
                className={styles.delete}
                src="/trash_icon.png"
                onClick={() => deleteEntry(i)}
              />
            </div>
          );
        })}
        <button onClick={addEntry}>Add</button>
        <button onClick={saveSchedule}>{buttonText[state]}</button>
      </div>
    </Layout>
  );
}
