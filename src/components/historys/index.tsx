import Link from "next/link";

const Historys = () => {
  return (
    <div className="bg-blue-500  border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-14 flex flex-col items-center gap-12">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="md:text-[90px] text-[52px] text-center">
            <h1 className="md:leading-normal leading-[60px]">
              Aventuras criadas
            </h1>
          </div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="text-center md:text-3xl text-xl max-w-[700px] mx-auto uppercase">
            <p>
              Pablo está criando novas{" "}
              <span className="line-through opacity-50">histórias</span>{" "}
              aventuras.
            </p>
          </div>
        </div>
        <Link
          href="/aventuras"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="font-display text-white md:text-4xl text-2xl bg-red-500 border-4 rounded-0 border-black shadow px-5 py-3 transition-all ease-in-out strobe opacity-100 md:hover:scale-105">
            PARTICIPE DAS AVENTURAS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Historys;
