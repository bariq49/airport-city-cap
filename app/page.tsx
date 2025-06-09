import { hero1 } from "@/public/images/heroSection";
import FleetCar from "@/sections/FLeetSection";
import HeroSection from "@/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection
  backgroundImage={hero1}
  title="Order your airport taxi now, quickly and easily"
  description="Experience stress-free airport transfers in Vienna. Book your taxi quickly and easily—trusted by business leaders, travelers, and locals alike."
  showButton={true}
/>
      <FleetCar />
    </>
  );
}
