import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Impact from "../components/Impact/Impact";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <HowItWorks/>
      <Impact/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home;