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
  const [state, setState] = useState("IDLE");

  useEffect(() => {
    getDoc(doc(db, "videos", "vbNH2DKhQein3pKgQiAI")).then((snapshot) => {
      setVids(snapshot.data().vids);
    });
  }, []);

  const addEntry = () => {
    setVids([...vids, { name: "", id: "" }]);
    console.log(vids);
  };

  const deleteEntry = (index) => {
    setVids(vids.filter((item, i) => i != index));
  };

  const updateName = (index, value) => {
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

  const updateId = (index, value) => {
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

  const saveSchedule = () => {
    setDoc(doc(db, "videos", "vbNH2DKhQein3pKgQiAI"), {
      vids: vids,
    }).then(setState("SUCCESS"));
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
                onChange={(e) => updateName(i, e.target.value)}
              />
              <input
                className="ml-4"
                value={video.id}
                onChange={(e) => updateId(i, e.target.value)}
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
