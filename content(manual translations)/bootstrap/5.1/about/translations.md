---
weight: 5
linkTitle: Traducciones
title: Traducciones · Bootstrap en Español v5.1
description: Enlaces a sitios de documentación de Bootstrap traducidos por la comunidad.
next: /bootstrap/5.1/migration
type: docs
noindex: true
---

# Traducciones

Enlaces a sitios de documentación de Bootstrap traducidos por la comunidad.

{{< content-ads/top-banner >}}

Los miembros de la comunidad han traducido la documentación de Bootstrap a varios idiomas. Ninguno tiene soporte oficial y es posible que no siempre estén actualizados.

{{< translations.inline >}}
<ul>
{{ range .Site.Data.bootstrap_5_1_translations -}}
  <li><a href="{{ .url }}" hreflang="{{ .code }}">{{ .description }} ({{ .name }})</a></li>
{{ end -}}
</ul>
{{< /translations.inline >}}

**No ayudamos a organizar ni a alojar traducciones, solo las vinculamos.**

¿Terminaste una traducción nueva o mejor? Abre un pull request para agregarla a nuestra lista.

{{< content-ads/bottom-banner >}}
