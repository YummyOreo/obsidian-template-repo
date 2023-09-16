---
date: <% tp.date.now("YYYY-MM-DD") %>
---
#<% tp.file.cursor() %>
<% await tp.file.move("/Literature/" + tp.file.title) %>

> [!cite]+ Citations
>