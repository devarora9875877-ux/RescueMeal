import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import RescuePipeline from "../components/RescuePipeline/RescuePipeline"
import Impact from '../components/Impact/Impact';
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <RescuePipeline />
      <Impact />
      <Testimonials/>
      <FAQ/>
    </>
  )
}

export default Home;