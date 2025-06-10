'use client';

import Button from "@/components/ui/Button";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface HeroSectionProps {
    backgroundImage: string | StaticImageData;
    title: string;
    description?: string;
    children?: ReactNode;
    overlayOpacity?: number;
    minHeight?: string;
    showButton?: boolean;
}

export default function HeroSection({
    backgroundImage,
    title,
    description,
    children,
    minHeight = "100vh",
    showButton
}: HeroSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full pt-16 flex items-center justify-center overflow-hidden bg-black"
            style={{ minHeight }}
        >
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${isVisible ? "opacity-100" : "opacity-0 bg-black"
                    }`}
            >
                <Image
                    src={backgroundImage}
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 1000ms cubic-bezier(0.65,0,0.35,1)",
                    }}
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content with dark fade-in-up effect */}
            <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center justify-center text-white">
                    <h1
                        className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-[1.2] md:leading-[1.3] lg:leading-[1.3] transition-all duration-700 ease-[cubic-bezier(0.64,0,0.35,1)] ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            }`}
                    >
                        {title}
                    </h1>
                    {description && (
                        <p
                            className={`text-lg md:text-xl lg:text-3xl max-w-3xl mb-8 leading-[1.2] transition-all duration-700 ease-[cubic-bezier(0.64,0,0.35,1)] delay-150 ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                }`}
                        >
                            {description}
                        </p>
                    )}
                    {showButton && (
                        <div className={` transition-all duration-700 ease-[cubic-bezier(0.64,0,0.35,1)] delay-200 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            }`}>
                            <Button label="Order Now" />
                        </div>
                    )}
                    <div
                        className={`transition-all duration-700 ease-[cubic-bezier(0.64,0,0.35,1)] delay-300 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                            }`}
                    >
                        {children}
                    </div>
                </div>


            </div>
        </section>
    );
}
