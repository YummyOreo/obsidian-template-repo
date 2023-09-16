---
date: <% tp.date.now("YYYY-MM-DD") %>
---
#question #unanswered 
# [[<% await tp.file.title %>|<% await tp.file.title %>?]]
<% await tp.file.move("/Questions/" + tp.file.title) %>
> [!abstract]+ Answer

> [!example]+ Sources
> 
