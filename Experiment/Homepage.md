---
cssclasses:
  - widget
---

> [!job]- Widgets
>```dataview
TABLE WITHOUT ID ("![](" + banner + ")") AS "Banner", link(file.link, title) AS "Title"
FROM ""
WHERE type = "Widget" 
SORT file.cday DESC
