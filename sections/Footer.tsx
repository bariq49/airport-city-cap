import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerData = {
        logo: {
            description: "Your Gateway to Discreet Luxury Travel"
        },
        links: [
            {
                title: "Pages",
                items: [
                    { label: "About", href: "/about" },
                    { label: "Service", href: "/services" },
                    { label: "Fleet", href: "/fleet" },
                    { label: "Contact", href: "/contact" }
                ]
            },
            {
                title: "Book Now",
                items: [
                    { label: "Book Now", href: "#" },
                   
                ]
            },
            {
                title: "Contact",
                items: [
                    { label: "Become a Chauffeur", href: "#" },
                    { label: "+088 (246) 642-27-10", href: "tel:+0882466422710" },
                    { label: "example@gmail.com", href: "mailto:example@gmail.com" }
                ]
            }
        ],
        copyright: "© 2025 travel All Rights Reserved."
    };

    return (
        <footer className="bg-black text-white relative pt-20 pb-8 px-8 md:px-20">
            <div className="max-w-screen-3xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="flex flex-col space-y-2 max-w-xs">
                    <Link href="/" className="relative w-[44px] h-[44px]">
                        Logo
                    </Link>
                    <p className="text-md text-white">{footerData.logo.description}</p>
                </div>

                {footerData.links.map((section) => (
                    <div key={section.title} className="flex flex-col space-y-6">
                        <h3 className="font-bold text-[32px]">{section.title}</h3>
                        {section.items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white text-xl"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            <hr className="border-gray-700 my-8" />
            <p className="text-center text-white text-md">{footerData.copyright}</p>
        </footer>
    );
}