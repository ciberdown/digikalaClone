import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function HeadSidebar(){
    let imgFolderDir = 'start-files/header/img/';
    let entered = false;
    return(
        <>
        <div onMouseEnter={()=>{
            if(entered == false){
                document.getElementById('headPics').classList.remove('hidden');
                entered = true;
            }
            document.getElementById('wagonSet').classList.add('hidden');
        }} onMouseOut={()=>{
            if(entered == true){
                document.getElementById('headPics').classList.add('hidden');
                entered = false;
            }
        }} className="w-full flex md:mt-4  md:h-[16rem] lg:h-[18rem] xl:h-[24rem]">
            <img className="w-full m-0 mt-2 object-cover  p-0 cursor-pointer" src={imgFolderDir+'0h.jpg'} alt="" />
            <img className="w-full hidden m-0 mt-2 object-cover  p-0 cursor-pointer" src={imgFolderDir+'1h.jpg'} alt="" />
            <img className="w-full hidden m-0 mt-2 object-cover  p-0  cursor-pointer" src={imgFolderDir+'2h.gif'} alt="" />
            <img className="w-full hidden m-0 mt-2 object-cover  p-0 cursor-pointer" src={imgFolderDir+'3h.gif'} alt="" />
            <img className="w-full hidden m-0 mt-2 object-cover  p-0 cursor-pointer" src={imgFolderDir+'4h.jpg'} alt="" />

            
        </div>
        <div className="xl:top-[32rem] flex absolute top-[27rem] right-[2rem] md:left-8 md:top-[24rem]">
            <p className="rounded-full w-[0.3rem] h-[0.3rem] bg-slate-500 m-1"></p>
            <p className="rounded-full w-[0.3rem] h-[0.3rem] bg-slate-500 m-1"></p>
            <p className="rounded-full w-[0.3rem] h-[0.3rem] bg-slate-500 m-1"></p>
            <p className="rounded-full w-[0.3rem] h-[0.3rem] bg-slate-500 m-1"></p>
            <p className="rounded-full w-[0.3rem] h-[0.3rem] bg-slate-500 m-1"></p>
        </div>
        <div onMouseEnter={()=>{
            document.getElementById('headPics').classList.remove('hidden');
        }} id="headPics" className="absolute right-10 md:top-[23rem] z-10 lg:top-[24rem] lg:right-[9rem] xl:top-[29rem] hidden">
            <h1 className="bg-white w-[2rem] h-[2rem] inline-block text-black border-black rounded-full border-[1px] cursor-pointer  pl-[0.4rem] pt-[0.4rem] mr-1 shadow-md shadow-slate-400"><AiOutlineArrowLeft /></h1>
            <h1 className="bg-white w-[2rem] h-[2rem] inline-block text-black border-black rounded-full border-[1px] cursor-pointer  pl-[0.4rem] pt-[0.4rem]  shadow-md shadow-slate-400"><AiOutlineArrowRight /></h1>
        </div>

        </>
    )
}