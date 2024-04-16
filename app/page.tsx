import Collection from "./components/Collection";
import Content from "./components/Content";
import CustomBatik from "./components/CustomBatik";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="bg-none">
      <Hero />
      <Content />
      <Collection />
      <CustomBatik />
      <Footer />
    </div>
  );
}
