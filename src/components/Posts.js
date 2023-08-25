import Image from "next/image";
import man from "@/assets/random-image"

export default function CreatePosts(){
    return(
        <div className="rounded-2xl w-2/4 h-min p-5" style={{backgroundColor:'#1b2730'}}>
            <Image src={man} className="rounded-full h-5 w-5"/>
        </div>
    )
}
