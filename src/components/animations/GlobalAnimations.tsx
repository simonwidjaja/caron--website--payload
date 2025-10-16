"use client"

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * This component queries the DOM for all elements with the class 'yum--fade-in'
 * and applies a GSAP fade-in-up animation when they scroll into view.
 * It should be placed once in your main layout file.
 */
const GlobalAnimations = () => {
  useEffect(() => {
    // Use GSAP's utility function to select all elements with the class
    const fadeInElements = gsap.utils.toArray('.yum--fade-in')

    // Loop through each element and create a ScrollTrigger animation
    fadeInElements.forEach((element) => {
      gsap.fromTo(
        element as gsap.TweenTarget,
        {
          autoAlpha: 0, // Fades in and handles visibility
          y: 80, // Starts 50px down
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element as Element,
            start: 'top 85%', // Animation starts when the top of the element is 85% from the top of the viewport
            // toggleActions: 'play none none none', // Plays the animation once
            toggleActions: "play none none reverse",
            markers: true, // Uncomment to see the start/end markers for debugging
            // once: true, // Ensures the trigger only runs once
          },
        },
      )
    })

    // It's a good practice to refresh ScrollTrigger after dynamically creating triggers
    ScrollTrigger.refresh()

    // No cleanup function is needed because `once: true` handles it automatically.
  }, []) // Empty dependency array ensures this effect runs only once after the initial render

  return null // This component does not render any visible JSX
}

export default GlobalAnimations