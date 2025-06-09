'use client';
import { FaUserFriends, FaSuitcase } from "react-icons/fa"; 
import Image from "next/image";
import { ClientSideStrings } from "@/components/translations/ClientSideTranslations";
import { fleet1, fleet2, fleet3 } from "@/public/images/fleet";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function FleetCar() {
  const { fleet } = ClientSideStrings()
  const images = [fleet2,fleet1, fleet3];
  return (
    <ContainerLayout>
      <div className="flex flex-col items-start justify-start py-6">
        <p
          className="mt-2 text-lg bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #000, #f0a857 70%)'
          }}
        >
          {fleet.sectionTitle}
        </p>
        <h1
          className="text-4xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #000, #f0a857 70%)'
          }}
        >
          {fleet.sectionSubtitle}
        </h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        {fleet.carData.map((car, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden group" 
          >
            <div className=" w-full h-72 flex items-center justify-center relative overflow-hidden">
              <Image
                src={images[index]} alt={car.title}
                fill
                className="object-contain p-4 transition-transform duration-500 ease-in-out group-hover:scale-105" // <-- ADD HOVER EFFECT
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-left">
              {/* Title */}
              <h2 className="text-2xl font-bold mb-2">{car.title}</h2>

              {/* Bottom Border */}
              <div className="border-b border-gray-300 mb-4"></div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{car.description}</p>

              {/* Passenger and Bags info */}
              <div className="flex items-center text-gray-500  justify-between">
                <div className="flex space-x-6 text-sm">

                <div className="flex items-center space-x-1">
                  <FaUserFriends className="text-gray-500" />
                  <span>{car.passengers} {fleet.passengers}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaSuitcase className="text-gray-500" />
                  <span>{car.bags} {fleet.bags}</span>
                </div>
                </div>
                <div className="flex gap-2 ">
                  <p className="text-gray-600 text-sm mb-4">{fleet.from}:</p>
                <p className="text-gray-600 text-sm mb-4">{car.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContainerLayout>
  );
}
