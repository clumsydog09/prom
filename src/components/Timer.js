import right_circle from "../assets/Right_Circle2.svg"
import Image from "next/image"
import CountdownTimer from "./CountdownTimer"


const Timer = () => {
  return (<>
    <div className="text-white w-full bg-[url('../assets/timer-back.svg')] relative overflow-x-hidden pt-10 pb-9 mt-5">
    <Image src={right_circle} className="rotate absolute z-1"></Image>
    <div className="mt-40 mb-32 z-2">
    <div className="text-3xl font-custom1 text-center z-2">TIMES RUNNING OUT</div>
    <CountdownTimer
        countdownTimestampMs={1712537430000} />
    </div>
    </div>
   
    </>
  )
}

export default Timer