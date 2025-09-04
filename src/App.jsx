import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all'
import { About, Art, Cocktails, Contact, Hero, Menu, Navbar } from './components';
gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App