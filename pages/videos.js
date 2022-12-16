import { doc, getDoc } from "firebase/firestore";
import { db } from "./_app";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Videos() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});
  const [vids, setVids] = useState([]);

  const showFullVideo = (video) => {
    setVideoOpen(true);
    setCurrentVideo(video);
  };

  const getUrl = (id) => {
    return (
      "https://player.vimeo.com/video/" +
      id +
      "?h=b2278c7e65&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    );
  };

  useEffect(() => {
    getDoc(doc(db, "videos", "vbNH2DKhQein3pKgQiAI")).then((snapshot) => {
      setVids(snapshot.data().vids);
    });
  }, []);

  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover object-top"
          src="practice.jpg"
        />
        <Title>guided practice</Title>
      </div>
      {!videoOpen ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 m-12">
          {vids.map((video) => (
            <div className="relative aspect-square bg-[#202124] flex flex-col items-center justify-center">
              <button
                className="text-white text-2xl font-thin tracking-wider hover:tracking-widest duration-700 pt-4"
                onClick={() => showFullVideo(video)}
              >
                {video.name}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative h-[100vh] m-8 flex flex-col items-center">
          <iframe
            src={getUrl(currentVideo.id)}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: "",
              top: "0",
              left: "0",
              width: "80%",
              height: "100%",
              maxWidth: "unset",
            }}
            title="MAINTENENCE 3"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <button
            className="font-extralight tracking-wide leading-9 hover:tracking-wider duration-700"
            onClick={() => setVideoOpen(false)}
          >
            Back to videos
          </button>
        </div>
      )}
      <div className="font-extralight text-center mr-8 ml-8 mt-24">
        Your contributions help make my work possible, thank you.
      </div>
      <div className="font-bold text-center mr-8 ml-8">
        <a
          href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=81da10072b&e=5b3b7ecfc2"
          target="_blank"
          className="font-bold"
        >
          venmo
        </a>
        {" / "}
        <a
          className="font-bold"
          href="https://gabrielleandartists.us17.list-manage.com/track/click?u=39fcc7a2897f43eb4a927dbc7&id=3d9a1b81cf&e=5b3b7ecfc2"
          target="_blank"
        >
          paypal
        </a>
      </div>
      <Footer />
    </Layout>
  );
}
