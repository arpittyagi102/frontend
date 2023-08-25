export default function Navbar(){
    return (
        <div className="mx-10 my-3 flex items-center">
            <img width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/>
            <div className=" w-60 rounded-2xl p-2 flex mx-5 align-middle h-min" style={{backgroundColor:'#1b2730'}}>
                <img src="https://img.icons8.com/fluency-systems-filled/16/ffffff/hashtag-large.png" className=" opacity-40 h-5" alt="hashtag-large"/>
                <input placeholder="Explore" className=" bg-transparent h-5 mx-3"/>
            </div>
            <div className="ml-auto flex">
            <div className=" w-60 rounded-full p-1 flex mx-5 h-min text-bold text-white items-center" style={{backgroundColor:'#1b2730'}}>
                <img src="https://img.icons8.com/windows/64/ffffff/user-male-circle.png" alt="user-male-circle" className=" opacity-40 h-8"/>
                <div className="align-middle mx-3">User Sharma</div>
                <img src="https://img.icons8.com/ios-filled/16/ffffff/sort-down.png" alt="sort-down" className="ml-auto mr-4"/>
            </div>
            <img height='30' width='30' src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-menu--v2.png" alt="circled-menu--v2" className="h-8"/>
            </div>
        </div>
    )
}