import AboutSection from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductsSlider from "./components/ProductsSlider/ProductsSlider";
import QualitySection from "./components/Quality/Quality";
import ValuesSection from "./components/Values/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QualitySection />
      <ValuesSection />
      <ProductsSlider />
    </>
  );
}
