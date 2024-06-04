"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";
import AOS from "aos";

const carouselItems = [
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
  "$PabloPay",
];

const Hero = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);
  return (
    <>
      <div className="bg-blue-500 pt-10 max-[1900px]:!pt-0 h-[95vh] max-[1900px]:!h-[110vh] max-[1100px]:!h-full  relative w-full">
        <div className="flex justify-center items-center max-w-1500 mx-auto md:pt-0 pt-[10px] max-2xl:!pt-0 h-fit">
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="flex flex-col items-center"
          >
            <div className="z-[300]" style={{ opacity: 1, transform: "none" }}>
              <div className="w-full flex justify-center z-20 text-[180px] max-md:text-[100px] max-sm:text-[80px]">
                PABLOPAY
              </div>
              <div className="text-center md:text-2xl text-sm max-sm:text-xl">
                Powered by solana
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-[1100px]:gap-10 w-full items-center h-full">
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="w-full flex flex-col items-center text-black md:text-[2vw] text-[20px] flex-1 pr-[400px] max-[1100px]:pr-0"
            >
              <div className="md:max-w-[30vw] max-xl:!max-w-[50vw] pt-[5vw] text-center max-sm:!max-w-[95%] max-md:!max-w-[80%]">
                <p className="text-5xl max-sm:text-3xl">
                  <strong>PabloPay</strong> é um grande aventureiro e um{" "}
                  <strong>verdadeiro</strong> contador de histórias.
                </p>
              </div>
              <div className="mt-14 flex md:flex-row flex-col gap-10 items-center justify-center md:ml-[-70px]">
                <div
                  className="z-[300]"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <a
                    href="https://raydium.io/swap/?outputCurrency=5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="font-display text-white md:text-4xl text-2xl bg-red-500 border-4 rounded-0 border-black -rotate-[5deg] shadow px-5 py-3 transition-all ease-in-out opacity-100 md:hover:scale-105">
                      COMPRAR PABLOS
                    </button>
                  </a>
                </div>
                <div
                  className="z-[300]"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <div className="flex gap-4">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://x.com/pablopaysol"
                    >
                      <div className="relative md:w-14 md:h-14 h-12 bg-black w-12 md:hover:scale-105 p-2 rotate-[5deg]">
                        <img src="/xlogo.png" alt="xlogo" />
                      </div>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://discord.gg/bx93Ya5am5"
                    >
                      <div className="relative md:w-14 md:h-14 h-12 w-12 flex justify-center items-center bg-black md:hover:scale-105 p-2 -rotate-[5deg]">
                        <img src="/discord.png" alt="discordlogo" />
                      </div>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/pablopaysolana/"
                    >
                      <div className="relative md:w-14 md:h-14 h-12 w-12 bg-black md:hover:scale-105 p-2 rotate-[5deg]">
                        <img src="/instagram.svg" alt="instalogo" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-[1100px]:hidden block h-full">
              <img
                src="/image1.png"
                alt="image1"
                className="absolute bottom-0 right-0 w-[650px] h-[700px] max-[1700px]:w-[500px] max-[1700px]:h-[550px] rotate-"
              />
            </div>
            <div className="w-full flex justify-end">
              <img
                className="max-[1100px]:block hidden w-[400px]"
                src="/image1.png"
                alt="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-1 bg-[#1d1d1d]">
        <div className="w-full bg-blue-200 py-4">
          <Carousel
            className="w-full h-full relative pointer-events-none"
            opts={{
              loop: true,
              align: "center",
            }}
            plugins={[
              AutoScroll({
                speed: 2,
              }),
            ]}
          >
            <CarouselContent className="ml-0">
              {carouselItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 w-full pl-0 pr-4 flex-[0_0_9%] max-[1750px]:!flex-[0_0_12%] max-xl:!flex-[0_0_16%] max-[970px]:!flex-[0_0_20%] max-md:!flex-[0_0_25%] max-sm:!flex-[0_0_35%] max-[450px]:!flex-[0_0_45%] max-[350px]:!flex-[0_0_55%]"
                >
                  <h1 className="uppercase text-4xl">{item}</h1>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;
