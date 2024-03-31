import hawkeye_back from "../assets/Hawkeye-Phone.svg"
import hawk from "../assets/hawk2.svg"
import hawkbutton from "../assets/hawk-button.svg"
import Image from "next/image";


const Hawkeye = () => {
  return (
    <div className="text-white flex justify-center items-center">
      {/* <Image src={hawkeye_back} className="z-1 absolute w-full"></Image> */}
      <Image src={hawk} className="mt-8 lg:w-96 lg:h-96" alt="hawk-logo"></Image>
      <div className="font-custom2 text-white ml-4 mt-20">
        <p className="text-5xl">Hawkeye</p>
        <p className="mt-5 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Justo donec enim diam vulputate ut pharetra sit amet aliquam. At urna condimentum mattis pellentesque id. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Amet volutpat consequat mauris nunc. Diam sit amet nisl suscipit.</p>
      </div>
      <button>
        <Image src={hawkbutton} className="animate-pulse" alt="hawk-button"></Image>
      </button>
    </div>
  )
}

export default Hawkeye