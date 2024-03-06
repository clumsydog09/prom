
import Image from "next/image";
import left_circle from "../assets/Left_Circle2.svg"
import circles from "../assets/Circles.svg"
import hawkeye_back from "../assets/Hawkeye-Phone.svg"
import hawk from "../assets/hawk2.svg"
import hawkbutton from "../assets/hawk-button.svg"
import Hawkeye from "../components/Hawkeye.js";
import OOC from "@/components/OOC";




export default function Home() {
  return (
    <>
    <main className="bg-[#000512] h-screen">
    <header className="pt-2 pb-5 text-white text-center font-['Dune_Rise'] text-xl">
        Prometheus
    </header>
    <div className="hero relative overflow-x-hidden flex">
          <Image src={left_circle} className="rotate -ml-36"></Image>
          <div className="font-['Dune_Rise'] text-3xl text-white mt-20">
            FIGHT TO SAVE HUMANITY
          </div>
    </div>
    <div className="mt-20">
          <Image src={circles} className="z-1 absolute"></Image>
          <div className="font-['Dune_Rise'] text-white z-2 absolute ml-4 mt-10 text-xl">
            YEAR - 3081
          </div>
          <div className="font-['Agency_FB'] text-white z-2 absolute ml-4 mt-24 text-xl">
          After centuries of war with an undefeatable enemy Humanity has lost all hope.
          They has just one thing that can save them.
          Prometheus a group of highly skilled programmers who can finally defeat the AI that has destroyed humanity.
          </div>
    </div>
    </main>
    <div>
      <Hawkeye/>
    </div>
    <div className="mt-[800px]">
      <OOC/>
    </div>
    

    </>
    
  );
}
