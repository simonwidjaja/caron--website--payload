Context: Payload CMS (3.59.1) with NextJS (15.4.4, with app router)

# Spec for "CustomGroupField"

This spec is only targeting the admin experience (no frontend rendering)

## Tasks

* Create a new field : src/fields/wip/customGroup
  * Group should have a surrounding div container with a custom border color (defined on field usage level)
  * Group renders child fields inside the bordered div

## Notes
* We briefly played around but were not yet able to rneder the childs with <RenderFields ... />




+ Have done similar tasks: [exact|similar|no]
+ Feasibility: [yes|no|unsure] 
+ Complexity: [1..10]
+ Difficulty: [1..10]
+ Time estimate: [h]
+ Estimate confidence (Evaluate uncertainty (likelihood of timing/results varying significantly from the forecast)): [1..10]