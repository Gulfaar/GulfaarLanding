import Image from "next/image";
import HeroWorked from "./components/Home/HeroWorked";
import ServiceLists from "./components/ServiceLists/ServiceLists";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <div>
      <HeroWorked/>
      <ServiceLists/>
      <Footer/>
    </div>
    
  );
}
