import { detail1, detail2 } from "@/public/images/detailsection";
import { hero1 } from "@/public/images/heroSection";
import DetailSection from "@/sections/DetailSection";
import HeroSection from "@/sections/HeroSection";
import ReadyToBook from "@/sections/ReadyToBook";

export default function About(){
    return(
        <>
 <HeroSection
        backgroundImage={hero1}
        title="About Us"
        description="AirportCity Cab is Vienna’s leading airport taxi and shuttle service, trusted by business travelers, tourists, and locals alike."
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
      <div className="py-12">
      <ReadyToBook/>
      </div>
              </>
    )
}