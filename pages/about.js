import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function About() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover object-top"
          src="about.jpg"
        />
        <Title>About me</Title>
      </div>
      <div className="md:my-36 md:mx-48 my-24 mx-8 font-extralight tracking-wide leading-9">
        <div>
          Gabrielle has been teaching yoga for 10 years. Her teaching style is
          alignment based, with an emphasis on creating sustainable flexibility
          and strength in the body. She places a focus on the movement of
          energy, or prana, and meditative techniques that support presence and
          and self inquiry. Gabrielle has studied with Nikki Estrada, Annie
          Carpenter, Rod Stryker, and Ally Bogard.
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
