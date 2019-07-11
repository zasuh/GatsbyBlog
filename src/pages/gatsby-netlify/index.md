---
title: Deploying a Gatsby blog to Netlify
date: "2019-06-23T09:55:32.169Z"
---

I haven't written a blog post in a while and in that time my JS and general programming skills have grown.
I decided to dive deep once again into Gatsby and create some content for the site. What I've done so far
is changed my blogs theme and I'm also in the process of adding a toggle button for light/dark mode. In this
process I also decided to host the blog on Netlify since I've been hearing nothing but good things about how
quickly you can deploy a site on there. Let me tell you that it is stupidly simple.

What you will need is a Gatsby site or any other static site or maybe web app you are working on and a Github/Gitlab/BitBucket account where you push your code and do source control.

---

This blog for instance has in its root directory a `public` folder. This folder contains all blog posts, styles and built
JS files which are used to create the site. If you don't know, when you build a JS app you use some sort of build process
or tool like webpack or an npm script, which optimizes the code for better performance. Essentially turning it from human
readable code to computer readable code. The code then lives in the public folder (usually). So whenever you are deploying something to a server you are using that `public` folder.

So once you finished building your app and have a `public` and/or `build`/`disc` folder you should push that to your remote repository on whatever hosting site you are using (my choice is GitHub). Once you have your code pushed head over to netlify.com. You can push to Netlify to deploy to a custom domain (mine being zanedev.netlify.com).

Login to your netlify account and drag and drop that `public` folder into the window. Then go to `site settings` of that site and at the left menu choose `Build and deploy`. There you can configure your `Build settings` to point to your remote repo, choose your build command so Netlify can build the app for you and choose your git branch. Now for every change you do to your repo or push that you commit Netlify will automatically build and update your site.

Thank you for reading!


[Follow me on Twitter](https://twitter.com/zasuh_).
[Github profile](https://github.com/zasuh).
[LinkedIn just because](https://www.linkedin.com/in/zasuhadolnik/).
