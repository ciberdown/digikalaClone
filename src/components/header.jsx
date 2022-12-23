import { AiOutlineMenu } from "react-icons/ai";
import Wagon from "./wagon";
export default function Footer(){
    let imgFolderDir = 'start-files/header/img/'
    function mouseEnterWagonHandle(){
        document.getElementById('wagonSet').classList.remove('hidden');
    }

    return(
        <div onMouseEnter={()=>document.getElementById('wagonSet').classList.add('hidden')} className="fixed top-0 bg-white md:h-[9.5rem] z-20 w-full ">
            <img className='bg-black w-full h-[3.8rem] object-cover	md:h-[2rem] md:scale-125 cursor-pointer' onMouseEnter={()=>document.getElementById('wagonSet').classList.add('hidden')} 
            src={imgFolderDir+'header.jpg'} alt="" />
            <div className="flex lg:hidden xl:hidden justify-between items-center  m-3 mx-4">
                <img className="w-[1.5rem] cursor-pointer" src={imgFolderDir+'q-icon.png'} alt="" />
                <img className="mr-6 scale-[0.8] mt-1 cursor-pointer" src={imgFolderDir+'logo.svg'} alt="" />
                <h1 className="scale-125 cursor-pointer"><AiOutlineMenu /></h1>
            </div>
            <hr className="mx-4 lg:hidden"/>
            <div className="flex justify-between items-center w-full m-2 ">
                <div className="flex justify-start items-center w-8 md:justify-start">
                    <img onMouseEnter={()=>mouseEnterWagonHandle()} 
                     className=" scale-75 cursor-pointer mx-4 md:mx-1" src={imgFolderDir+'shopping-icon.png'} alt="" />
                    <img className="rotate-180 md:hidden absolute scale-[0.08] left-8" src={imgFolderDir+'triangle-icon.png'} alt="" />
                    <img className="cursor-pointer lg:ml-2 pl-4 xl:border-l-[1px] lg:border-l-[1px] border-l-slate-300 scale-[1.3]" src={imgFolderDir+'user.png'} alt="" />
                    <div id="shopping-list-items-count" className="b-nazanin-bold absolute rounded-[6px] text-[0.85rem] box-border border-white border-solid border-[2px] lg:ml-8 ml-5 mt-4 text-white flex justify-center bg-red-500 w-5 h-5">1</div>
                </div>
                <div id="wagonSet"
                onClick={()=>mouseEnterWagonHandle()}
                 className="hidden"><Wagon /></div>
                <div className="flex items-center md:flex-auto md:pl-[5rem] lg:mt-1  xl:mt-1 ">
                    <img className="cursor-pointer w-[1.2rem] h-[1.2rem] absolute right-[10rem] md:right-[1.5rem]" src={imgFolderDir+'search-icon.png'} alt="" />
                    <input onMouseEnter={()=>document.getElementById('wagonSet').classList.add('hidden')}  className="direction: rtl font-light bg-slate-100 text-right p-2 mr-2 rounded-md lg:w-[40rem] xl:w-[40rem] md:mr-5 md:w-full pr-12" type="text" placeholder="جستجو"/>
                    <img className="mr-6 md:hidden cursor-pointer lg:ml-2 xl:ml-2" src={imgFolderDir+'logo.svg'} alt="" />
                </div>
            </div>
            <hr className="mx-4 lg:hidden"/>

        </div>
    )
}