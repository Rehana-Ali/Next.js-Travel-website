// import Image from "next/image";
import Link from "next/link";

export default function Home(){
  return(
    <main>

<header className="flex justify-around bg-sky-950 text-white ">
            
            <div className="ml-28 pt-5 ">
                <h2 className="text-6xl font-bold " >Travelo</h2> 
            </div>


            
             
                <nav className="">
                    <ul className="flex  gap-x-20 py-8 pr-28 font-semibold text-2xl">
                         
                         <Link href="/">Home</Link>  
                        
                            <Link href="/about">About</Link>
                            
                        
                            <Link href="/contact">Contact</Link>
                            
                    </ul>
                </nav>
             

        </header>

        <section className="flex gap-6 items-center bg-lime-200  ">
        {/* Left side */}
        <div className=" ml-20">
          <h1 className="font-bold text-5xl ml-24">Discove The World</h1>
          <p className=" text-gray-600 mt-3 ml-28 text-2-xl font-semibold text-2xl">Exploe your travel destination like never before, let's enjoy <br/>the wonders of nature with us and make tour amazing. </p>
             <button className="bg-blue-950 text-white py-2 px-4 mt-4 rounded-md ml-32 font-bold">Read more</button>
        </div>
        {/* Righside */} 
         <div className="flex-1 mt-24 ml-44 mb-72" >
         <img src="/best-places-to-visit-pakistan.jpg" width={700} height={700} alt="travel" />
        </div>

        
      </section>
      
      

      
    </main>
  )
}
    
  Home