import { motion } from "framer-motion";

const exchanges = [
  {
    name: "DEX",
    url: "https://dexscreener.com/",
    img: "/svg/dex.png",
  },
  {
    name: "PANTHOM",
    url: "https://phantom.app",
    img: "/svg/phantom.png",
  },
  {
    name: "RAYDIUM",
    url: "https://raydium.io/",
    img: "/svg/raydium.png",
  },
];

const NetWork = () => {
  const cardVariants = (time: number) => {
    return {
        offscreen: {
            scale: 0,
            opacity: 0
          },
          onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: time,
              duration: 0.2,
            },
          },
    }
  };

  return (
    <div className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-14">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="md:text-[90px] text-[52px] text-center">
            <h1 className="text-blue-500 md:leading-normal leading-[60px]">
              NETWORK
            </h1>
          </div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="text-center mt-10 md:text-3xl text-xl max-w-[700px] mx-auto text-white uppercase">
            <p>
              PabloPay está disponível para negociação nas principais exchanges.
            </p>
          </div>
        </div>
        <div className="grid min-[900px]:grid-cols-3 grid-cols-2 max-w-[1200px] min-[1200px]:grid-cols-3 w-full mx-auto pt-20 gap-5 max-[1200px]:gap-5 px-5">
          {exchanges.map((exchange, index) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              key={index}
              style={{ opacity: 1, transform: "none" }}
            >
              <a href={exchange.url} target="_blank" rel="noreferrer noopener">
                <motion.div variants={cardVariants((index + 1) / 4)} className="border-[3px] border-white/50 text-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                  <div className="relative w-full h-full md:p-5">
                    <img
                      src={exchange.img}
                      className="object-contain w-full h-full"
                      alt={exchange.name}
                    />
                  </div>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="text-center md:mt-24 mt-20 md:text-2xl text-xl mx-auto text-white/50 uppercase">
            <p>Pablo está negociando e novas exchanges chegaram.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetWork;
