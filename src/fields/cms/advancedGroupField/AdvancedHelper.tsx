import { AdvancedGroupField } from "@/payload-types";

/**
 * Helper class for processing advanced field attributes and styles in CMS components.
 */

export default class AdvancedHelper {

  /**
   * Extracts id and className from advanced field configuration.
   *
   * @param advanced - The advanced group field configuration object
   * @returns Object containing id and className properties (undefined if not set)
   *
   * @example
   * ```tsx
   * return (
   *   <>
   *     <Button 
   *       variant={variant} 
   *       size={size}
   *       {...AdvancedHelper.advancedAttributes(advanced)}
   *     >
   *     ...
   *   </>
   * )
   * ```
   */
  static advancedAttributes(advanced: AdvancedGroupField | undefined) {
    return {
      id: advanced?.id || undefined,
      className: advanced?.className || undefined,
    };
  }

  /**
   * Generates scoped style tags from advanced field styles.
   * Automatically processes SELF blocks by extracting their contents and applying them to the element's ID selector.
   *
   * @param advanced - The advanced group field configuration object
   * @returns JSX style element scoped to the element's ID, or undefined if no styles
   *
   * @example
   * ```tsx
   * return (
   *   <>
   *     <Button 
   *       variant={variant} 
   *       size={size}
   *       {...AdvancedHelper.advancedAttributes(advanced)}
   *     >
   *        {label}
   *     </Button>
   *     // Renders styles scoped to the button's ID
   *     {AdvancedHelper.advancedStyles(advanced)}
   *   </>
   * )
   * ```
   */
  static advancedStyles(advanced: AdvancedGroupField | undefined) {
    return advanced?.styles && (
      <style>{`#${advanced.id} { ${(() => {
        // Regex to match SELF blocks and capture their contents
        const regex = /SELF\s*\{\s*([\s\S]*?)\s*\}/g;
        // Replace SELF blocks with just their contents, preserving formatting
        const output = advanced.styles.replace(regex, (match, contents) => {
          // Trim the contents and ensure proper spacing
          return contents.trim();
        });
        return output;
      })()} }`}</style>
    );
  }
}