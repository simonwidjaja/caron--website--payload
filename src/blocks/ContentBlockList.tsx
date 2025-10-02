import { Block } from "payload";
import { HeadlineBlock } from "./basic/HeadlineBlock/Component";
import { HeadlineBlockConfig } from "./basic/HeadlineBlock/config";

export const contentBlocks = [
  { config: HeadlineBlockConfig, component: HeadlineBlock },
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