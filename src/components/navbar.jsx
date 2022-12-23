import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiPercent } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiChevronLeft } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
export default function Navbar(){

    function hoverHandle(id, onMouseOverOrLeave){
        let classlist = document.getElementById(id).classList;
        if(onMouseOverOrLeave == 'over'){
            classlist.remove('hidden');
        }else if(onMouseOverOrLeave = 'leave'){
            classlist.add('hidden');
        }
    }
    return(
        <>
        <div className=" sticky flex justify-between items-center mt-32 ">
            <div className="w-full h-[2rem] flex items-center justify-between mx-0">
                <div className="md:flex md:justify-between md:w-full w-[11rem] md:mt-3 mt-[-1rem]">
                    <h1 className="cursor-pointer md:mt-9 ml-4 scale-150"><BiChevronLeft /></h1>
                    <div className="flex md:mt-8 md:justify-end md:w-full md:mr-3">
                        <p className=" md:w-full rtl text-[17px] text-gray-500  cursor-pointer w-[10rem]">ارسال به آذربایجان غربی</p>
                        <h1 className="mx-1 md:block cursor-pointer md:text-yellow-600 mt-[0.2rem]"><HiOutlineLocationMarker/></h1>
                    </div>
                </div>
                <div className="flex md:hidden items-center justify-end">
                    <p onMouseOver={()=>{hoverHandle("sellInUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("sellInUnderline", 'leave')}} className="rtl mr-6 tracking-tighter font-thin text-[18px] text-gray-500 pl-2 cursor-pointer">در دیجی کالا بفروشید!</p>
                    <p onMouseOver={()=>{hoverHandle("haveQueUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("haveQueUnderline", 'leave')}} className="mr-3 tracking-tighter font-thin text-[18px] text-gray-500 pl-2 cursor-pointer">سوالی دارید؟</p>
                    <p onMouseOver={()=>{hoverHandle("amazingUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("amazingUnderline", 'leave')}} className="mr-1 tracking-tighter font-thin text-[18px] text-gray-500 pl-2 cursor-pointer  border-l-[1px] border-zinc-200">شگفت انگیزها</p>
                    <h1 className="ml-0"><CiPercent /></h1>
                    <p  onMouseOver={()=>{hoverHandle("discountUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("discountUnderline", 'leave')}} className="mr-1 ml-2 tracking-tighter font-thin text-[18px] text-gray-500 pl-4 cursor-pointer">تخفیف ها و پیشنهادها</p>
                    <h1 className="ml-0"><CiBadgeDollar /></h1>
                    <p onMouseOver={()=>{hoverHandle("mostSellUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("mostSellUnderline", 'leave')}} className="ml-3 mr-1 tracking-tighter font-thin text-[18px] text-gray-500 pl-4 cursor-pointer">پرفروش ترین ها</p>
                    <h1><AiOutlineFire /></h1>
                    <p onMouseOver={()=>{hoverHandle("superMarUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("superMarUnderline", 'leave')}} className="mr-1 tracking-tighter font-thin text-[18px] text-gray-500 ml-4 cursor-pointer">سوپرمارکت</p>
                    <h1 className="mr-3"><RiShoppingBasketLine /></h1>
                    <p onMouseOver={()=>{hoverHandle("divisionUnderline", 'over')}} onMouseLeave={()=>{hoverHandle("divisionUnderline", 'leave')}} className="mr-3 font-semibold text-gray-600 pl-4 cursor-pointer  border-l-[1px] border-zinc-200  b-nazanin-bold">دسته بندی کالاها</p>
                    <h1 className="w-[2rem] scale-125 cursor-pointer self-center"><AiOutlineMenu /></h1>
                </div>

                <hr id="divisionUnderline" className="bg-red-500 hidden rounded-full absolute w-[7rem] h-[2px] hover:transition hover:duration-150 z-30 right-[2rem] mt-10" />
                <hr id="superMarUnderline" className="bg-red-500 rounded-full hidden absolute w-[5rem] h-[2px] hover:transition hover:duration-150 z-30 right-[10.5rem] mt-10" />
                <hr id="mostSellUnderline" className="bg-red-500 hidden rounded-full absolute w-[6.5rem] h-[2px] hover:transition hover:duration-150 z-30 right-[16rem] mt-10" />
                <hr id="discountUnderline" className="bg-red-500 hidden rounded-full absolute w-[8rem] h-[2px] hover:transition hover:duration-150 z-30 right-[24rem] mt-10" />
                <hr id="amazingUnderline" className="bg-red-500 hidden rounded-full absolute w-[6rem] h-[2px] hover:transition hover:duration-150 z-30 right-[33rem] mt-10" />
                <hr id="haveQueUnderline" className="bg-red-500 hidden rounded-full absolute w-[3.5rem] h-[2px] hover:transition hover:duration-150 z-30 right-[40rem] mt-10" />
                <hr id="sellInUnderline" className="bg-red-500 hidden rounded-full absolute w-[7rem] h-[2px] hover:transition hover:duration-150 z-30 right-[45.5rem] mt-10" />
            </div>
        </div>
        </>
    )
}