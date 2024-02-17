---
weight: 2
linkTitle: Enlaces de colores
title: Uso de Enlaces de colores · Bootstrap en Español v5.1
description: Enlaces de colores con estados flotantes
type: docs
noindex: true
---

# Uso de Enlaces de colores en Bootstrap

Enlaces de colores con estados flotantes

{{< content-ads/top-banner >}}

Puedes usar las clases `.link-*` para colorear los enlaces. A diferencia de las [clases `.text-*`]({{< bootstrap/5-1/docsref "/utilities/colors" >}}), estas clases tienen un estado `:hover` y `:focus`.

{{< bootstrap/5-1/example >}}
{{< colored-links.inline >}}
{{- range (index $.Site.Data "bootstrap_5_1_theme-colors") }}
<a href="#" class="link-{{ .name }}">Enlace {{ .name | title }}</a> 
{{- end -}}
{{< /colored-links.inline >}}
{{< /bootstrap/5-1/example >}}

{{< bootstrap/5-1/callout info >}}
Algunos de los estilos de enlace usan un color de primer plano relativamente claro y solo deben usarse sobre un fondo oscuro para tener suficiente contraste.
{{< /bootstrap/5-1/callout >}}

{{< content-ads/bottom-banner >}}
