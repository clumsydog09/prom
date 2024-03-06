import right_circle from "../assets/Right_Circle2.svg"
import Image from "next/image"

const Timer = () => {
  return (
    <div className="text-white w-full bg-[url('../assets/timer-back.svg')] relative overflow-x-hidden pt-10">
            <div className="text-3xl font-custom1 z-2 text-center">TIME'S RUNNING OUT</div>
    <Image src={right_circle} className="rotate -mr-40 z-1"></Image>
    </div>
  )
}

export default Timer