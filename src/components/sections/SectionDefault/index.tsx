import { cn } from "@/utilities/ui";

interface SectionDefaultProps {
  id?: string;
  className?: string;
  padding?: boolean;
  pt?: {
    content?: {
      className?: string;
    };
  };
  children: React.ReactNode;
}

export default function SectionDefault ({ id, className, padding=true, pt, children }: SectionDefaultProps) {
  return (

    // For full width remove container class
    <section id={id} className={`SectionDefault container border-y border-[hsl(var(--grid-color))] flex flex-1 justify-stretch overflow-clip ${className}`}>
      {/* Stripes left */}
      <div className={`
        w-10 flex-none
        max-md:hidden 
        text-gray-950/5 
        border-x border-[hsl(var(--grid-color))]
        bg-size-[10px_10px] bg-fixed 
        bg-[repeating-linear-gradient(315deg,transparent,transparent_6px,hsl(var(--grid-color))_6px,hsl(var(--grid-color))_7px)]
      `}></div>

      {/* Content */}
      <div className={cn(
        `SectionDefault-mainColumn flex-auto min-h-[40px] ${pt?.content?.className}`,
        padding ? 'px-3 py-2 md:px-6 md:py-4' : '',
      )}>
        {children}
      </div>

      {/* Stripes right */} 
      <div className={`
        w-10 flex-none
        max-md:hidden 
        text-gray-950/5 
        border-x border-[hsl(var(--grid-color))] 
        bg-size-[10px_10px] bg-fixed 
        bg-[repeating-linear-gradient(315deg,transparent,transparent_6px,hsl(var(--grid-color))_6px,hsl(var(--grid-color))_7px)]
      `}></div>

    </section>
  );
}