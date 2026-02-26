import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import VideoSection from "./components/VideoSection";
import Whyus from "./components/Whyus";

export default function Home() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Whyus/>
   <VideoSection/>
   <Feedback/>
   <Plans/>
    </>
  );
}
