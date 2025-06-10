import { hero1 } from "@/public/images/heroSection";
import HeroSection from "@/sections/HeroSection";
import ReadyToBook from "@/sections/ReadyToBook";
import ServiceSec from "@/sections/ServiceSec";

export default function Services(){
    return(
        <>
         <HeroSection
                backgroundImage={hero1}
                title="Services"
                description="Whether you are traveling for business, alone, on vacation with children or in a group with lots of luggage – we always have the right vehicle for your needs."
              />
              <ServiceSec/>
               <div className="py-12">
                    <ReadyToBook/>
                    </div>
        </>
    )
}