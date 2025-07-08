export default function Navbar(){
    return(
        <div className="w-[100%] h-20 shadow-xl flex justify-evenly items-center">
            <h1 className="font-mono text-2xl">The <span className="text-blue-700">Ro</span><span className="text-yellow-400">man</span><span className="text-red-600">ian</span> Sketch</h1>
            <div className="flex w-[300px] justify-evenly">
                <div className="h-7 flex justify-center items-center text-center text-[1.4em] font-mono border-blue-300 hover:border-b-blue-300 hover:border-b-4 cursor-pointer transition-all duration-200 ease-in-out hover:transform hover:translate-y-[2px]">Home</div>
                <div className="h-7 flex justify-center items-center text-center text-[1.4em] font-mono border-blue-300 hover:border-b-blue-300 hover:border-b-4 cursor-pointer transition-all duration-200 ease-in-out hover:transform hover:translate-y-[2px]">New</div>
                <div className="h-7 flex justify-center items-center text-center text-[1.4em] font-mono border-blue-300 hover:border-b-blue-300 hover:border-b-4 cursor-pointer transition-all duration-200 ease-in-out hover:transform hover:translate-y-[2px]">About</div>
            </div>
        </div>
    );
}