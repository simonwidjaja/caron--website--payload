"use client"

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { DrawSVGPlugin } from 'gsap/all'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

type SVGPathAnimationProps = {
  className?: string
}

export const SVGPathAnimation: React.FC<SVGPathAnimationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !svgRef.current) return

    const paths = svgRef.current.querySelectorAll('path')
    
    // Set initial state for all paths using DrawSVG
    gsap.set(paths, {
      drawSVG: "0%"
    })

    // Create the staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.to(paths, {
      drawSVG: "100%",
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.1
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={className}>
      222
      <svg ref={svgRef} width="224" height="307" viewBox="0 0 224 307" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M98.4545 135.363C98.5155 144.664 97.4325 153.658 94.2005 162.348C93.4075 164.635 92.5535 166.771 91.4715 168.754C91.3955 168.906 90.3735 170.582 90.4195 170.582C91.1205 171.497 93.6975 171.496 94.6735 171.496C98.8355 171.801 102.997 170.429 106.9 169.057" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M123.504 127.743C131.463 123.321 141.022 123.321 148.6 128.505" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M55.5195 130.943C64.0425 126.369 73.0685 126.216 82.0175 129.418" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M94.0625 203.057C105.451 203.514 116.611 201.38 126.018 194.672" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M49.4961 188.728C62.7911 185.069 76.9401 183.391 90.6311 182.019C114.476 179.579 144.771 177.597 169.12 181.408" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M176.057 129.422C174.304 146.803 172.916 163.576 171.438 180.957" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M151.617 104.875C156.176 115.852 165.705 123.629 176.713 127.593" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M187.235 57.4561C172.126 35.3491 151.33 12.0211 124.435 4.39811C110.652 0.586106 94.0338 2.87206 90.3588 19.0331C89.7498 21.7781 89.6578 24.5231 89.9928 27.2671" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M89.8859 25.1308C71.0569 12.7808 44.2229 8.05578 23.4119 17.9658C12.1439 23.3028 1.41089 34.5838 2.78289 48.0008C4.07889 60.5028 16.7948 67.8227 28.6258 66.6027C34.4498 65.8407 41.4639 60.0468 35.4719 54.5578C24.1739 44.4948 12.1138 62.3348 12.1598 72.5498C12.3118 100.756 47.1349 107.464 69.2879 106.244C73.9229 105.939 78.4819 105.175 83.0709 104.413" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M91.4883 111.124C108.549 115.088 130.244 113.413 143.128 99.9961" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M188.805 58.9805C193.607 60.1995 198.09 62.1825 202.267 64.9265C205.393 66.9085 208.29 69.1955 210.775 71.9395C230.28 93.2845 218.474 126.979 206.43 148.934" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M186.397 151.832C186.397 151.832 182.144 193.148 181.031 204.125C180.848 205.803 180.131 207.328 178.957 208.548C160.798 228.063 138.767 241.328 113.001 248.799C111.278 249.256 109.433 249.257 107.756 248.647C88.3172 241.329 69.7312 230.198 52.1522 214.494C50.6582 213.122 49.7282 211.292 49.5602 209.31C48.1582 192.539 41.6172 114.02 41.6172 114.02" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M185.969 150.614C194.919 145.125 209.082 144.973 216.263 153.663C219.327 157.322 220.822 162.048 221.188 166.774C221.951 176.989 217.895 187.661 210.089 194.37C206.094 197.724 201.307 200.164 196.352 201.841C192.236 203.213 187.813 204.281 183.438 204.128" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M209.083 165.555C203.167 169.672 198.044 174.854 192.754 179.733" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M41.7976 144.359C39.1606 145.121 36.4766 146.036 34.1596 147.56C27.8166 151.677 26.0026 160.52 27.7866 167.381C30.5006 177.901 38.9016 186.439 47.5766 192.537" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M74.1367 231.57L75.6317 289.207C75.6317 289.207 128.537 322.437 174.231 289.207" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M178.866 210.531L178.012 279.444" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M186.176 36.8477C188.829 39.8967 190.628 43.2526 191.802 47.0646C192.229 48.4366 192.564 49.8076 192.747 51.1796C192.763 51.3326 192.839 52.5527 192.9 52.5527C193.129 52.5527 194.302 51.6356 194.562 51.4836C196.223 50.4166 197.992 49.6556 199.822 48.8926C205.448 46.9106 211.714 45.5376 217.751 45.3846" stroke="#02558D" strokeWidth="4.7248" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M70.5037 148.095C73.0537 148.095 75.1207 146.027 75.1207 143.477C75.1207 140.927 73.0537 138.859 70.5037 138.859C67.9537 138.859 65.8867 140.927 65.8867 143.477C65.8867 146.027 67.9537 148.095 70.5037 148.095Z" fill="#02558D"/>
        <path d="M134.527 148.096C137.077 148.096 139.144 146.027 139.144 143.478C139.144 140.928 137.077 138.859 134.527 138.859C131.977 138.859 129.91 140.928 129.91 143.478C129.91 146.027 131.977 148.096 134.527 148.096Z" fill="#02558D"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M166.962 223.375C166.962 223.375 138.161 260.117 111.694 262.099C89.1592 263.928 75.1172 246.09 75.1172 246.09V232.675C75.1172 232.675 106.647 250.511 111.694 249.139C116.725 247.614 166.962 223.375 166.962 223.375Z" fill="#02558D"/>
      </svg>
    </div>
  )
}
