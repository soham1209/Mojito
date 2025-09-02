import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <div className=' flex-center h-[100vh]'> 
      <p className='text-yellow-500 text-2xl'>We are ready</p>
    </div>
  )
}

export default App