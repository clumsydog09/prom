import footer_back from '../assets/footer_back.svg'
import insta from "../assets/insta.svg"
import linkedin from "../assets/linkedin.svg"
import Image from "next/image";
const Footer = () => {
  return (
    <div className='bg-[#010613] pb-20'>
      <div className='flex justify-center font-custom2 text-2xl text-white'>Sponsors</div>
        <a href="https://iecsemanipal.com/">
        <Image src={footer_back}></Image>
        </a>
        <div className='flex flex-row space-x-20 justify-center items-center'>
            <a href="https://www.instagram.com/iecsemanipal/">
                <Image src={insta} className='h-8 w-8'></Image>
            </a>
            <a href="https://www.instagram.com/iecsemanipal/">
                <Image src={linkedin}  className='h-8 w-8' ></Image>
            </a>
        </div>
    </div>
  )
}

export default Footer