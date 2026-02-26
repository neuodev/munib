import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import VideoSection from "./components/VideoSection";
import Whatsapp from "./components/Whatsapp";
import Whyus from "./components/Whyus";

export default function Home() {
  return (
    <>
        <Whatsapp/>

   <Navbar/>
   <div id="home">
     <Hero/>
   </div>
   <div id="why">
     <Whyus/>
   </div>
   <VideoSection/>
   <div id="reviews">
     <Feedback/>
   </div>
   <div id="plans">
     <Plans/>
   </div>
   <div id="faq">
     <FAQ/>
   </div>
   <div id="contact">
     <ContactUs/>
   </div>
   <Footer/>
    </>
  );
}
