---
date: {{importDate | format("YYYY-MM-DD")}}
alias: "{{title}}"
---
{% persist "notes" %}

#
{% endpersist %}

# Annotations
{% persist "annotations" %}{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}
{% if newAnnotations.length > 0 %}
### Imported: {{importDate | format("YYYY-MM-DD h:mm a")}}
{% for a in newAnnotations %} - {{a.annotatedText}}{% if a.comment %}
	- {{a.comment}}{% endif %}
{% endfor %}{% endif %}{% endpersist %}
{% if abstractNote %}
> [!abstract]- Abstract
> {{abstractNote}}{% endif %}

> [!cite]+ PDF
> [{{title}}]({{url}})