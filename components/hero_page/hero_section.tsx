"use client";
import React, { useState } from "react";
import { Noto_Sans_Javanese } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const javanese = Noto_Sans_Javanese({ subsets: ["javanese"], weight: "400" });

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className={`relative min-h-screen max-w-full overflow-hidden ${javanese.className}`} aria-labelledby="hero-title">
      
      {/* Background Image - Adding descriptive alt text */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        <Image
          src="/bgg7.png"
          alt="Decorative background for the AthenaMD learning platform"
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen z-10 px-6">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl text-center">
          
          {/* Heading - Adding id for aria-labelledby reference */}
          <h1 id="hero-title" className="sm:text-3xl md:text-4xl font-bold text-3xl text-[#043873]">
            Develop <span className="text-[#151A40]">Your Medical Skills</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#043873] mt-2 sm:mt-3">
            Your Journey Begins Now
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#043873] mt-2 sm:mt-4">
            Explore free courses to learn VSP and 3D printing techniques
          </p>


          {/* Button - Adding proper accessibility attributes */}
          <div className="mt-4 sm:mt-6">
            <Link 
              href="/main_homepage" 
              className="inline-block px-4 py-2 bg-[#043873] text-center text-white text-sm sm:text-base rounded-lg hover:bg-[#0f1330] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#043873]"
              aria-label="Browse all available courses"
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;