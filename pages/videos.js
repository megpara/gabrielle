import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";

const videos = [
  {
    thumbnail: "/Maintenance1.png",
    id: "717272123",
    title: "Maintenance 1",
  },
  {
    thumbnail: "/maintenance2.png",
    id: "722267197",
    title: "Maintenance 2",
  },
  {
    thumbnail: "/Maintenance3.png",
    id: "727610143",
    title: "Maintenance 3",
  },
  {
    thumbnail: "/posture.png",
    id: "706138037",
    title: "Posture tune up",
  },
  {
    thumbnail: "/shoulders.png",
    id: "697909475",
    title: "Shoulders",
  },
  {
    thumbnail: "/travel.png",
    id: "695440626",
    title: "A travel practice",
  },
];

export default function Videos() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});

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

  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover"
          src="yoga2.jpg"
        />
        <Title>Guided practice</Title>
      </div>
      {!videoOpen ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 m-8">
          {videos.map((video) => (
            <div className="relative aspect-square">
              <img
                src={video.thumbnail}
                className="brightness-75 w-full h-full object-cover"
              />
              <button
                className="font-extralight tracking-wide hover:tracking-wider duration-700 pt-4"
                onClick={() => showFullVideo(video)}
              >
                {video.title}
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
