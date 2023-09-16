---
date: <% tp.file.creation_date("DD-MM-YYYY") %>
daily_notes: 
<%* Array.from(Array(7).keys()).map((i) => { date = tp.date.weekday("YYYY-MM-DD", i, tp.file.title, "YYYY-[W]W"); tR += `    - "[[/Daily Notes/${date}|${date}]]"\n`;}); %>
---
# <% moment(tp.file.title,'gggg-[W]ww').format("YYYY, [W]w") %>
[[/Daily Notes/Weekly/<% moment(tp.file.title,'gggg-[W]ww').subtract(7, 'days').format("YYYY-[W]w") %>|<% moment(tp.file.title,'gggg-[W]ww').subtract(7, 'days').format("YYYY-[W]w") %>]] ← <% moment(tp.file.title,'gggg-[W]ww').format("YYYY-[W]w") %> → [[/Daily Notes/Weekly/<% moment(tp.file.title, 'gggg-[W]ww').add(7, 'days').format("YYYY-[W]w") %>|<% moment(tp.file.title,'gggg-[W]ww').add(7, 'days').format("YYYY-[W]w") %>]]
 > [!question]- Plan
> ![[Weekly plan]] 
## Notes 
<% await tp.file.move("/Daily Notes/Weekly/" + tp.file.title) %>
## Goals
- [ ] **Coding**:
- [ ] **Reading**:
- [ ] **Social**:
- [ ] **School**:
- [ ] **General/Other**:
# History
---
<%*
Array.from(Array(7).keys()).map((i) => {
  date = tp.date.weekday("YYYY-MM-DD", i, tp.file.title, "YYYY-[W]W");
  tR += `> [!info]- ${date}\n`;
  tR += `> ![[/Daily Notes/${date}]]\n\n`;
});
%>
# Reflection
%% Complete every Sunday night %%
**Coding**:
**Reading**:
**Social**:
**School**:
**General/Other**:
## Goals
%% Goals for next week %%
**Coding**:
**Reading**:
**Social**:
**School**:
**General/Other**:

[[/Daily Notes/Weekly/<% moment(tp.file.title, "gggg-[W]ww").add(7, 'days').format("YYYY-[W]w") %>|Create next weeks note →]]