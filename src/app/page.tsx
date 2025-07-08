import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home(){
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Navbar/>
        <div>
          <div className="relative w-[100%] h-240">
            <Image src="/home.png" fill alt="Home"></Image>
          </div>
          <h1 className="text-center font-mono text-[2.7em] mt-[100px] mb-[50px] select-none">Products</h1>
          <div className="flex justify-evenly flex-wrap gap-y-[100px] select-none">

            <div className="flex gap-x-[40px] w-[800px] h-auto bg-gray-200 rounded-br-[15px] rounded-tr-[15px] transition-all duration-150 ease-in-out hover:transform hover:translate-y-[-10px]">
              <div className="relative min-w-[350px] h-[350px]">
                <Image src="/picture.png" alt="Picture" fill></Image>
              </div>
              <div className="p-[30px]">
                <h2 className="text-[2em] mb-[20px] font-mono">Picture name</h2>
                <p className="text-[1.3em] mb-[10px] font-mono"> Perspiciatis dolor optio quasi</p>
                <p className="text-[1.1em] mb-[10px] font-mono">24 x 30 inches</p>
                <p className="text-[1.5em] mb-[10px] font-mono">Sold</p>
                <Link href="" className="w-[180px] h-[60px] bg-gray-300 flex justify-center items-center rounded-[10px] text-[1.6em] font-mono hover:opacity-[.7]">Buy now</Link>
              </div>
            </div>

            <div className="flex gap-x-[40px] w-[800px] h-auto bg-gray-200 rounded-br-[15px] rounded-tr-[15px] transition-all duration-150 ease-in-out hover:transform hover:translate-y-[-10px]">
              <div className="relative min-w-[350px] h-[350px]">
                <Image src="/picture.png" alt="Picture" fill></Image>
              </div>
              <div className="p-[30px]">
                <h2 className="text-[2em] mb-[20px] font-mono">Picture name</h2>
                <p className="text-[1.3em] mb-[10px] font-mono"> Perspiciatis dolor optio quasi</p>
                <p className="text-[1.1em] mb-[10px] font-mono">24 x 30 inches</p>
                <p className="text-[1.5em] mb-[10px] font-mono">Sold</p>
                <Link href="" className="w-[180px] h-[60px] bg-gray-300 flex justify-center items-center rounded-[10px] text-[1.6em] font-mono hover:opacity-[.7]">Buy now</Link>
              </div>
            </div>

            <div className="flex gap-x-[40px] w-[800px] h-auto bg-gray-200 rounded-br-[15px] rounded-tr-[15px] transition-all duration-150 ease-in-out hover:transform hover:translate-y-[-10px]">
              <div className="relative min-w-[350px] h-[350px]">
                <Image src="/picture.png" alt="Picture" fill></Image>
              </div>
              <div className="p-[30px]">
                <h2 className="text-[2em] mb-[20px] font-mono">Picture name</h2>
                <p className="text-[1.3em] mb-[10px] font-mono"> Perspiciatis dolor optio quasi</p>
                <p className="text-[1.1em] mb-[10px] font-mono">24 x 30 inches</p>
                <p className="text-[1.5em] mb-[10px] font-mono">Sold</p>
                <Link href="" className="w-[180px] h-[60px] bg-gray-300 flex justify-center items-center rounded-[10px] text-[1.6em] font-mono hover:opacity-[.7]">Buy now</Link>
              </div>
            </div>

            <div className="flex gap-x-[40px] w-[800px] h-auto bg-gray-200 rounded-br-[15px] rounded-tr-[15px] transition-all duration-150 ease-in-out hover:transform hover:translate-y-[-10px]">
              <div className="relative min-w-[350px] h-[350px]">
                <Image src="/picture.png" alt="Picture" fill></Image>
              </div>
              <div className="p-[30px]">
                <h2 className="text-[2em] mb-[20px] font-mono">Picture name</h2>
                <p className="text-[1.3em] mb-[10px] font-mono"> Perspiciatis dolor optio quasi</p>
                <p className="text-[1.1em] mb-[10px] font-mono">24 x 30 inches</p>
                <p className="text-[1.5em] mb-[10px] font-mono">Sold</p>
                <Link href="" className="w-[180px] h-[60px] bg-gray-300 flex justify-center items-center rounded-[10px] text-[1.6em] font-mono hover:opacity-[.7]">Buy now</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}