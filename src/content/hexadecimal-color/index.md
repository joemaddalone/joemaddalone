---
title: 'Hexadecimal Color'
layout: layout
date: 2022-01-16
tags: ['post']
excerpt: 'How hexadecimal color works.'
permalink: '/{{ title | slugify }}/'
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>{{ excerpt }}</p>
</hgroup>

I suppose I just never really thought about it much and left the hexing of colors to designer witchcraft not meant for the likes of this poor programmer-minded plebe to understand.

## Why is `#ff0000` <span style="color:#f00">red</span>?

### Hexadecimal is fancy speaking for Base 16

As mere mortals we use a Base 10 counting system. It consists of numerals from 0 to 9. It goes like this:

```js
0 = 0; // 0 ones             = 00
1 = 1; // 1 one              = 01
2 = 2; // 2 ones             = 02
3 = 3; // 3 ones             = 03
4 = 4; // 4 ones             = 04
5 = 5; // 5 ones             = 05
6 = 6; // 6 ones             = 06
7 = 7; // 7 ones             = 07
8 = 8; // 8 ones             = 08
9 = 9; // 9 ones             = 09
10 = 10; // 1 ten and 0 ones = 10
11 = 11; // 1 ten and 1 one  = 11
```

If we were working in Base 6 or heximal it would consist of numerals from 0 to 5 and look like this:

```js
0 = 0; // 0 ones             = 00
1 = 1; // 1 one              = 01
2 = 2; // 2 ones             = 02
3 = 3; // 3 ones             = 03
4 = 4; // 4 ones             = 04
5 = 5; // 5 ones             = 05
10 = 6; // 1 six and 0 ones  = 06
11 = 7; // 1 six and 1 one   = 07
12 = 8; // 1 six and 2 ones  = 08
13 = 9; // 1 six and 3 ones  = 09
14 = 10; // 1 six and 4 ones = 10
15 = 11; // 1 six and 5 ones = 11
```

In Hexadecimal, also known as Base 16, we use the numerals from 0 to 9 and then substitute letters for 10 to 15.

```js
0 = 0; // 0 ones                 = 00
1 = 1; // 1 one                  = 01
2 = 2; // 2 ones                 = 02
3 = 3; // 3 ones                 = 03
4 = 4; // 4 ones                 = 04
5 = 5; // 5 ones                 = 05
6 = 6; // 6 ones                 = 06
7 = 7; // 7 ones                 = 07
8 = 8; // 8 ones                 = 08
9 = 9; // 9 ones                 = 09
A = 10; // 10 ones               = 10
B = 11; // 11 ones               = 11
C = 12; // 12 ones               = 12
D = 13; // 13 ones               = 13
E = 14; // 14 ones               = 14
F = 15; // 15 ones               = 15
10 = 16; // 1 sixteen and 0 ones = 16
11 = 17; // 1 sixteen and 1 one  = 17
```

### Let's build a calculator.

Converting a decimal to base<sub>n</sub> in JavaScript is super easy.

```js
(255).toString(16); // outputs ff.
```

And with that we can create a rudimentary decimal (base<sub>10</sub>) to hexadecimal (base<sub>16</sub>) calculator.

```js
<input type="number" value="0" id="i" />
<label id="l">00</label>
<script>
  const toBase16 = (n) => {
    return (+n).toString(16);
  }
  i.oninput = ({target}) => {
    l.innerText = toBase16(target.value);
  }
</script>
```

<div class="ui input">
  <input inputmode="numeric" pattern="[0-9]*" type="number" value="0" id="i" class="ui input" />
  <div class="ui label">
    <h2 id="l">00</h2>
  </div>
</div>
<script>
  const toBase16 = (n) => {
    return (+n).toString(16);
  }
  const makeInput = () => {
    const input = document.createElement('input');
    input.setAttribute('type') = "number";
  };
  i.oninput = ({target}) => {
    l.innerText = toBase16(target.value);
  }
</script>

### Hex Colors represent RGB.

Hex color is a representation of RGB colors. RGB is Red, Green, and Blue and is used in virtually all light emitting technologies such as computer monitors. Each color is represented as a value between 0 and 255 where zero is fully off and 255 is fully on.

> The RGB color model is an additive color model in which the red, green, and blue primary colors of light are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors, red, green, and blue. [https://en.wikipedia.org/wiki/RGB_color_model](https://en.wikipedia.org/wiki/RGB_color_model)

### RRGGBB

Hexadecimals colors can be notated as `RRGGBB` where each set of two characters represents the 0 to 255 value of the colors red (<span style="color:#f00">RR</span>), green, (<span style="color:#0f0">GG</span>), and blue (<span style="color:#00f">BB</span>).

{% react 'components/hexadecimal/red' %}

Here the `RR` value is represented by `ff` which is equal to 255 or "fully on". We have 255 for red and 0 for both green and blue and therefore we only see the red light. If we move that 255 (ff) value through each position we get the predictable result.

-   `ff0000`: <span style="color:#f00">red</span>
-   `00ff00`: <span style="color:#0f0">green</span>
-   `0000ff`: <span style="color:#00f">blue</span>


## Shorthand CSS. Why is `#f00` also <span style="color:#f00">red</span>?

In CSS `f00` is expanded to `ff0000`. When we use a 3-character shorthand each character is simply duplicated in place. `f00` becomes `ff` (doubled `f`), followed by `00` (doubled `0`), followed by `00` (doubled `0`). `f` = `ff`, followed by `0` = `00`, followed by `0` = `00`, becomes `ff0000`.

-   `f00` -> `ff0000` -> <span style="color:#f00">red</span>
-   `0f0` -> `00ff00` -> <span style="color:#0f0">green</span>
-   `00f` -> `0000ff` -> <span style="color:#00f">blue</span>

## So what's with alphas values in hex colors?

Hexadecimal colors can also have an alpha value resulting in an 8 character string instead of six. `#RRGGBBAA`. The alpha value operates in the same domain as colors from 0 (00) to 255 (ff).

Here is a div with a background of blue at 255 alpha (ff).

<div style="width:50px;height:50px;background-color: #0000ffff"></div>

```html
<div style="background-color: #0000fffff"></div>
```

And the same div with a background of blue at 136 alpha (88).

<div style="width:50px;height:50px;background-color: #0000ff88"></div>

```html
<div style="background-color: #0000fff88"></div>
```

And now we can use 4 character shorthand. `00f4` becomes `00 00 ff 44`

<div style="width:50px;height:50px;background-color: #00f4"></div>

```html
<div style="background-color: #00f4"></div>
```
