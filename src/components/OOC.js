import ooc_back from "../assets/OOC-Phone.svg"
import ooc from "../assets/ooc-logo.svg"
import ooc_button from "../assets/ooc-button.svg"
import Image from "next/image";


const OOC = () => {
  return (
    <div className="text-white w-full">
    <Image src={ooc_back} className="z-1 absolute w-full"></Image>
          <Image src={ooc} className="z-2 absolute ml-16 mr-16 mt-10"></Image>
          <div className="font-custom2 text-white z-2 absolute ml-4 mt-80 ">
          <p className="text-5xl">Order of Chaos</p>  
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Justo donec enim diam vulputate ut pharetra sit amet aliquam. At urna condimentum mattis pellentesque id. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Amet volutpat consequat mauris nunc. Diam sit amet nisl suscipit.</p>
          <button>
            <Image src={ooc_button}/>
          </button>
          </div>
    </div>
  )
}

export default OOC

