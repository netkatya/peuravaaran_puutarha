import AboutSection from "./components/About/About";
import Hero from "./components/Hero/Hero";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";
import QualitySection from "./components/Quality/Quality";
import Retailers from "./components/Retailers/Retailers";
import ValuesSection from "./components/Values/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QualitySection />
      <ValuesSection />
      <ProductsSlider />
      <Retailers />
    </>
  );
}
