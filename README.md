# Bemoon

quickry BEM class names generator, and modifier.

## Inspired
  - [bem-cn](https://github.com/albburtsev/bem-cn)

## modify of element class name.

```javascript
const b = new Bemoon('block', 'element')

b.getDOM()
// <div class="block__element" />

b.modify('active')
// <div class="block__element--active" />

b.modifyAll('inactive')
// <div class="block__element--inactive" />

b.clear()
// <div class="block__element" />
```

## LICENSE

**Copyright (c) 2017 "MaxMEllon" Kento TSUJI**

Licensed under the [MIT license](./LICENSE.txt)
