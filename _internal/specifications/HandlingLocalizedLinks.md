Context: Payload CMS (3.59.1) with NextJS (15.4.4, with app router)

# Spec for "Handling localized links"


## Setup

### Collection Fields

* we support three languages (de (default), en, fr)
* URLs:
  * /de/start
  * /en/start
  * /fr/start
* payload collection: only pages (for now)
* content in payload: localized fields (title, description, etc)
* language switcher in website header
  * switches to same page in other language

(all above is already implemented)


## New requirement

### Implement

* Create a utility getLocalisedURL 
  * Arguments: Locale-agnostic URL (e.g. "/contact")
  * Returns localized URL e.g. "/en/contact" depending on the current language (defined by first path segment of URL)
  * Use getLocalisedURL in Button Block and RichTextBlock to modify the requested href
