"use client"

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * This component queries the DOM for all elements with the classes 'yum--fade-in'
 * and 'yum--typewriter' and applies GSAP animations when they scroll into view.
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
            // markers: true, // Uncomment to see the start/end markers for debugging
            // once: true, // Ensures the trigger only runs once
          },
        },
      )
    })

    // Typewriter animation
    const typewriterElements = gsap.utils.toArray('.yum--typewriter')

    typewriterElements.forEach((element) => {
      const el = element as HTMLElement
      if (!/^(H[1-5])$/i.test(el.tagName)) return

      // Function to split text nodes into spans while preserving HTML structure
      const splitTextIntoSpans = (elem: HTMLElement) => {
        const walker = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, null)
        const textNodes: Text[] = []
        let node: Node | null
        while ((node = walker.nextNode())) {
          textNodes.push(node as Text)
        }
        textNodes.forEach((textNode) => {
          const text = textNode.textContent || ''
          const chars = text.split('')
          const fragment = document.createDocumentFragment()
          chars.forEach((char) => {
            if (char === ' ') {
              fragment.appendChild(document.createTextNode(' '))
            } else {
              const span = document.createElement('span')
              span.textContent = char
              fragment.appendChild(span)
            }
          })
          textNode.parentNode?.replaceChild(fragment, textNode)
        })
      }

      splitTextIntoSpans(el)
      const spans = el.querySelectorAll('span')
      gsap.set(spans, { opacity: 0 })
      gsap.to(spans, {
        opacity: 1,
        duration: 0.05,
        delay: 1,
        stagger: 0.07,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          // markers: true,
        }
      })
    })
    ScrollTrigger.refresh()

    // No cleanup function is needed because `once: true` handles it automatically.
  }, []) // Empty dependency array ensures this effect runs only once after the initial render

  return null // This component does not render any visible JSX
}

export default GlobalAnimations