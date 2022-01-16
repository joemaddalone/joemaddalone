---
title: 'Hexadecimal Color'
layout: layout
date: 2022-01-16
tags: ['post']
summary: 'How hexadecimal color works.'
permalink: "/{{ title | slugify }}/"
---

# {{ title }}

*P.S.  This is not a blog, this page is not complete yet.*

I suppose I just never really thought about it much and left the hexing of colors to designer witchcraft not meant for the likes of this poor programmer-minded plebe to understand, but it turns out these friggin' designer-types have been programming all along.

## Why is `#ff0000` <span style="color:#f00">red</span>?

### Hexadecimal is fancy speaking for Base 16

As mere mortals we use a Base 10 counting system.  It consists of numerals from 0 to 9.  It goes like this:

```js
0  = 0  // 0 ones           = 00
1  = 1  // 1 one            = 01
2  = 2  // 2 ones           = 02
3  = 3  // 3 ones           = 03
4  = 4  // 4 ones           = 04
5  = 5  // 5 ones           = 05 (50% between 0 and 10)
6  = 6  // 6 ones           = 06
7  = 7  // 7 ones           = 07
8  = 8  // 8 ones           = 08
9  = 9  // 9 ones           = 09
10 = 10 // 1 ten and 0 ones = 10
11 = 11 // 1 ten and 1 one  = 11
```

If we were working using a Base 6 counting system it would go like this:

```js
0  = 0  // 0 ones            = 00
1  = 1  // 1 one             = 01
2  = 2  // 2 ones            = 02
3  = 3  // 3 ones            = 03 (50% between 0 and 10)
4  = 4  // 4 ones            = 04
5  = 5  // 5 ones            = 05
10 = 6  // 1 six and 0 one   = 06
11 = 7  // 1 six and 1 one   = 07
12 = 8  // 1 six and 2 ones  = 08
13 = 9  // 1 six and 3 ones  = 09
14 = 10 // 1 six and 4 ones  = 10
15 = 11 // 1 six and 5 ones  = 11
```

And in Hexadecimal, also known as Base 16?

```js
0  =  0  // 0 ones               = 00
1  =  1  // 1 one                = 01
2  =  2  // 2 ones               = 02
3  =  3  // 3 ones               = 03
4  =  4  // 4 ones               = 04
5  =  5  // 5 ones               = 05
6  =  6  // 6 ones               = 06
7  =  7  // 7 ones               = 07
8  =  8  // 8 ones               = 08 (50% between 0 and 10)
9  =  9  // 9 ones               = 09
A  =  10 // 10 ones              = 10 ("A", yep we just make it up)
B  =  11 // 11 ones              = 11
C  =  12 // 12 ones              = 12
D  =  13 // 13 ones              = 13
E  =  14 // 14 ones              = 14
F  =  15 // 15 ones              = 15
10 =  16 // 1 sixteen and 0 ones = 16
11 =  17 // 1 sixteen and 1 one  = 17
```

## Hex Colors are RGB.

Hex color is a representation of RGB colors.  RGB is Red, Green, and Blue.  Each color is represented as a lightness of the color in a two-character string.  `RRGGBB`.

## ...and whats with RGB?

I'm going to add more here.  This is not a blog.


## Shorthand CSS.
In CSS `f00` is expanded to `ff0000`.  When we use a 3-character shorthand each character is simply duplicated in place.  `f00` becomes `ff` (doubled `f`), followed by `00` (doubled `0`), followed by `00` (doubled `0`).  `f` = `ff`, followed by `0` = `00`, followed by `0` = `00`, becomes `ff0000`.

## And RGBA?

Alpha: #RRGGBBAA —- Alpha operated in the same domain as colors - 0 to 255.  So counting from 0 half of 255 is 128.

128 = 80
8 in the 16s spot, 0 in the 1s spot

80 = 8*16 = 128.

256 / 128 = 2 or 50%.

So #FF000080 = rgba(255,0,0, 0.5) = RED at 50% alpha

and with short code we can say #f008 = #ff000088