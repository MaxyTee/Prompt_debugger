import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import HowItWorks from "../components/Landing/HowItWorks";
import Testimonial from "../components/Landing/Testimonial";
import CTA from "../components/Landing/CTA";
import Footer from "../components/Landing/Footer";
// import Header from "../components/Landing/Header";
import Header from "../components/Landing/Header";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
