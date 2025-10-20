Context: Payload CMS (3.59.1) with NextJS (15.4.4, with app router)

# Spec for "Advanced Properties"

We define blocks for our pages in Payload CMS (e.g. text, image, video, columns, etc.).
These blocks have very specific fields depending on their purpose and content structure. 
Beyond those specific fields, we want to create and append a set of common fields to all blocks: Advanced Properties. 
These Advanced Properties cover non-content aspects of the block and are mostly related to "layout", "styles", "animation and interactivity".

All Advanced Properties will be provided inside a custom collapisble group field provided in "src/fields/cms/advancedGroupField/advancedGroupField.ts"

## Implement

Create the following field structure:
* Advanced (Tab group)
  * Layout (type: Tab)
  * Styles (type: Tab)
