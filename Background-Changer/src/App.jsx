import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-screen h-screen flex flex-col'
        style={{ backgroundColor: color }}
      >
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 w-auto bg-gray-50 text-black p-4 z-50 overflow-hidden rounded-xl outline-none border-[2px] border-black text-2xl font-bold">
          Background Changer
        </div>

        <div className="fixed bottom-8 right-12 left-12 w-auto bg-white text-black p-4 z-50 overflow-hidden rounded-xl outline-none border-[2px] border-black flex flex-wrap justify-around gap-2">
          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>

          <button className='w-16 h-8 rounded-lg text-white  border-[2px] border-black' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "indigo" }} onClick={() => setColor("indigo")}>Indigo</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "violet" }} onClick={() => setColor("violet")}>Violet</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>Brown</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>Grey</button>

          <button className='w-16 h-8 rounded-lg text-white border-[2px] border-black' style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Purple</button>

        </div>
      </div>
    </>
  )
}

 export default App

// import './App.css'
// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("black")

//   return (
//     <>
//       <div className='w-screen h-screen flex flex-col items-center justify-center' style={{ backgroundColor: color }}>
        
//         {/* 📍 Centered "Background Changer" at top */}
//         <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-50 text-black p-4 z-50 rounded-xl outline-none border-[2px] border-black text-2xl font-bold">
//           Background Changer
//         </div>

//         {/* 🎨 Buttons */}
//         <div className="fixed bottom-8 left-12 right-12 bg-white text-black p-4 z-50 rounded-xl outline-none border-[2px] border-black flex flex-wrap justify-around gap-2">
//           {["red", "green", "blue", "orange", "yellow", "pink", "indigo", "violet", "brown", "grey", "purple"].map((colorName) => (
//             <button
//               key={colorName}
//               className="w-16 h-8 rounded-lg text-white border-[2px] border-black"
//               style={{ backgroundColor: colorName }}
//               onClick={() => setColor(colorName)}
//             >
//               {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
//             </button>
//           ))}
//         </div>

//       </div>
//     </>
//   )
// }

// export default App