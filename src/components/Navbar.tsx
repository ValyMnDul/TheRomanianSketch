import Link from "next/link"

export default function Navbar(){
    return(
        <div className="w-[100%] h-20 shadow-xl flex justify-evenly items-center select-none">
            <h1 className="font-mono text-2xl">The <span className="text-blue-700">Ro</span><span className="text-yellow-400">man</span><span className="text-red-600">ian</span> Sketch</h1>
            <div className="flex w-[300px] justify-evenly">
                <Link href="/" className="h-7 flex justify-center items-center text-center text-[1.2em] font-mono border-blue-300 hover:border-b-blue-300 hover:border-b-4 cursor-pointer transition-all duration-200 ease-in-out hover:transform hover:translate-y-[2px]">HOME</Link>
                <Link href="/new" className="h-7 flex justify-center items-center text-center text-[1.2em] font-mono border-blue-300 hover:border-b-blue-300 hover:border-b-4 cursor-pointer transition-all duration-200 ease-in-out hover:transform hover:translate-y-[2px]">NEW</Link>
                <Link href="/about" className="h-7 flex justify-center items-center text-center text-[1.2em] font-mono border-blue-300 hover:border-b-blue-300 hover:border-b-4 cursor-pointer transition-all duration-200 ease-in-out hover:transform hover:translate-y-[2px]">ABOUT</Link>
            </div>
        </div>
    );
}