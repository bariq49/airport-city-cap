'use client';

import Image, { StaticImageData } from 'next/image';
import { ClientSideStrings } from '@/components/translations/ClientSideTranslations';
import ContainerLayout from '@/components/layouts/ContainerLayout';
// import { airport1, airport2, airport3, airport4, standard } from '@/public/images/airports';


// interface Service {
//   id: number;
//   image: StaticImageData;
//   alt: string;
//   subtitle: string;
//   title: string;
//   description: string;
//   cols?: 1 | 2;
// }

export default function ServiceSec() {
const {services} = ClientSideStrings()
  return (
    <ContainerLayout className="py-10">
     <div className="flex flex-col items-start justify-start py-6">
  <p
    className="mt-2 text-lg bg-clip-text text-transparent"
    style={{
      backgroundImage: 'linear-gradient(90deg, #000, #f0a857 70%)'
    }}
  >
    {services.sectionTitle}
  </p>

  <h1
    className="text-4xl font-bold bg-clip-text text-transparent"
    style={{
      backgroundImage: 'linear-gradient(90deg, #000, #f0a857 70%)'
    }}
  >
    {services.sectionSubtitle}
  </h1>
</div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
        {services.topServices.map((svc) => (
          <div
            key={svc.id}
            className={`relative overflow-hidden group h-[400px] md:h-[500px] ${
              svc.id === 1 ? 'lg:col-span-2' : 'lg:col-span-1'
            }`}
          >
            <Image
              src={svc.image}
              alt={svc.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              {/* <p className="text-sm mb-2">{svc.subtitle}</p> */}
              <h2 className="text-2xl font-bold mb-4">{svc.title}</h2>
              <p className="text-sm mb-4">{svc.description}</p>
            </div>
          </div>
        ))}
      </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.bottomServices.map((svc) => (
          <div
            key={svc.id}
            className="relative h-[300px] overflow-hidden group"
          >
            <Image
              src={svc.image}
              alt={svc.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-xl font-bold mb-3">{svc.title}</h2>
              <p className="text-sm mb-4">{svc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContainerLayout>
  );
}
