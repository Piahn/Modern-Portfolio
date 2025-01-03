import React from 'react'
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// components
import Header from './components/header'
import Hero from './components/pages/Hero'
import About from './components/pages/About'
import Skill from './components/pages/Skill'
import Work from './components/pages/Work'
import Review from './components/pages/Review'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'

// Plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'buttom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Review />
          <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App