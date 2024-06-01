import { motion } from "framer-motion";

const exchanges = [
  {
    name: "Bybit",
    url: "https://www.bybit.com/en/trade/spot/PONKE/USDT",
    img: "/svg/bybit.svg",
  },
  {
    name: "OKX",
    url: "https://www.okx.com/web3/dex-swap#inputChain=501&inputCurrency=11111111111111111111111111111111&outputChain=501&outputCurrency=5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC",
    img: "/svg/okx-dex.svg",
  },
  {
    name: "Gate",
    url: "https://www.gate.io/trade/PONKE_USDT",
    img: "/svg/gate.png",
  },
  {
    name: "HTX",
    url: "https://www.htx.com/en-us/trade/ponke_usdt?type=spot",
    img: "/svg/htx.svg",
  },
  {
    name: "Bitget",
    url: "https://www.bitget.com/en-GB/spot/PONKEUSDT",
    img: "/svg/bitget.svg",
  },
  {
    name: "Woox",
    url: "https://x.woo.org/en/trade/PONKE_USDT",
    img: "/svg/woox.webp",
  },
  {
    name: "Poloniex",
    url: "https://poloniex.com/trade/PONKE_USDT/?type=spot",
    img: "/svg/poloniex.svg",
  },
  {
    name: "Bitmart",
    url: "https://www.bitmart.com/trade/en-US?symbol=PONKE_USDT&layout=basic",
    img: "/svg/bitmart.svg",
  },
  {
    name: "LBank",
    url: "https://www.lbank.com/trade/ponke_usdt/",
    img: "/svg/lbank.svg",
  },
  {
    name: "Bitrue",
    url: "https://www.bitrue.com/trade/ponke_usdt?inviteCode=EWHZTGL",
    img: "/svg/bitrue.png",
  },
  {
    name: "MEXC",
    url: "https://www.mexc.com/exchange/PONKE_USDT",
    img: "/svg/mexc.svg",
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
