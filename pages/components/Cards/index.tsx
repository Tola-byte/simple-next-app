import { CardTypes } from "@/types"
import Image from "next/image"


const Cards: React.FC<CardTypes> = ({ title, imgsrc, author, time }) => {
    return <div className="w-[350px] transition-transform transform hover:scale-105 duration-300 ease-out">

        <Image src={imgsrc} width={400} height={300} alt={"img"} />


        <div className="p-5  bg-white text-black">
            <h5 className=" font-extrabold">{title}</h5>

            <div className="flex justify-between">
                <p className="text-sm">{time} mins read</p>

                <p className="text-sm">by {author}</p>
            </div>
        </div>
    </div>
}

export default Cards 