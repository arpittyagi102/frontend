import man from '../assets/random-image.png';
import Image from 'next/image';

export default function Usercard(){
    return(
        <div className="w-1/4 rounded-2xl overflow-hidden" style={{backgroundColor:'#1b2730'}}>
            <div className=" h-28 relative" style={{backgroundColor:'#1c628f'}}>
                <Image src={man} alt="user-male-circle" className="h-28 absolute w-28 rounded-full bottom-0 left-1/2" style={{transform:'translate(-50%, 50%)',border:'solid 8px gray'}}/>
                

            </div>
            <div className='text-white mt-16 ml-text text-center text-xl font-bold'>User Sharma</div>
            <div className='text-gray-500 text-center mb-5'>@testing</div>
                <hr className='text-gray-500 border-gray-500'/>
            <div className='flex p-4 justify-around'>
                <div className='text-center'>
                    <div className=' text-white font-bold'>3</div> 
                    <div className='text-gray-400 font-bold'>following</div>
                </div>
                <div className='text-center'>
                    <div className='text-white font-bold'>0</div> 
                    <div className='text-gray-400 font-bold'>followers</div>
                </div>
            </div>
                <hr className='text-gray-500 border-gray-500'/>
            <div className='flex text-blue-500 font-bold m-5 justify-center'>
                find new people
            </div>
        </div>
    )
}