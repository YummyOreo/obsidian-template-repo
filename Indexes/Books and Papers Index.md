---
date: 2023-07-31
desc: 
cssclasses:
  - cards
  - cards-cols-4
  - wide
---
# To read
```dataview

TABLE WITHOUT ID file.link AS "Fiction", "**Author**: " + author as "   ", "**Category**: " + category as " ", "**Pages**: " + total as "  "

FROM #📚Book

WHERE status = "unread" and !fiction

```
```dataview

TABLE WITHOUT ID file.link AS "Fiction", "**Author**: " + author as "   ", "**Category**: " + category as " ", "**Pages**: " + total as "  "

FROM #📚Book

WHERE status = "unread" and fiction

```
# Reading
```dataview

TABLE WITHOUT ID file.link AS "Fiction", "**Author**: " + author as "   ", "**Category**: " + category as " ", "**Pages**: " + total as "  "

FROM #📚Book

WHERE status = "reading"

```

# Read
```dataview

TABLE WITHOUT ID file.link AS "Fiction", "**Author**: " + author as "   ", "**Category**: " + category as " ", "**Pages**: " + total as "  ", "**Would recommend**: " + recommend as "    "

FROM #📚Book

WHERE status = "done"

```