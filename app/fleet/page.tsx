import { hero1 } from "@/public/images/heroSection";
import FleetCar from "@/sections/FLeetSection";
import HeroSection from "@/sections/HeroSection";
import ReadyToBook from "@/sections/ReadyToBook";

export default function Fleet() {
    return (
        <>
            <HeroSection
                backgroundImage={hero1}
                title="Our Fleet"
                description="Our company is available 24 hours a day, 365 days a year to get you to your destination conveniently and easily."
            />
            <FleetCar />
            <div className="py-12">
                <ReadyToBook />
            </div>
        </>
    )
}