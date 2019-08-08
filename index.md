---
title: Manipulation of Arrays and Objects
date: "2019-08-07T06:20:32.169Z"
---

I don't think I ever got any more gittier than the time I figured out ways on how to manipulate, change and construct Arrays and Objects. It was one of the best revelations in my JS learning career and are essential for understanding modern Javascript. So I thought I would explain some of the ones I actually understand and use on a daily basis.

When do you use them? An example of of the top of my head is when an API returns a JSON object in a certain structure that doesn't work with how your component renders data. In this case you would take the returned API data and transform it with let's say `map` to create a new array that suits your component render.

---

### MAP ###

I've looked at a lot of other peoples code over the years and the use of `map` is large. So what is it, except a higher order function? Well `map` loops over an array and returns a new array is the simplest answer I can give. It takes a callback function as a parameter, which itself takes a parameter (I usually go with the naming of `item` to reference the current item in the array) referencing the current value of the array and the second parameter being the index at which that value is held.

```javascript
let arr = [3, 6, 9, 12, 15, 18];

arr.map((item, index)=>{
  console.log(item * 4) //12, 24, 36, 48, 60, 72
  console.log(index) //0, 1, 2, 3, 4, 5
})
```

The beauty of higher order functions such as map is using them is pure functional programming so you can continue appending other functions at the end of `map` for instance:

```javascript
let arr = [3, 6, 9, 12, 15, 18];

arr.map((item, index)=>{
  console.log(item * 4) //12, 24, 36, 48, 60, 72
  console.log(index) //0, 1, 2, 3, 4, 5
}).filter((item)=>{
  if (item < 12){ //filters out all numbers that are lower than 12
    return false;
  } else {
    return true;
  }
});
```

Or something regarding react state and mapping into a new object to later use in render:
```javascript
fetch('http://example.com/movies.json')
  .then((response)=>{ //Response is [ {id:1, name:First Name}, {id:2, name:Second Name}, {id:3, name:Third Name} ]
    this.setState({
      fieldsForComponent : response.map((item)=>{
                              return {
                                id : item.id,
                                name : item.name
                              }
                            });
    });
  })
```

### FILTER ###

We briefly used the `filter` function in an above example. What is it? It's another higher order function that filters the passed data structure based on the test you provide in the callback function. So you might use it with `if..else` statements often.

```javascript
let arr = ['aaa', 'bbbb', 'ccccc'];

arr.filter((item, index)=>{
  if (item.length < 3){
    return true;
  } else {
    return false;
  }
  console.log(index); //0, 1, 2
});
```

The callback in the `filter` function takes the parameters of the **current item in the array**, **the index of the item** and it can also take the **array object on which the filter is being made**.

### FOREACH ###

`forEach` is one of my most used functions when it comes to arrays. At first sight it looks the same as `map` with the exception that `map` creates a brand new array which you usually have to assign back to the original array, whereas `forEach` mutates the existing array, changing it's structure and values.

```javascript
let arr = [5, 10, 15];

arr.forEach((item)=>{
  console.log(item * 2); //10, 20, 30
});
console.log(arr); //[10, 20, 30]
```

The same as `filter` `forEach` takes as parameters **current item in the array**, **the index of the item** and it can also take the **array object on which the loop is being made**.

### OBJECT.KEYS / OBJECT.VALUES ###

Moving on to Object manipulation for a bit are two very useful ways to get objects to where you want them. `Object.keys` is useful for when you want to treat your object like it's an array and you don't want to do some complex converting code to make that happen. For instance: you want to use map on a data structure, but your structure is an Object. You simply use `Object.keys(yourObject).map()` or `Object.keys(yourObject).filter()`. Why? Because it creates an ARRAY of your keys.

```javascript
const obj = {
  1 : 'somestring',
  2 : 42,
  3 : false
};

console.log(Object.keys(obj)); //["1", "2", "3"]
```

`Object.values()` is the same thing only with the values of the object.

```javascript
const obj = {
  1 : 'somestring',
  2 : 42,
  3 : false
};

console.log(Object.keys(obj)); //['somestring', 42, false]
```

And yes both of these return the `keys` and `values` in the same order as they are written in the initial object.

### OBJECT.ENTRIES ###

To combine both `Object.keys()` and `Object.values()` we have `Object.entries()`. It again returns an array, but this time with the [key, value] pairs. This method does not return the new array in the same order tho, for that you have to sort the array yourself.

```javascript
const obj = {
  1 : 'somestring',
  2 : 42,
  3 : false
};

console.log(Object.entries(obj)); //[[1, 2, 3], ['somestring', 42, false]] -> ORDER NOT GUARANTEED 
```

### OBJECT.ASSIGN ###

`Object.assign()` uses two objects and combines them together. That was a really oversimplified answer since there is a lot more that goes on under the hood, but generally that is the target solution this method is going for. You have a `target` object, so the object you want to copy into and a `source` object which is the object that is copied to the `target` object.

```javascript
const obj1 = {1: a, 2: b};
const obj2 = {1: c, 2: d};

const returned = Object.assign(obj1, obj2);

console.log(returned); //{1:a, 2:b, 3:c, 4:d} 
```

---

That's all for now. I will be expanding this post probably in the future or coming back and correcting mistakes since this topic is something I've been extensively learning about for the last year. The goal of the post was to refresh my memory on how these things work and to hopefully explain them in simple terms for people that are struggling to understand them. I highly recommend you also check [MDN](https://developer.mozilla.org/en-US/) for more detailed explanations for all of these functions and methods.

Thank you for reading!

[Follow me on Twitter](https://twitter.com/zasuh_).
[Github profile](https://github.com/zasuh).
[LinkedIn just because](https://www.linkedin.com/in/zasuhadolnik/).
