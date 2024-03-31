import enigma_back from "../assets/Enigma-Phone.svg"
import engima from "../assets/enigma-logo.svg"
import enigma_button from "../assets/enigma-button.svg"
import Image from "next/image";


const Enigma = () => {
  return (
    <div className="w-full h-screen text-white flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-3">
        {/* <Image src={enigma_back} className="z-1 absolute w-full"></Image> */}
        <Image src={engima} className="mt-10 lg:w-96 lg:h-96" alt="enigma-logo"></Image>
        <div className="font-custom2 text-white ml-4 mt-20">
          <p className="text-5xl">Enigma</p>
          <p className="mt-5 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Justo donec enim diam vulputate ut pharetra sit amet aliquam. At urna condimentum mattis pellentesque id. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Amet volutpat consequat mauris nunc. Diam sit amet nisl suscipit.</p>
        </div>
      </div>
      <button>
        <Image src={enigma_button} className="animate-pulse" alt="enigma-button" />
      </button>
    </div>
  )
}

export default Enigma
