import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Contact() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover object-top"
          src="contact.jpg"
        />
        <Title>Contact</Title>
      </div>
      <div className="md:my-36 md:mx-0 my-24 mx-8 flex flex-col items-center">
        <div className="pb-8 font-extralight tracking-wide text-center">
          Available for hire for classes, private lessons, and consultations.
        </div>
        <div className="flex text-sm font-normal tracking-wide">
          <a href="mailto:johnsongabrielle22@gmail.com">
            <img src="/email.png" className="h-[23px] pr-4" />
          </a>
          johnsongabrielle22@gmail.com
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
