import { RiCloseLine } from "react-icons/ri";

export default function Notif(){
    return(
        <div className="fixed w-full rounded-lg h-[3.5rem] text-white bottom-0 bg-gray-800 flex justify-between items-center" id='notif'>
            <div onClick={()=>document.getElementById('notif').classList.add('hidden')} className="ml-5 text-white rounded-full scale-[1.6] cursor-pointer hover:text-red-400"> <RiCloseLine /> </div>
            <p className="mx-10 cursor-pointer">دانلود اپلیکیشن دیجی کالا</p>
        </div>
    )
}