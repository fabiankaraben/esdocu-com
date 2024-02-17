---
weight: 8
linkTitle: Texto truncado
title: Uso de Texto truncado · Bootstrap en Español v5.1
description: Trunca cadenas largas de texto con puntos suspensivos.
type: docs
noindex: true
---

# Texto truncado en Bootstrap

Trunca cadenas largas de texto con puntos suspensivos.

{{< content-ads/top-banner >}}

Para contenido más largo, puedes agregar una clase `.text-truncate` para truncar el texto con puntos suspensivos. **Requiere `display: inline-block` o `display: block`.**

{{< bootstrap/5-1/example >}}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    Este texto es bastante largo y se truncará una vez que se muestre.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  Este texto es bastante largo y se truncará una vez que se muestre.
</span>
{{< /bootstrap/5-1/example >}}

{{< content-ads/bottom-banner >}}
