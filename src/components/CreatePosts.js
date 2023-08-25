import Posts from './Posts';

export default function CreatePosts(){
    return(
        <>
        <div className="rounded-2xl w-2/4 h-min p-5" style={{backgroundColor:'#1b2730'}}>
            <div className="flex items-center justify-around">
                <div className=" border-blue-500 rounded-lg w-10/12 border" style={{backgroundColor:'#28343e'}}>
                    <input className="bg-transparent m-3" placeholder="Create new posts"/>
                </div>
                <div className="text-gray-300 font-bold">Posts</div>
            </div>
            <div className="flex mt-4 justify-evenly">
                <Typeof icon="https://img.icons8.com/fluency-systems-filled/45b825/24/image.png" color="#45b825" text="photos"/>
                <Typeof icon="https://img.icons8.com/ios-filled/24/2545b8/circled-play.png" color="#2545b8" text="video"/>
                <Typeof icon="https://img.icons8.com/external-kmg-design-glyph-kmg-design/24/b8253e/external-upload-user-interface-kmg-design-glyph-kmg-design.png" color="#b8253e" text="attachment"/>
                <Typeof icon="https://img.icons8.com/external-goofy-solid-kerismaker/24/b8b125/external-Desk-Calender-stationery-goofy-solid-kerismaker.png" color="#b8b125" text="shedule"/>
            </div>
        </div>
        <Posts/>
        </>
    )
}

function Typeof({icon, color, text}){
    return(
        <div className="px-6 py-3 rounded-full border flex items-center border-gray-600">
            <img src={icon} alt="not found"/> 
            <div className="text-white ml-2">{text}</div>
        </div>
    )
}