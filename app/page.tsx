import AboutSection from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QualitySection from "./components/Quality/Quality";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <QualitySection />
    </>
  );
}
