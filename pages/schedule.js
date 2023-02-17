import { doc, getDoc } from "firebase/firestore";
import { db } from "./_app";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);

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
          src="schedule.jpg"
        />
        <Title>schedule</Title>
      </div>
      <div className="m-24 font-extralight tracking-wide leading-9 text-center">
        {schedule.map((scheduleEntry) => (
          <div className="pb-8">
            <div className="font-medium">{scheduleEntry.title}</div>
            <div>{scheduleEntry.price}</div>
            <div>{scheduleEntry.date}</div>
          </div>
        ))}
        <div>
          Payment via{" "}
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
        <a
          href="https://us02web.zoom.us/j/8822051411"
          target="_blank"
          className="font-bold"
        >
          zoom link
        </a>
      </div>
      <Footer />
    </Layout>
  );
}
