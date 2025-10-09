import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import type { CodeBlockProps } from '@/blocks/Code/Component'

import type {
  BannerBlock as BannerBlockProps,
  // CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { cn } from '@/utilities/ui'

type NodeTypes =
  | DefaultNodeTypes
  // | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>
  | SerializedBlockNode<MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    // simonsays: had to remove these custom blocks as they were causing issues the "SCSS" issue
    // banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    // mediaBlock: ({ node }) => (
    //   <MediaBlock
    //     className="col-start-1 col-span-3"
    //     imgClassName="m-0"
    //     {...node.fields}
    //     captionClassName="mx-auto max-w-[48rem]"
    //     enableGutter={false}
    //     disableInnerContainer={true}
    //   />
    // ),
    // code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    // cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichTextCustom(props: Props) {
  const { className, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        // simonsays: with our custom sections this is not needed
        // {
        //   container: enableGutter,
        //   'max-w-none': !enableGutter,
        //   'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        // },
        className,
      )}
      {...rest}
    />
  )
}
