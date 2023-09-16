---
banner: "https://cdn.lospec.com/gallery/background000-361327.png"
banner_y: 0.07
banner_lock: true
cssclasses:
  - max
---
> "For anyone trying to discern what to do with their life, pay attention to what you pay attention to. That's pretty much all the information you need."

**Daily Note**: `= "[[" + dateformat(date(today), "yyyy-MM-dd") + "\|" + dateformat(date(today), "cccc, LLLL dd, kkkk") + "]]"`  → **Weekly Note**: `= "[[" + dateformat(date(today), "yyyy-'W'WW") + "\|" + dateformat(date(today), "yyyy, 'W'WW") + "]]"` 
**Current Topic**: [[Current Topic\|here]]
**Whiteboard**: [[whiteboard.excalidraw\| excalidraw here]]
**Self Hosting**: [[Self Hosting Index|here]]

> [!multi-column]
>
>> [!abstract] Academia
>> [[Books and Papers Index|books and papers]] 
>
>> [!warning] Things
> >
>
>> [!success] School
>> [[School Index|school]]

>

> [!multi-column]
>
>> [!tip] Homework
>> ```dataview
>> TASK
>> WHERE !completed AND contains(tags, "#school")
>> SORT due ASC
>> GROUP BY due
>> ```
>
>> [!check] Todo
>> ```dataview
>> LIST
>> FROM #todo 
>> ```
>
  
>

> [!multi-column]
>> [!question]+ Questions
> > ```dataview
> > LIST
> > FROM "Questions" and #unanswered and -#current-topic 
> > ```
>
> > [!note]+ CheatSheets
> > ```dataview
> > LIST
> > FROM #cheatsheet 
> > ```

>

> [!multi-column]
> > [!abstract]+ Literature
> > ```dataview
> > LIST
> > FROM "Literature"
> > ```
>
> > [!hint]+ Lists
> > ```dataview
> > LIST
> > FROM #list
> > ```

