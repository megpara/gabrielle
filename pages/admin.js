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
  const [vids, setVids] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [vidState, setVidState] = useState("IDLE");
  const [scheduleState, setScheduleState] = useState("IDLE");

  useEffect(() => {
    getDoc(doc(db, "videos", "vbNH2DKhQein3pKgQiAI")).then((snapshot) => {
      setVids(snapshot.data().vids);
    });
  }, []);

  useEffect(() => {
    getDoc(doc(db, "classes", "ZhbNctSX1RPz2AquN14b")).then((snapshot) => {
      setSchedule(snapshot.data().schedule);
    });
  }, []);

  const addVideoEntry = () => {
    setVids([...vids, { name: "", id: "" }]);
    console.log(vids);
  };

  const deleteVideoEntry = (index) => {
    setVids(vids.filter((item, i) => i != index));
  };

  const updateVideoName = (index, value) => {
    setVids(
      vids.map((item, i) => {
        if (i == index) {
          return { name: value, id: item.id };
        } else {
          return item;
        }
      })
    );
  };

  const updateVideoId = (index, value) => {
    setVids(
      vids.map((item, i) => {
        if (i == index) {
          return { name: item.name, id: value };
        } else {
          return item;
        }
      })
    );
  };

  const saveVideos = () => {
    setDoc(doc(db, "videos", "vbNH2DKhQein3pKgQiAI"), {
      vids: vids,
    }).then(setVidState("SUCCESS"));
  };

  const updateScheduleEntry = (index, value) => {
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

  const addScheduleEntry = () => {
    setSchedule([...schedule, ""]);
  };

  const deleteScheduleEntry = (index) => {
    setSchedule(schedule.filter((item, i) => i != index));
  };

  const saveSchedule = () => {
    setDoc(doc(db, "classes", "ZhbNctSX1RPz2AquN14b"), {
      schedule: schedule,
    }).then(setScheduleState("SUCCESS"));
  };

  return (
    <Layout>
      <div className={styles.title}>Admin</div>
      <div className={styles.admin}>
        <div className={styles.subtitle}>Videos</div>
        {vids.map((video, i) => {
          return (
            <div className={styles.scheduleEntry} key={(video, i)}>
              <input
                className={styles.schedule}
                value={video.name}
                onChange={(e) => updateVideoName(i, e.target.value)}
              />
              <input
                className="ml-4"
                value={video.id}
                onChange={(e) => updateVideoId(i, e.target.value)}
              />
              <img
                className={styles.delete}
                src="/trash_icon.png"
                onClick={() => deleteVideoEntry(i)}
              />
            </div>
          );
        })}
        <button onClick={addVideoEntry}>Add</button>
        <button onClick={saveVideos}>{buttonText[vidState]}</button>
      </div>
      <div className={styles.admin}>
        <div className={styles.subtitle}>Schedule</div>
        {schedule.map((item, i) => {
          return (
            <div className={styles.scheduleEntry} key={(item, i)}>
              <input
                className={styles.schedule}
                value={item}
                onChange={(e) => updateScheduleEntry(i, e.target.value)}
              />
              <img
                className={styles.delete}
                src="/trash_icon.png"
                onClick={() => deleteScheduleEntry(i)}
              />
            </div>
          );
        })}
        <button onClick={addScheduleEntry}>Add</button>
        <button onClick={saveSchedule}>{buttonText[scheduleState]}</button>
      </div>
    </Layout>
  );
}
