import { detail1, detail2 } from "@/public/images/detailsection";
import { hero1 } from "@/public/images/heroSection";
import DetailSection from "@/sections/DetailSection";
import DetailSection2 from "@/sections/DetailSection2";
import FleetCar from "@/sections/FLeetSection";
import HeroSection from "@/sections/HeroSection";
import ReadyToBook from "@/sections/ReadyToBook";
import ServiceSec from "@/sections/ServiceSec";
import { FaCar, FaClock, FaMapMarkedAlt,  FaShippingFast, FaTaxi } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundImage={hero1}
        title="Order your airport taxi now, quickly and easily"
        description="Experience stress-free airport transfers in Vienna. Book your taxi quickly and easily—trusted by business leaders, travelers, and locals alike."
        showButton={true}
      />
        <DetailSection
        topSection={{
          title: "AirportCity Cab – Your Reliable Airport Taxi in Vienna",
          paragraph:
            "With AirportCity Cab, reaching Vienna Airport has never been easier. Whether you're catching a flight or arriving in the city, we ensure a smooth, comfortable, and timely transfer—completely independent of public transport. Choose your departure time and enjoy a worry-free ride with our professional drivers. Say goodbye to delays or missed flights—travel smarter with AirportCity Cab.",
          imageSrc: detail1,
          imageAlt: "Vienna Airport Taxi",
        }}
        middleSection={{
          title: "Stress-Free Travel to Vienna Airport",
          paragraph:
            "Need to catch a flight for an important business trip? Or heading off with family on a well-deserved vacation? No matter the reason, AirportCity Cab takes the stress out of getting to Vienna Airport. We pick you up directly from your doorstep and drop you off at your terminal, making your airport journey smooth and comfortable. With us, you save time, avoid hassle, and travel in peace.",
          imageSrc: detail2,
          imageAlt: "Taxi to Vienna Airport",
          imageLeft: false,
        }}
      />
      <ServiceSec />
    
      <DetailSection2
        imagePosition="right" 
        imageSrc={detail1}
        title="Fixed-Price Airport Taxi in Vienna – Book Easily Online"
        description={[
          "With Airport City Cab, booking your airport transfer in Vienna is fast and hassle-free. You can reserve your shuttle online up to two hours before your departure. Enjoy a fixed-price service that gets you to your destination quickly and affordably.",
          "Choose between Economy Class or Business Class—whatever suits your travel style."
        ]}
        services={[
          { icon: <FaMapMarkedAlt />, text: "Personalized city tours" },
          { icon: <FaCar />, text: "Domestic travel across Austria" },
          { icon: <FaTaxi />, text: "International trips" },
          { icon: <FaShippingFast />, text: "Reliable delivery and courier services" }
        ]}
      />
    <DetailSection2
  imagePosition="left"
  imageSrc={detail2}
  title="Premium Airport Transfers with Airport City Cab"
  description={[
    "Experience stress-free travel with Airport City Cab's professional taxi service in Vienna. Whether you need a quick airport shuttle or luxurious VIP transfer, our certified drivers ensure punctual and comfortable journeys.",
    "We specialize in getting you to Vienna International Airport (VIE) on time, every time, with fixed rates and no hidden charges."
  ]}

  services={[
    { icon: <FaClock />, text: "24/7 service - We're always available when you need us" },
    { icon: <FaTaxi />, text: "Airport transfers to/from Vienna International Airport" },
    { icon: <FaMapMarkedAlt />, text: "City tours and sightseeing packages" },
    { icon: <FaCar />, text: "Corporate travel and business transfers" },
  ]}
/>
<ReadyToBook/>
      <FleetCar />
    </>
  );
}
