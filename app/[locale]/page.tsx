import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
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
   <FAQ/>
   <ContactUs/>
   <Footer/>
    </>
  );
}
