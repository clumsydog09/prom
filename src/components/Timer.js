import right_circle from "../assets/Right_Circle2.svg"
import Image from "next/image"
import CountdownTimer from "./CountdownTimer"


const Timer = () => {
  return (<>
    <div className="text-white w-full bg-[url('../assets/timer-back.svg')] relative pt-10 pb-9 mt-5 lg:flex justify-center">
    {/* <Image src={right_circle} className="rotate absolute z-1 lg:hidden"></Image> */}
    <div className="mt-40 mb-32 z-2">
    <div className="text-4xl font-custom1 mb-5 text-center lg:text-5xl lg:mb-20">TIME IS RUNNING OUT</div>
    <CountdownTimer
        countdownTimestampMs={1712537430000} />
    </div>
    </div>
   
    </>
  )
}

export default Timer