import Headline from "@/components/basic/typography/Headline";
import SectionDefault from "@/components/sections/SectionDefault";
import Link from "next/link";

export function BackLink() {
  return (
    <SectionDefault className="text-xs">
      <Link href="/internal/design-system" className="opacity-20 hover:opacity-100">← Back to Design System Home</Link>
    </SectionDefault>
  )
}

export function Toc() {
  return (
    <SectionDefault>
      <Headline className="mb-4" size="h3" headline="Chapters" />
      <div className="flex flex-col gap-2">
        <Link href="/internal/design-system/grid">Grid →</Link>
        <Link href="/internal/design-system/typography">Typography →</Link>
      </div>
    </SectionDefault>
  )
}
