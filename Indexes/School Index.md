---
date: 2023-08-15
desc: School stuff
---
# Uncompleted
```dataview
TASK
WHERE !completed AND contains(tags, "#school")
SORT due ASC
GROUP BY due
```

# Completed
```dataview

TASK

WHERE completed AND contains(tags, "#school")

SORT file.ctime ASC

GROUP BY file.link

```

# How To's
## [[academia - how to read|How to read papers]]
## [[Weekly plan]]