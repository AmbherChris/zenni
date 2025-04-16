import Image from "next/image";
import * as React from "react";
import Heart from "./heart";
import cat from './assets/cat.jpg';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center gap-2 items-center mt-10">
        <label className="text-[40px]">I LOVE YOU ZENNI</label>
        <Heart />
      </div>

      <div className="flex justify-center mt-10">
        <Image className="rounded-lg" src={cat} alt="A cute cat" width={400} height={300} />
      </div>
    </div>
  );
}
