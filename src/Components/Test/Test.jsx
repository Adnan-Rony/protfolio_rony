import { Meteors } from "../magicui/meteors"


export const Test = () => {
  return (
<div>
<div className="
relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
  
  <span className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    Meteors
  </span>
</div>
<div className="backdrop-blur-sm bg-black/10
w-40 border-1 flex justify-center my-10 p-4 rounded-3xl">
  <img src="https://i.ibb.co.com/Tx5kFqqf/icons8-react-js-96.png"
   alt="" />
</div>


<div className="relative h-screen bg-black overflow-hidden">
  <div className="z-20 absolute -top-20 -left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
  <div className="relative z-10">
    {/* your content here */}

  </div>
</div>

{/* ............ */}
<div className="relative h-screen bg-black overflow-hidden">
  {/* Purple Glow */}
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
  
  {/* Blue Glow */}
  <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-2xl opacity-25 animate-spin-slow"></div>

  {/* Your content here */}
  <div className="relative z-10 text-white text-center pt-20">
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
  </div>
</div>




</div>
  )
}
