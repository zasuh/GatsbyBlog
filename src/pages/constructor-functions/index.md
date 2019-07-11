---
title: What are constructor functions? [POST UNFINISHED]
date: "2019-07-11T06:41:32.169Z"
---

Constructor functions have, at least to me, one of the coolest names in programming. The first time I had to explain to someone what constructor functions are, I got all gitty because I just got to use the word `constructor`.

Enough of the bullshit. This post will focus on how constructor functions are use in JavaScript
and React. To use my own reasoning for what they are: *Constructor functions are functions that are called only once* usually at the start of a script **or** in React terms when a component is loaded, we use a constructor functions to set the state of that component, usually using props which have been passed to that functions.

Constructors are functions, but have a few different properties to regular functions:

- They are executed with the `new` keyword.
- They start with a capital letter.

What does the `new` keyword do? Well when used it creates an `object` and binds it to `this`, the body of the new functions is ran, which also changes the `this` with new values, properties...

```javascript
function Animal(species) {
  // this = {};

  // add properties to this
  this.species = species;
  this.size    = 'big';
  this.legs    = 4;

  // return this;
}

let animal = new Animal('Dog');
```

Thank you for reading!

[Follow me on Twitter](https://twitter.com/zasuh_).
[Github profile](https://github.com/zasuh).
[LinkedIn just because](https://www.linkedin.com/in/zasuhadolnik/).
