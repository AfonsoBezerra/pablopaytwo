"use client";
import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRef, useState } from "react";

const variants = [
  {
    id: "0",
    label: "PabloPirata",
    img: "/imgs/pirata.png",
  },
  {
    id: "1",
    label: "PabloSharlok",
    img: "/imgs/sharlok.png",
  },
  {
    id: "2",
    label: "AstroPablo",
    img: "/imgs/astronauta.png",
  },
  {
    id: "3",
    label: "PabloRock",
    img: "/imgs/rockeiro.png",
  },
];

const Aventuras = () => {
  const [imgAventura, setImgAventura] = useState(variants[0]);
  const [userImg, setUserImg] = useState<any>();
  const inputRef = useRef<any>();

  function addImage() {
    const file = document.getElementById("input-file");
    file?.click();
  }

  function handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function saveImage() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const userImage = new Image();
    userImage.src = userImg;

    const adventureImage = new Image();
    adventureImage.src = imgAventura.img;

    userImage.onload = () => {
      canvas.width = 500; // Set canvas size based on your requirements
      canvas.height = 600;

      context?.drawImage(userImage, 0, 0, canvas.width, canvas.height);

      adventureImage.onload = () => {
        const adventureWidth = 250;
        const adventureHeight = 250;
        const x = 0;
        const y = canvas.height - adventureHeight;

        context?.drawImage(
          adventureImage,
          x,
          y,
          adventureWidth,
          adventureHeight
        );

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "combined_image.png";
        link.click();
      };
    };
  }

  return (
    <main className="bg-blue-500 min-h-screen flex flex-col justify-center items-center gap-10 max-sm:py-10">
      <h1 className="text-[50px] text-center max-sm:text-[30px]">
        FAÇA PARTE DAS AVENTURAS <br />
        DO PABLO
      </h1>
      <ToggleGroup
        type="single"
        defaultValue="0"
        onValueChange={(e: any) => setImgAventura(variants[e])}
        className="flex items-center justify-center gap-10 max-sm:flex-col max-sm:gap-5"
      >
        {variants.map((item) => {
          return (
            <ToggleGroupItem
              key={item.id}
              value={item.id}
              className="border-2 border-[#020817] text-xl"
            >
              {item.label}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
      <div className="w-[500px] h-[500px] border-[5px] border-[#020817] relative max-sm:w-[96%]">
        {userImg ? (
          <img
            src={userImg}
            alt="user"
            className="w-full h-full object-cover"
          />
        ) : null}
        <div className="flex flex-col items-center absolute left-0 bottom-0 z-10">
          <img
            src={imgAventura.img}
            alt="img in zone"
            className="w-[250px] h-[250px] max-sm:w-[150px] max-sm:h-[150px]"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center max-sm:flex-col max-sm:gap-2">
        {userImg ? (
          <button
            onClick={saveImage}
            className="font-display text-white md:text-4xl text-2xl bg-red-500 border-4 rounded-0 border-black shadow px-5 py-3 transition-all ease-in-out strobe opacity-100 md:hover:scale-105"
          >
            SALVAR
          </button>
        ) : null}
        <button
          onClick={addImage}
          className="font-display text-white md:text-4xl text-2xl bg-red-500 border-4 rounded-0 border-black shadow px-5 py-3 transition-all ease-in-out strobe opacity-100 md:hover:scale-105"
        >
          ADICIONE UMA FOTO
        </button>

        <input
          accept="image/*"
          id="input-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>
    </main>
  );
};

export default Aventuras;
