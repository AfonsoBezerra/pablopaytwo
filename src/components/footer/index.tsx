const Footer = () => {
  return (
    <div className="bg-blue-500 h-fit min-h-[500px]">
      <div className="md:pt-20 pt-12 mx-auto max-w-1500">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="md:text-[90px] text-[50px] text-center">
            <h1 className="text-black">SOCIALS</h1>
            <div className="text-black md:text-3xl text-xl">
              Entre para a comunidade Marçais
            </div>
          </div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="flex md:gap-8 gap-3 justify-center md:pt-20 pt-10 z-[100] relative">
            <div className="relative md:w-20 md:h-20 w-12 h-12">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/pablopaysol"
              >
                <div className="relative md:w-14 md:h-14 h-12 bg-black w-12 md:hover:scale-105 p-2 rotate-[5deg]">
                  <img src="/xlogo.png" alt="xlogo" />
                </div>
              </a>
            </div>
            <div className="relative md:w-20 md:h-20 w-12 h-12 md:hover:scale-105">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://discord.gg/bx93Ya5am5"
              >
                <div className="relative md:w-14 md:h-14 h-12 w-12 flex justify-center items-center bg-black md:hover:scale-105 p-2 -rotate-[5deg]">
                  <img src="/discord.png" alt="discordlogo" />
                </div>
              </a>
            </div>
            <div className="relative md:w-20 md:h-20 w-12 h-12 md:hover:scale-105">
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
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="flex lg:flex-row flex-col-reverse lg:gap-24 gap-10 justify-center items-center lg:mt-[-140px] mt-20">
              <div className="relative lg:!w-[400px] w-screen h-[350px] lg:!h-[400px] lg:mt-36">
                <img
                  alt="head"
                  className="w-full object-cover lg:object-cover object-top"
                  src="/footerimg.png"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    color: "transparent",
                  }}
                />
              </div>
              <div className="flex flex-col justify-end lg:h-[300px] lg:mt-32">
                <a
                  href="https://raydium.io/swap/?outputCurrency=5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="font-display text-white md:text-4xl text-2xl bg-red-500 border-4 rounded-0 border-black rotate-[5deg] shadow px-5 py-3 transition-all ease-in-out strobe md:rotate-[-10deg] opacity-100 md:hover:scale-105">
                    FAÇA PARTE AGORA
                  </button>
                </a>
                <div className="lg:w-[300px] z-20 lg:block hidden mt-10">
                  <div className="w-full flex justify-center z-20 text-[100px] max-lg:text-[60px] max-lg:text-[40px]">
                    PABLOPAY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
