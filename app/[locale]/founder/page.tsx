
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import SaraProfile from "../components/Founder";
import SimpleNavbar from "../components/SimpleNavbar";
import Plans from "../components/Plans";
import Feedback from "../components/Feedback";
import Whatsapp from "../components/Whatsapp";


export default function Founder() {
  return (
    <>
    <Whatsapp/>
   <SimpleNavbar/>
   <SaraProfile/>
 <Feedback/>
   <Plans/>
   <FAQ/>
   <ContactUs/>
   <Footer/>
  </>
  );
}
