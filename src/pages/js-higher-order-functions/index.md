---
title: Manipulation of Arrays and Objects with higher order functions [UNFINISHED]
date: "2019-07-28T06:20:32.169Z"
---

I don't think I ever got any more gittier than the time I figured out how to use higher order functions on Arrays and Objects. It was one of the best revelations in my JS learning career and are essential for understanding modern Javascript.

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

Thank you for reading!

[Follow me on Twitter](https://twitter.com/zasuh_).
[Github profile](https://github.com/zasuh).
[LinkedIn just because](https://www.linkedin.com/in/zasuhadolnik/).
