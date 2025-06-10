import Image, { StaticImageData } from "next/image";

interface SectionBlock {
  title: string;
  paragraph: string;
  imageSrc: string | StaticImageData; 
  imageAlt?: string;
  imageLeft?: boolean;
}

interface StorySection2Props {
  topSection: SectionBlock;
  middleSection: SectionBlock;
  extraImageSrc?: string;  
  extraImageAlt?: string;  
}

export default function DetailSection({
  topSection,
  middleSection,
}: StorySection2Props) {
  return (
    <>
      {/* Top section */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center justify-between px-6">
          <div>
            <h2 className="text-2xl md:text-5xl mb-4">{topSection.title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{topSection.paragraph}</p>
          </div>
          <div className="relative w-full max-w-[400px] h-[300px] md:h-[400px] mx-auto overflow-hidden">
            <Image
              src={topSection.imageSrc}
              alt={topSection.imageAlt || "Section Image"}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Middle section */}
      <div className="bg-[#F7F7F7]">
        <section
          className="bg-[#0C0C0C] pb-16 md:pt-32 pt-40 relative"
          style={{
            clipPath: 'polygon(0 12%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 justify-between md:gap-40 items-center px-6">
            {!middleSection.imageLeft && (
              <div className="relative w-full max-w-[400px] h-[300px] md:h-[400px] overflow-hidden shadow-lg">
                <Image
                  src={middleSection.imageSrc}
                  alt={middleSection.imageAlt || "Section Image"}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            )}
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-5xl mb-4">{middleSection.title}</h2>
              <p className="text-xl leading-relaxed text-justify">{middleSection.paragraph}</p>
            </div>
            {middleSection.imageLeft && (
              <div className="relative w-full max-w-[400px] h-[300px] md:h-[400px] overflow-hidden shadow-lg">
                <Image
                  src={middleSection.imageSrc}
                  alt={middleSection.imageAlt || "Section Image"}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
