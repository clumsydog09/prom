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

    <main className="">

      <header className="py-8 text-white text-center font-custom1 text-2xl top-0 z-50 lg:text-4xl">
        <a href="/" className="no-underline glow">
          Prometheus
        </a>
      </header>


      <div>
        <div className="hero relative flex flex-col justify-center items-center bg-[url('../assets/vhs-glitch.gif')]">
          {/* <Image src={left_circle} className="rotate -ml-32 lg:w-96 lg:h-96"></Image> */}
          {/* <Image src={logo} className="-ml-56 md:hidden"></Image> */}
          <div className="font-custom1 text-3xl text-white mt-20 mb-24 lg:text-6xl">
            FIGHT TO <br></br>SAVE<br></br> HUMANITY
          </div>
        </div>
        <div className='font-custom1 text-md text-white pl-5 pt-8 lg:text-2xl'>
          <TypewriterComponent
            options={{
              strings: ['Location: Manipal Institute of Technology', 'Date: April 6th to April 10th 2024'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-20 pb-40">
          <div className="font-custom1 text-white ml-4 text-xl lg:text-3xl">
            YEAR - 3081
          </div>
          <div className="font-custom2 text-white ml-4 mt-5 text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Justo donec enim diam vulputate ut pharetra sit amet aliquam. At urna condimentum mattis pellentesque id.
          </div>
        </div>
      </div>
      <div className="m-8">
        <Hawkeye />

        <OOC />

        <Enigma />
      </div>
      <div>
        <Timer />
      </div>
      <div className="mt-[100px] lg:mt-[0px]">
        <Footer />
      </div>
    </main>

  );
}
