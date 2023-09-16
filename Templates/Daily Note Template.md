---
date: <% moment(tp.file.title,'YYYY-MM-DD').format("YYYY-MM-DD") %>
weekly_note: "[[<% moment(tp.file.title,'YYYY-MM-DD').format('YYYY-[W]ww') %>]]"
---
# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>
```dataviewjs
/*
    previous/next note by date for Daily Notes
    Also works for other files having a `date:` YAML entry.
    MCH 2021-06-14
*/
var none = '(none)';
var folder = app['internalPlugins']['plugins']['daily-notes']['instance']['options']['folder'] || dv.current().file.folder
var p = dv.pages('"'+folder+'"').where(p => p.file.day).map(p => [p.file.name, p.file.day.toISODate()]).sort(p => p[1]);
var t = dv.current().file.day ? dv.current().file.day.toISODate() : dv.date("now").toFormat("yyyy-MM-dd");
// Obsidian uses moment.js; Luxon’s format strings differ!
var format = app['internalPlugins']['plugins']['daily-notes']['instance']['options']['format'] || 'YYYY-MM-DD';
var current = '(' + moment(t).format(format) + ')';
var nav = [];
var today = p.find(p => p[1] == t);
var next = p.find(p => p[1] > t);
var prev = undefined;
p.forEach(function (p, i) {
    if (p[1] < t) {
        prev = p;
    }
});
nav.push(prev ? '[[' + prev[0] + ']]' : none);
//nav.push(today ? today[0] : none);
nav.push(today ? today[0] : current);
nav.push(next ? '[[' + next[0] + ']]' : none);

//dv.list(nav);
//dv.paragraph(nav.join(" · "));
dv.paragraph(nav[0] + ' ← ' + nav[1] + ' → ' + nav[2]);
```
## Notes 
<% await tp.file.move("/Daily Notes/" + tp.file.title) %>
### Diary

## Todos

# Homework
> [!warning]+ Due
> ```dataview
> TASK
> WHERE !completed AND contains(tags, "#school") AND (due <= date(this.file.day) + dur(1 day) or important)
> SORT due ASC
> GROUP BY due
> ```

# People
```dataview
TABLE WITHOUT ID file.link AS "Person", date_last_spoken AS "Date last spoken"
FROM "People"
WHERE follow_up and date_last_spoken <= this.file.day - dur(2 week)
```
Random person: `dice: #person|link`

---
## Questions
```dataview
TABLE file.ctime as "Created", file.mtime as "Modified"
FROM "Questions"
WHERE file.cday = this.file.day
SORT file.ctime DESC
```

## Creations
```dataview
TABLE file.ctime as "Created", file.mtime as "Modified"
WHERE file.cday = this.file.day 
SORT file.ctime DESC
```