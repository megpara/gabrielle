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

  const updateScheduleTitle = (index, value) => {
    setSchedule(
      schedule.map((item, i) => {
        if (i == index) {
          return { title: value, price: item.price, date: item.date };
        } else {
          return item;
        }
      })
    );
  };

  const updateSchedulePrice = (index, value) => {
    setSchedule(
      schedule.map((item, i) => {
        if (i == index) {
          return { title: item.title, price: value, date: item.date };
        } else {
          return item;
        }
      })
    );
  };

  const updateScheduleDate = (index, value) => {
    setSchedule(
      schedule.map((item, i) => {
        if (i == index) {
          return { title: item.title, price: item.price, date: value };
        } else {
          return item;
        }
      })
    );
  };

  const addScheduleEntry = () => {
    setSchedule([...schedule, { title: "", price: "", date: "" }]);
    console.log(schedule);
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
              <label className="font-thin mx-4" for="name">
                Name:
              </label>
              <input
                id="name"
                className={styles.schedule}
                value={video.name}
                onChange={(e) => updateVideoName(i, e.target.value)}
              />
              <label className="font-thin mx-4" for="id">
                Vimeo id:
              </label>
              <input
                id="id"
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
              <label className="font-thin mx-4" for="title">
                Title:
              </label>
              <input
                id="title"
                className={styles.schedule}
                value={item.title}
                onChange={(e) => updateScheduleTitle(i, e.target.value)}
              />
              <label className="font-thin mx-4" for="price">
                Price:
              </label>
              <input
                id="price"
                value={item.price}
                onChange={(e) => updateSchedulePrice(i, e.target.value)}
              />
              <label className="font-thin mx-4" for="date">
                Date:
              </label>
              <input
                id="date"
                value={item.date}
                onChange={(e) => updateScheduleDate(i, e.target.value)}
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
