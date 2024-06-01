'use client'
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Historys from "@/components/historys";
import NetWork from "@/components/network";
import Work from "@/components/work";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  return (
    <main className="bg-[#1d1d1d] bg-cover bg-center relative h-full">
      <Hero />
      <NetWork />
      <Historys />
      <Work />
      <Footer /> 
    </main>
  );
}
