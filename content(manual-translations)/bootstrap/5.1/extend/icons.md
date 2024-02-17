---
weight: 2
linkTitle: Iconos
title: Uso de Iconos · Bootstrap en Español v5.1
description: Orientación y sugerencias para el uso de bibliotecas de iconos externos con Bootstrap.
next: /bootstrap/5.1/about/overview
type: docs
---

# Uso de Iconos en Bootstrap

Orientación y sugerencias para el uso de bibliotecas de iconos externos con Bootstrap.

{{< content-ads/top-banner >}}

Si bien Bootstrap no incluye un conjunto de íconos predeterminado, tenemos nuestra propia biblioteca de íconos integral llamada Bootstrap Icons. Siéntete libre de usarlos o cualquier otro conjunto de iconos en tu proyecto. Hemos incluido detalles para los íconos de Bootstrap y otros conjuntos de íconos preferidos a continuación.

Si bien la mayoría de los conjuntos de íconos incluyen múltiples formatos de archivo, preferimos las implementaciones SVG por su mejor accesibilidad y compatibilidad con vectores.

## Bootstrap Icons

Bootstrap Icons es una biblioteca en crecimiento de íconos SVG diseñados por [@mdo](https://github.com/mdo) y mantenidos por [el equipo de Bootstrap](https://github.com/orgs/twbs/people). Los inicios de este conjunto de íconos provienen de los propios componentes de Bootstrap: nuestros formularios, carruseles y más. Bootstrap tiene muy pocas necesidades de íconos listas para usar, por lo que no necesitábamos mucho. Sin embargo, una vez que nos pusimos en marcha, no pudimos dejar de hacer más.

{{< content-ads/middle-banner-1 >}}

Ah, ¿y mencionamos que son completamente de código abierto? Con licencia del MIT, al igual que Bootstrap, nuestro conjunto de iconos está disponible para todos.

[Obtén más información sobre los íconos de Bootstrap]({{< bootstrap/5-1/param icons >}}), incluido cómo instalarlos y el uso recomendado.

## Alternativas

Hemos probado y utilizado estos conjuntos de iconos como alternativas preferidas a los iconos de Bootstrap.

{{< content-ads/middle-banner-2 >}}

{{< bootstrap/5-1/markdown >}}
{{< icons.inline >}}
{{- $type := .Get "type" | default "preferred" -}}

{{- range (index .Site.Data.bootstrap_5_1_icons $type) }}
- [{{ .name }}]({{ .website }})
{{- end }}
{{< /icons.inline >}}
{{< /bootstrap/5-1/markdown >}}

## Mas opciones

Si bien no los hemos probado nosotros mismos, parecen prometedores y brindan múltiples formatos, incluido SVG.

{{< bootstrap/5-1/markdown >}}
{{< icons.inline type="more" />}}
{{< /bootstrap/5-1/markdown >}}

{{< content-ads/bottom-banner >}}
