"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState
import urlFor from '../lib/urlFor';

export default function LegalSearchCard({ data, animationDelay }) {
  const { heading , description} = data;
  console.log("DATA--->" ,data)
  const [isHovered, setIsHovered] = useState(false); // Use state to track hover

  return (
    <div
      className="flex-1 relative h-80 w-full sm:max-w-xs lg:max-w-full overflow-hidden rounded-md shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="zoom-in"
      data-aos-delay={2}
    >
      
      <div
        className={`absolute inset-0 ${isHovered && "scale-110"
          } transition duration-300 ease-in-out`}
      >
        <Image   src={urlFor(data.image).url()} fill className="object-cover" alt={heading} priority />
      </div>




      <div className={`
      
      ${isHovered && "bg-blue-400 opacity-7"}
      relative text-white h-full text-center transition-all duration-200 flex  flex-col justify-center md:justify-end py-2 legalOverlay px-2`}>
        <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
          {heading}
        </h3>
        <div
          className={`legalSearchCard ${isHovered ? "-bottom-0 opacity-100 h-full" : "-bottom-full opacity-0"
            } transition-all duration-300 ease-in-out flex flex-col gap-2 absolute left-0 text-start p-4  `}
        >       
         {/* <h3 className=" text-lg tracking-wide sm:text-xl md:text-2xl font-bold">
            {heading}
          </h3> */}
          <p className="text-white">{ description}</p>
       
        </div>
      </div>
    </div>
  );
}
