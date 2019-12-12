---
title: "What are constructor functions?"
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

In short they are used to *create AND initialize an object within a class* while most other functions are created and then need to be called with certain parameters.

---

## CONSTRUCTORS IN REACT ##

Because I haven't personally so far used constructors in any other framework other than React I would like to also explain my own reasoning for how React uses them. React used to have a function called `getInitialState` which I happen to still use daily on my job. This function was replaced by just a regular `constructor` for setting a component's state.

```javascript
//Old way
getInitialState(){
  return {
    name    : this.props.name,    //this.state.name
    surname : this.props.surname, //this.state.surname
    age     : this.props.age      //this.state.age
  }
}
```

```javascript
//Current way
constructor(props){
  super(props)
  this.state = {
    name    : this.props.name,    //this.state.name
    surname : this.props.surname, //this.state.surname
    age     : this.props.age      //this.state.age
  }
  //Any other variable you want to define for when state loads
}
```

You will most likely find the second way more often now, unless you are reading some legacy React code, but essentially both ways are the same with slight differences, like you having to use `super(props)` to refer to that component's parent class constructor. Or in more simple terms you are refering to the parent of that component, which also has a constructor.

Thank you for reading!

[Follow me on Twitter](https://twitter.com/zasuh_).
[Github profile](https://github.com/zasuh).
[LinkedIn just because](https://www.linkedin.com/in/zasuhadolnik/).
