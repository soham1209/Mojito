import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all'
import { About, Cocktails, Hero, Navbar } from './components';
gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
    </main>
  )
}

export default App