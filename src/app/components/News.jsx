import Link from "next/link";
import Image from "next/image";


export default async function News() {
    const response = await fetch('http://localhost:8888/public/news');
    const data = await response.json();
    return <>


       <div className={'flex flex-wrap w-[676px] m-auto ml-[420px] mt-[50px] gap-4'}>
           <br/>
           <br/>
           {data.data.map(item => <div key={item.id} className={'w-[302px] h-[257px] bg-[#1A1D1F] '}>
               <Image src={item.image} alt={item.title} width={320} height={160} className="w-80 h-40"/>
               <h1>{item.title}</h1>

               <p>{item.date}</p>
           </div>)}

       </div>
    </>
}