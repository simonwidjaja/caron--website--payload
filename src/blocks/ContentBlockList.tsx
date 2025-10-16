import { Block } from "payload";
import { HeadlineBlock } from "./basic/HeadlineBlock/Component";
import { HeadlineBlockConfig } from "./basic/HeadlineBlock/config";
import { TextCompositionBlock } from "./basic/TextCompositionBlock/Component";
import { TextCompositionBlockConfig } from "./basic/TextCompositionBlock/config";
import { TextBlockConfig } from "./basic/TextBlock/config";
import { TextBlock } from "./basic/TextBlock/Component";
import { ImageBlockConfig } from "./basic/ImageBlock/config";
import { ImageBlock } from "./basic/ImageBlock/Component";
import { SpacerBlockConfig } from "./basic/SpacerBlock/config";
import { SpacerBlock } from "./basic/SpacerBlock/Component";
import { ButtonBlockConfig } from "./basic/ButtonBlock/config";
import { ButtonBlock } from "./basic/ButtonBlock/Component";
import { RichTextBlockConfig } from "./basic/RichTextBlock/config";
import { RichTextBlock } from "./basic/RichTextBlock/Component";
import { SVGPathAnimationConfig } from "./wip/SVGPathAnimation/config";
import { SVGPathAnimation } from "./wip/SVGPathAnimation/Component";
import { VideoBlockConfig } from "./basic/VideoBlock/config";
import { VideoBlock } from "./basic/VideoBlock/Components";

// Only content blocks go here
// Section blocks go to collection (e.g. Page)  

export const contentBlocks = [
  { config: HeadlineBlockConfig, component: HeadlineBlock },
  { config: TextBlockConfig, component: TextBlock },
  { config: TextCompositionBlockConfig, component: TextCompositionBlock },
  { config: ImageBlockConfig, component: ImageBlock },
  { config: SpacerBlockConfig, component: SpacerBlock },
  { config: ButtonBlockConfig, component: ButtonBlock },
  { config: RichTextBlockConfig, component: RichTextBlock },
  { config: SVGPathAnimationConfig, component: SVGPathAnimation },
  { config: VideoBlockConfig, component: VideoBlock },
];


export default class ContentBlockList {
  static getBlockConfigs(): Block[] {
    return this.getBlocks().map(block => block.config);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getBlockComponents(): any[] {
    return this.getBlocks().map(block => block.component);
  }
  static getBlocks(): typeof contentBlocks {
    // IDEA: Consider filtering with whitelist or blacklist if needed
    return contentBlocks;
  }
}