import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all'
import { Hero, Navbar } from './components';
gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='w-full h-screen bg-black'></div>
    </main>
  )
}

export default App