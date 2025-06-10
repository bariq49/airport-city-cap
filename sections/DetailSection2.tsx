import ContainerLayout from '@/components/layouts/ContainerLayout';
import Image, { StaticImageData } from 'next/image';
import { FaTaxi, FaMapMarkedAlt, FaCar, FaShippingFast, FaClock, FaCarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface DetailSectionProps {
  imagePosition: 'left' | 'right';
  imageSrc: string | StaticImageData;
  title: string;
  description: string[];
  services?: {
    icon: React.ReactNode;
    text: string;
  }[];
  benefits?: {
    icon: React.ReactNode;
    text: string;
  }[];
}

export default function DetailSection2({
  imagePosition = 'left',
  imageSrc,
  title,
  description,
  services,
  benefits
}: DetailSectionProps) {
  const contentOrder = imagePosition === 'left' 
    ? 'md:flex-row' 
    : 'md:flex-row-reverse';

  return (
    <ContainerLayout className='py-12'>
      <div className={`flex flex-col ${contentOrder} items-stretch gap-8`}>
        {/* Image Section - now with equal height */}
        <div className="w-full md:w-1/2 h-full flex">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
            <Image 
              src={imageSrc}
              alt="Airport Taxi Service"
              className="rounded-lg shadow-lg object-cover"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
            />
          </div>
        </div>

        {/* Content Section - now with matching height */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
            
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}

            {benefits && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Why choose Airport City Cab:
                </h3>

                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">{benefit.icon}</span>
                      <span className="text-gray-700">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {services && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  We also offer additional services:
                </h3>

                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">{service.icon}</span>
                      <span className="text-gray-700">{service.text}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}