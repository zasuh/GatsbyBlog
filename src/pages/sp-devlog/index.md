---
title: Gatsby Photography Site - Devlog Part 1
date: "2019-12-21T06:31:32.169Z"
---

For the past 4 months I have been slowly developing a new [website](https://github.com/zasuh/SuhadolnikPhoto) for my dad who is a professional photographer. His old site wasn't mobile friendly and in general just needed an update so I decided to step up and make him something more modern. My choice of framework is Gatsby, with a predefined template made by one of the members of the community which specifically tailors to sites showcasing large amounts of images.

The stack is as follows:

- React / Gatsby as a general front end.
- Styled-components for styling.
- Material UI Drawer component for the burger menu.
- react-awesome-slider for the picture carousels.
- gatbsy-plugin-intl for localization.
- Netlify for hosting and form handling.
- Prismic CMS for content management (as of writing this the CMS part hasn't been implemented).

Through these blog posts I want to focus on what has been done so far, pros / cons of working with Gatsby and just a general log of how the site got to where it is.

### Why Gatsby

Being a React developer and having already used Gatsby in the past for this blog, the natural choice for the site was also Gatsby. I simply thought the ecosystem was large enough to meet my needs as a developer. This is more true than not, but I still encountered a lot of issues when looking for solutions or answers to my questions. Gatsby does however have a pretty good documentation site where you can find answers about the core parts of the framework. For more specific questions I found opening an issue on GitHub to be the best option. They do have Discord and Spectrum servers, but those feel more like shouting into a void and hoping something answers back.

Apart from these issues Gatsby is a joy to use. It does force you into some directions many developers might not appreciate like relying on GraphQL for data management and primarily styling with styled-components, but I view this as a positive experience to a certain degree since learning new technologies does test your skills as a dev.

Gatsby also provides a huge array of plugins for different needs like image optimization, sourcing from a CMS or transforming a JSON file. The problem with these is that most aren't maintained by the Gatsby core team and rely heavily on community support leading to a few of them being deprecated or having deprecated features. This can put you in an awkward situation at times as I will describe later on.

### Using outside components

One of the bigger issues early on was figuring out how to display the images on the project level. The initial idea was to just display them on a grid, but that later evolved into using a carousel component for each project with which the user could scroll through the pictures. Doing some research I found a couple of react carousels before using one that seemed like a good fit. Here is where my first problems arose: using outside components built by other people with their own CSS causes a lot of headaches.

Because the pictures were all of different sizes the container of the carousel kept adjusting to the size which was annoying. The carousel didn't have swipe support and also looked terrible on mobile. I did manage to fix it after about a week of trying and felt satisfied with what I had. Later on I did discover `react-awesome-slider` which is indeed an awesome carousel component and replaced my previously used `react-responsive-carousel`. If you are in need of a carousel use `react-awesome-slider`. It might take a bit to adjust the CSS but once you do it's an awesome experience of 'It just works'.

Another huge issue was finding a `react-burger-menu` component that didn't completely break the site. Using `react-burger-menu` was a CSS nightmare which eventually led me to install **Material-UI** for their Drawer component (I know it's a bit overkill to use an entire component library for one component. I would've used their carousel component as well, but it's handled by a third party and doesn't even compare to `react-awesome-slider`). The Drawer component is working as intended and again 'It just works' after a few CSS touch ups.

### Localization

Since I'm from Slovenia I naturally had to implement a language switcher component and translate all text into both english and slovenian. Having never done localization before this was a bit scary, but at the same time exciting feature to add. Gatsby provides a few plugins such as `gatsby-plugin-l18n` and `gatsby-plugin-intl`. My first experience with `l18n` was not great. There were barely any provided examples for my use case even though this is the most popular plugin in the ecosystem. Switching to `intl` yielded for more positives experiences as I was able to translate components for EN and SL, while also adding a language switcher to my footer.

At the time of writing this I unfortunately haven't solved the issue with translating `.md` files. There is a [blog](https://hiddentao.com/archives/2019/05/07/building-a-multilingual-static-site-with-gatsby) which did it with `gatsby-plugin-intl`, but it's a bit confusing so as of right now some hacks have been implemented to using static translations. Hopefully one day I will dive in and try to make it work, because I don't feel like I'm satisfied with the way it's implemented now.

### What still needs to get done

Some of the features that still need work or haven't been done as of writing:

- Integrating a headless CMS for uploading pictures.
- Lots of styling fixes.
- Setting up the domain name and DNS on netlify.

These will be done by the next blog post.
