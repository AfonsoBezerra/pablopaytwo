"use client";
import { motion } from "framer-motion";

const Work = () => {
  const cardVariants = (time: number) => {
    return {
      offscreen: {
        opacity: 0,
      },
      onscreen: {
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    };
  };

  return (
    <div className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-14">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="md:text-[90px] text-[52px] text-center">
            <h1 className="text-blue-500 md:leading-normal leading-[60px]">
              PABLOLESTRAS
            </h1>
          </div>
          <div className="text-center mt-10 md:text-3xl text-xl max-w-[700px] mx-auto text-white">
            <p>
              Pablo está recrutando novos{" "}
              <span className="text-blue-500">Marçais</span> para suas
              filosofias de vida para deixar ele cada vez mais rico, digo mudarem
              de vida.
            </p>
          </div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 items-center">
            <motion.div
              variants={cardVariants(0)}
              className="relative flex justify-center md:w-1/2 overflow-hidden"
            >
              <img
                className="object-cover border-4 border-blue-500 w-full h-[900px] max-sm:!h-[500px]"
                src="/pablolestras.webp"
                alt="trading"
              />
            </motion.div>
            <motion.div
              variants={cardVariants(0.25)}
              className="flex flex-col items-center"
            >
              <div className="relative md:w-[400px] w-[200px] h-[200px] md:top-[-70px] md:block hidden">
                <img
                  alt="trading"
                  className="object-contain strobe animate-pulse duration-300"
                  sizes="100vw"
                  src="/recrutando.png"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                  }}
                />
              </div>
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="flex flex-col md:gap-5 gap-3 relative z-20">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div className="flex-1 p-5 border-4 border-black bg-blue-500 text-center">
                      <div className="md:text-4xl text-xl">TOTAL MARÇAIS</div>
                      <div className="md:text-xl md:mt-5 mt-2 break-all">
                        555,555,555 $PABLOPAY
                      </div>
                    </div>
                  </div>
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div className="flex-1 p-5 border-4 border-black bg-blue-500 text-center">
                      <div className="md:text-4xl text-xl">TOKEN ADDRESS</div>
                      <div className="md:text-xl text-xs md:mt-5 mt-2 break-all">
                        5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://raydium.io/swap/?outputCurrency=5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="animate-bounce duration-500 mt-10"
                  >
                    <button className="font-display text-2xl border-4 rounded-0 border-black shadow px-5 py-3 transition-all ease-in-out md:text-4xl md:animate-bounce-fast bg-red-500 text-white opacity-100 md:hover:scale-105">
                      COMPRE PABLOS AQUI
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
