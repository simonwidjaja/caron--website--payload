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

// Only content blocks go here
// Section blocks go to collection (e.g. Page)  

export const contentBlocks = [
  { config: HeadlineBlockConfig, component: HeadlineBlock },
  { config: TextBlockConfig, component: TextBlock },
  { config: TextCompositionBlockConfig, component: TextCompositionBlock },
  { config: ImageBlockConfig, component: ImageBlock },
  { config: SpacerBlockConfig, component: SpacerBlock },
];


export default class ContentBlockList {
  static getBlockConfigs(): Block[] {
    return this.getBlocks().map(block => block.config);
  }
  static getBlockComponents(): Block[] {
    return this.getBlocks().map(block => block.component);
  }
  static getBlocks(): any[] {
    // IDEA: Consider filtering with whitelist or blacklist if needed
    return contentBlocks;
  }
}