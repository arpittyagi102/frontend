export default function Features(){
    return(
        <div className="rounded-2xl w-1/4 h-min p-5" style={{backgroundColor:'#1b2730'}}>
            <div className="text-blue-500 font-bold">Features Required</div>
                <ul className="list-disc">
                    <li className="ml-5 text-gray-500">Login/logout with JWT</li>
                    <li className="ml-5 text-gray-500">Registration</li>
                    <li className="ml-5 text-gray-500">Tweet create, edit, delete</li>
                    <li className="ml-5 text-gray-500">Fully responsive</li>
                </ul>
        </div>
    )
}