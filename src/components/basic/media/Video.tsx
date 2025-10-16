"use client"

import { useEffect, useRef, useState } from "react";

interface VideoSource {
  src: string;
  lang?: string;
}

interface VideoProps {
  source: string | VideoSource[];
  poster?: string;
  metaTitle?: string;
  title?: string;
  icon?: React.ReactNode;
}

export default function Video({ source, poster, metaTitle, title, icon }: VideoProps) {

  const [state, setState] = useState(0);
  const [activeSource, setActiveSource] = useState<VideoSource | undefined>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let newSource;
    if (typeof(source) === "string") {
      newSource = {src: source};
    } else if (Array.isArray(source)) {
      newSource = source[0];
    }
    console.log(newSource);
    setActiveSource(newSource);
  }, [source]);

  const onPosterClick = () => {
    setState(1);
    if (videoRef.current) videoRef.current.play();
  };

  return <div className="relative w-full aspect-video overflow-hidden rounded-2xl">

    {/* Video */}
    {
      activeSource &&
      <video className="h-full w-full object-cover" controls ref={videoRef}>
        <source src={activeSource.src} type="video/mp4" />
        {/* <source src="/assets/media/Roche_Testimonial_Digital_Experiences.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    }

    {/* Language Selector (optional) */}
    { Array.isArray(source) &&
      <div className="absolute top-3 right-3 flex items-center justify-center">
        {source.filter(langSource => langSource.lang !== activeSource?.lang).map((langSource, index) => (
          <button
            key={index}
            className={`px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-white hover:bg-black hover:text-white`}
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.src = langSource.src;
                videoRef.current.play();
              }
              setActiveSource(langSource);
            }}
          >
            {langSource.lang}
          </button>
        ))}
      </div>
    }

    {/* Poster Overlay with Play Button */}
    {
      state === 0 &&
      <div className="absolute inset-0">
        <div className="group absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={onPosterClick}
        >
          {/* Poster */}
          { poster && poster.includes('.mp4') 
            ? 
              <video 
                className="w-full h-full object-cover "
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={poster} type="video/mp4" />
              </video>
            : poster && <img src={poster} alt="Video Poster" className="w-full h-auto" />
          }

          {/* Abdecker */}
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 duration-300"></div>

          {/* Play Button */}
          <div className="group absolute inset-0 flex items-center justify-center ease-back-out">
            <svg className="group-hover:scale-120 transition-transform duration-500 ease-back-out" width="80" height="80" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M125 0C149.723 0 173.89 7.33112 194.446 21.0663C215.002 34.8015 231.024 54.3238 240.485 77.1646C249.946 100.005 252.421 125.139 247.598 149.386C242.775 173.634 230.87 195.907 213.388 213.388C195.907 230.87 173.634 242.775 149.386 247.598C125.139 252.421 100.005 249.946 77.1646 240.485C54.3238 231.024 34.8015 215.002 21.0663 194.446C7.33112 173.89 0 149.723 0 125C0 91.8479 13.1696 60.0537 36.6116 36.6116C60.0537 13.1696 91.8479 0 125 0Z" fill="white"/>
              <path d="M100 180L170 125L100 70V180Z" fill="black"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="group absolute left-9 bottom-6 select-none pointer-events-none max-lg:hidden">
          { icon && <div className="mb-2">{icon}</div> }
          <div className="text-white text-sm uppercase">{metaTitle}</div>
          <div className="text-white text-3xl font-semibold">{title}</div>
        </div>        
      </div>
    }
  </div>;
}