import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Work() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh] z-[-1]">
        <img
          className="brightness-75 h-full w-full object-cover object-top"
          src="work.jpg"
        />
        <Title>work with me</Title>
      </div>
      <div className="m-24 font-extralight tracking-wide leading-9 text-center">
        <div className="pb-8">
          <div className="subtitle">virtual private package</div>
          <div className="text-xl pb-4">
            3 30 min private sessions, recorded and shared with you to keep!
          </div>
          <div className="text-xl">$165</div>
        </div>
        <div className="pb-8">
          Our first session will be 40 minutes so that we can get an idea for
          where you want to go for your sessions. Are you working with an
          injury? looking to incorporate meditation into your practice? wanting
          to have a practice for when you have various energy levels? all of
          this and more can be addressed in our time together. My goal is to set
          you up with 3 practices that cover as many bases as possible, and
          allow you to feel and function your best. You'll leave with a
          downloadable link of each video, and ongoing access to me if you have
          any questions. I'm so grateful to be a part of your journey and I look
          forward to working with you!
        </div>
        <div className="flex flex-col items-center">
          <div className="buttonSecondary font-light mb-24">
            <a href="mailto:johnsongabrielle22@gmail.com?subject=Virtual Private Package">
              Interested? Inquire!
            </a>
          </div>
        </div>
        <div className="text-left">
          <div className="subtitle">client love</div>
          <div>
            "Gabrielle is easily my favorite yoga instructor! After beginning
            with her group classes, I asked for private instruction to support
            my specific physical needs. She has an incredible ability to
            verbalize cues and direct you through Zoom despite being time zones
            away. When I started working with Gabrielle, I didn't have a regular
            yoga practice or very much flexibility, but over the past few years,
            my practice, my body, and my overall way of moving through the world
            have gotten stronger and more flexible. The beauty of our private
            sessions is recording them and the ability to return to them again
            and again, so I'm able to continue to work on a practice we did in
            the winter of 2021 or the summer of 2022, and see how it feels
            wherever I am that day. I highly recommend working with Gabrielle
            whether you're a newbie or well-practiced yogi!" - Emily M.
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
