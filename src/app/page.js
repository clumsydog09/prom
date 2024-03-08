'use client'
import Image from "next/image";
import left_circle from "../assets/Left_Circle2.svg"
import logo from "../assets/logo_vector.svg"
import Hawkeye from "../components/Hawkeye.js";
import OOC from "@/components/OOC";
import Enigma from "@/components/Enigma";
import Timer from "../components/Timer.js";
import Footer from "@/components/Footer";
import TypewriterComponent from "typewriter-effect";




export default function Home() {
  return (

  <main className="bg-[#000512]">
    <header className="sticky pt-2 pb-5 text-white text-center font-custom1 text-2xl top-0 z-50">
        Prometheus
    </header>
  <div>
    
    <div className="hero relative overflow-x-hidden flex">
          <Image src={left_circle} className="rotate -ml-32"></Image>
          <Image src={logo} className="-ml-56"></Image>
          <div className="font-custom1 text-3xl text-white mt-20">
            FIGHT TO <br></br>SAVE<br></br> HUMANITY
          </div>
    </div>  
    <div className='font-custom1 text-md text-white pt-10 pb-10 pl-5'>
    <TypewriterComponent
                options={{
                  strings: ['Location: Manipal Institute of Technology', 'Date: April 8th 2024'],
                  autoStart: true,
                  loop: true,
                }}
    />
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
      <Enigma/>
    </div>
    <div className="mt-[2400px]">
      <Timer />
    </div>
    <div className="mt-[100px]">
      <Footer />
    </div>
    </main>
    
  );
}
