import ooc_back from "../assets/OOC-Phone.svg"
import ooc from "../assets/ooc-logo.svg"
import ooc_button from "../assets/ooc-button.svg"
import Image from "next/image";


const OOC = () => {
  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center gap-3">
      <div className=" flex flex-row-reverse justify-center items-center gap-3">
        {/* <Image src={ooc_back} className="z-1 absolute w-full"></Image> */}
        <Image src={ooc} className="ml-16 mr-16 mt-10 lg:w-96 lg:h-96" alt="ooc-logo"></Image>
        <div className="font-custom2 text-white ml-4 mt-20">
          <p className="text-5xl">Order of Chaos</p>
          <p className="mt-5 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Justo donec enim diam vulputate ut pharetra sit amet aliquam. At urna condimentum mattis pellentesque id. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Amet volutpat consequat mauris nunc. Diam sit amet nisl suscipit.</p>
        </div>
      </div>
      <button>
        <Image src={ooc_button} className="animate-pulse" alt="ooc-button" />
      </button>
    </div>
  )
}

export default OOC

