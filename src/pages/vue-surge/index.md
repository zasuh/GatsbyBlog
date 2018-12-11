---
title: Hosting a VueJS app with Surge.sh
date: "2018-12-11T22:40:32.169Z"
---
![Surge.sh](surge.png)

[Originally posted on Medium](https://medium.com/@zanethedev/hosting-a-vuejs-app-with-surge-sh-27c4513fdda0)

As a newbie web developer you get easily overwhelmed with the abundance of front-end frameworks.
Everyone kept telling me to just learn React since it’s the most popular right now and to forget Angular.
I tried React and couldn’t understand what was going on, same with Angular. Both had really bad documentation for a
beginner (personal opinion) so I decided to venture into a hot new thing called Vue.

The only thing that was bothering me is that there weren’t some really simple guides on how to actually host your Vue apps.
A lot of them were complex and required a lot of prior knowledge to even get started.

* Well you don’t have to worry anymore. Simply download and install http://surge.sh/ or run `npm install -g surge`
* Once you’ve done that go to your Vue directory a.k.a the folder where you have all your Vue code and run `npm run build`.
* This will build your app for production and create a “dist” folder in your root directory. Once it finishes, move into the “dist” folder and run `surge`.
* It will probably ask you for an email and password. Enter whatever you need and press enter. After that it will ask you for the directory path. This should be the “dist” folder from the Vue app. Press Enter again.
* Next the Surge CLI tool will generate a random domain name `<random-name>.surge.sh` usually. You can move with the arrow keys over the random name and change it to whatever you want.
* After that? You guessed it. You press enter and your app is live at the name you registered it at. For example here is a simple Vue To Do app I made: http://vue-todo-test.surge.sh/#/ which is hosted with Surge.

Ok I hope you got something from this on how to host your apps. This probably works with every other framework out there and it’s by far the easiest and simplest way to publish your apps.

[Follow me on Twitter](https://twitter.com/zasuh_).
[Github profile](https://github.com/zasuh).
[LinkedIn just because](https://www.linkedin.com/in/zasuhadolnik/).
