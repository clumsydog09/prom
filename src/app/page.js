
import Image from "next/image";
import left_circle from "../assets/Left_Circle2.svg"
import circles from "../assets/Circles.svg"
import logo from "../assets/logo_vector.svg"
import Hawkeye from "../components/Hawkeye.js";
import OOC from "@/components/OOC";
import Timer from "../components/Timer.js";




export default function Home() {
  return (

  <main className="bg-[#000512]">
  <div>
    <header className="pt-2 pb-5 text-white text-center font-custom1 text-xl">
        Prometheus
    </header>
    <div className="hero relative overflow-x-hidden flex">
          <Image src={left_circle} className="rotate -ml-32"></Image>
          <Image src={logo} className="-ml-56"></Image>
          <div className="font-custom1 text-3xl text-white mt-20">
            FIGHT TO <br></br>SAVE<br></br> HUMANITY
          </div>
    </div>
    <div className="mt-20 pb-40 bg-[url('../assets/Circles.svg')] bg-no-repeat">
          <div className="font-custom1 text-white ml-4 text-xl">
            YEAR - 3081
          </div>
          <div className="font-custom2 text-white ml-4 mt-5 text-xl">
          After centuries of war with an undefeatable enemy Humanity has lost all hope.
          They has just one thing that can save them.
          Prometheus a group of highly skilled programmers who can finally defeat the AI that has destroyed humanity.
          </div>
    </div>
    </div>
    <div>
      <Hawkeye/>
    </div>
    <div className="mt-[800px]">
      <OOC/>
    </div>
    <div className="mt-[1600px]">
      <Timer />
    </div>
    </main>
    
  );
}
