---
title: 'Code: Pipper'
layout: layout
date: 2023-12-23
tags: ['draft']
excerpt: 'A program to place pips pleasingly.'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

```js
/**
 * @param  {number} pips
 * @param  {number} pipSize
 * @param  {number} cx
 * @param  {number} cy
 */
export default function pipper (pips, pipSize, cx, cy) {
  const pad = pipSize * 1.8
  const halfPad = pad / 2
  const thirdPad = pad / 3
  const tm = [cx, cy - pad] // top middle
  const tl = [cx - pad, cy - pad] // top left
  const tr = [cx + pad, cy - pad] // top right
  const cl = [cx - pad, cy] // center left
  const cm = [cx, cy] // center middle
  const cr = [cx + pad, cy] // center right
  const bl = [cx - pad, cy + pad] // bottom left
  const bm = [cx, cy + pad] // bottom middle
  const br = [cx + pad, cy + pad] // bottom right
  const tmOffset = [cx, cy - halfPad] // top middle offset
  const bmOffset = [cx, cy + halfPad] // bottom middle offset
  const fourTallLeft = [
    tl,
    [cx - pad, cy - thirdPad],
    [cx - pad, cy + thirdPad],
    bl
  ]
  const fourTallRight = [
    tr,
    [cx + pad, cy - thirdPad],
    [cx + pad, cy + thirdPad],
    br
  ]
  const fourTallMiddle = [tm, [cx, cy - thirdPad], [cx, cy + thirdPad], bm]
  switch (pips) {
    case 1:
      return [cm]
    case 2:
      return [tl, br]
    case 3:
      return [tl, cm, br]
    case 4:
      return [tl, tr, bl, br]
    case 5:
      return [tl, tr, bl, br, cm]
    case 6:
      return [tl, tr, bl, br, cl, cr]
    case 7:
      return [tl, tr, bl, br, cl, cm, cr]
    case 8:
      return [tl, tmOffset, tr, bl, bmOffset, br, cl, cr]
    case 9:
      return [...fourTallLeft, cm, ...fourTallRight]
    case 10:
      return [...fourTallLeft, ...fourTallRight, tmOffset, bmOffset]
    case 11:
      return [...fourTallLeft, ...fourTallRight, tm, cm, bm]
    case 12:
      return [...fourTallLeft, ...fourTallRight, ...fourTallMiddle]
    default:
      return []
  }
}
```