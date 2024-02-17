---
weight: 10
linkTitle: Truncamiento de texto
title: Uso del ayudante para Truncamiento de texto en Bootstrap · Bootstrap en Español v5.3
description: Truncar largas cadenas de texto con puntos suspensivos.
noindex: true
---

# Uso del ayudante para Truncamiento de texto en Bootstrap

Truncar largas cadenas de texto con puntos suspensivos.

{{< content-ads/top-banner >}}

Para contenido más extenso, puedes agregar una clase `.text-truncate` para truncar el texto con puntos suspensivos. **Requiere `display: inline-block` o `display: block`.**

{{< bootstrap/content-suggestion >}}

{{< demo-iframe path="/demos/bootstrap/5.3/helpers/text-truncation/index.html" >}}
```html {filename="HTML"}
    <!-- Block level -->
    <div class="row">
        <div class="col-2 text-truncate">
            Este texto es bastante largo y se truncará una vez mostrado.
        </div>
    </div>

    <!-- Inline level -->
    <span class="d-inline-block text-truncate" style="max-width: 150px;">
        Este texto es bastante largo y se truncará una vez mostrado.
    </span>
```
{{< /demo-iframe >}}

{{< content-ads/bottom-banner >}}
