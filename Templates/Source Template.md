---
date: <% tp.date.now("YYYY-MM-DD") %>
---
#source #<% tp.file.cursor() %>
<% await tp.file.move("/Sources/" + tp.file.title) %>