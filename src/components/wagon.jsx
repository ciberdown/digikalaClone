import { BiPlus } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import {TbTruckDelivery} from "react-icons/tb";
import {MdEventAvailable} from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
import { useState } from "react";
export default function Wagon(){
    const imgFolderDir = 'start-files/wagon/';
    const [items, setitems] = useState(
        [{id:1, src:'nilper-chair.jpg',//shopping list
            name:"صندلی اداری نیلپر مدل", model:"OCM 850s", 
            cost:4700000, color:"مشکی", color_class:'bg-black',
            delivery_count_selected:1, seller_inventory:true, 
            digikala_inventory:true, selected: 2, delivery_delay:1,
            selected_selling:'فروشنده'},
        {id:2, src:'mouse-pad.jpg',
            name:"ماوس پد گیمینگ اوریکو", model:"MPA9040", 
            cost:599000, color:"سرمه ای", color_class:'bg-blue-900',
            delivery_count_selected:1, seller_inventory:true, 
            digikala_inventory:true, selected: 3, delivery_delay:2,
            selected_selling:'دیجی کالا'}
        ]
    );
    
    function handleIncrement(index){
        let newItems = [...items];
        newItems[index].selected+=1;
        setitems(newItems);
    }
    function handleDelete(index){
        setitems(items.filter((item, idx)=>index != idx && item));
    }
    function handleAvailble(){
        let text;
        if(items[0].seller_inventory){
            text = 'موجود در انبار فروشنده';
        }
        if(items[0].digikala_inventory){
            text = 'موجود در انبار دیجی کالا';
        }
        if(items[0].seller_inventory && items[0].digikala_inventory){
             text = "موجود در انبار فروشنده و دیجی کالا";
        }
        return text;
    }
    function decimal(cost){
        let num = cost;
        let empty_list = [];
        do{
            if(num%1000 === 0){
                empty_list.unshift('000');
            }else{
                empty_list.unshift(num%1000);
            }
            num = parseInt(num/1000);
        }while(parseInt(num/1000) != 0)
        empty_list.unshift(num%1000);
        console.log(empty_list);
        return empty_list.toString();
    }
    return(
    <div className=" flex flex-col justify-start overflow-y-scroll p-4 absolute md:hidden bg-white rounded-lg shadow-md border-[1px] border-slate-300
        shadow-slate-600 w-[22rem] h-[28rem] top-[7rem] left-[1.7rem] md:top-[9rem] md:left-[1rem]">
    
        <div className="flex justify-between w-full items-center mb-2">
            <p className="text-cyan-500 text-[18px] cursor-pointer yekan">مشاهده سبد خرید</p>
            <p className="rtl ">{items.length} کالا</p>
        </div>
        {items.map((item,index) =>{
        return(
        <div key={index} className="my-2">
            <div className="flex justify-between">
                <div className="rtl">
                    <div className="flex h-5">
                        <p className="rtl b-nazanin-bold text-[17px] yekan">{item.name}</p><p className="font-mono font-bold text-[13px] self-center">&nbsp;{item.model}</p>
                    </div>
                    <div className="flex items-center  overflow-hidden gap-2 my-1">
                        <div className={"w-4 h-4 rounded-full "+items[0].color_class}></div>
                        <p className="text-slate-500 text-[16px]">{item.color}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h1 className="text-cyan-500"><MdEventAvailable /></h1>
                        <p className="text-[15px] text-slate-500">{handleAvailble()}</p>
                    </div>
                    <div className="flex">
                        <div>
                            <div className="mx-2 ml-2">
                                <hr className="h-3 w-[1px] bg-slate-300 mr-[1px]" />
                                <p className="w-1 h-1 mr-0 bg-slate-400 rounded-full"></p>
                                <hr className="h-6 w-[1px] bg-slate-300 mr-[1px]" />
                                <p className="w-1 h-1 mr-0 bg-cyan-500 rounded-full"></p>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="flex items-center gap-2">
                                <h1 className=""><TbTruckDelivery /></h1>
                                <p className="rtl text-[14px] text-slate-500">{"ارسال دیجی کالا از " + item.delivery_delay + " روز کاری دیگر "}</p>
                            </div>
                            <div className="flex items-center gap-2 my-2">
                                <h1 className=""><FaUserPlus /></h1>
                                <p className="rtl text-[14px] text-slate-500">{"ارسال " + item.selected_selling}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/3 p-1 flex justify-center items-center">
                    <img src={imgFolderDir+item.src} alt="" />

                </div>
            </div>
                <div className="flex justify-end items-center">
                <p className="text-[20px] rtl mr-4">{ decimal(item.cost)  + ' تومان ' }</p>
                <div className="border-[1px] w-[5.5rem] border-slate-200 rounded-md flex justify-between items-center p-1 my-2 mx-1">
                    <h1 onClick={()=>{handleIncrement(index)}} className="text-red-600 scale-110 cursor-pointer"><BiPlus/></h1>
                    <p className="text-red-600 b-nazanin-bold">{item.selected}</p>
                    <h1 onClick={()=>{handleDelete(index)}} className="text-red-500 scale-110 cursor-pointer"><BiTrash/></h1>
                </div>
            </div>
            <hr className="m-1 h-[1px] bg-slate-200 shadow-sm"/>
        </div>
        )
        })}
    </div>
    )
}