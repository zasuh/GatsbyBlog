---
title: On learning... styled-components
date: "2019-12-27T06:20:32.169Z"
---

Usage of CSS in JS has gone up in the last few years with a ton of libraries coming out and frameworks adopting this new way of writing CSS. I only got exposed to this after making my first Gatsby site and discovering this weird new way of styling your content on the component level. Keep in mind this is just focusing on **styled-components** and a little on css in js as a whole, what I think about it and how I've learned and approached it.

## Resources

If you want to learn more about CSS-in-JS, what styled-components are and how to implement them I suggest the below links:

- [Why I write CSS in JS](https://mxstbr.com/thoughts/css-in-js)
- [The Road to Styled-Components: Styling Component Based Systems](https://youtu.be/BkgU_-KGK9w)
- [Glen Maddern - Styling React Apps with Styled Components](https://youtu.be/qu4U7lwZTRI?list=PLUGN6E1hHSUD92-Zd0-90Lc9i6KRRHSSR)
- [Styled components - official documentation](https://www.styled-components.com/docs)
- [Styling Gatsby sites with CSS-in-JS](https://www.gatsbyjs.org/docs/css-in-js/)

## Why learn it?

I never actually sat down and said I'm going to make something with styled-components, it just happened because I used a Gatsby theme that used them and just sort of went along with it. I always struggled with writing good CSS (I still can't do it don't get me wrong) and just viewed styled-components as maybe a better way of writing it.

It didn't take long for me to see the benefits of doing CSS this way. I never had to leave the component file to actually style anything. All the styles were on the component level along with the funcionality and JS. Yes I was one of the people who screamed *separation of concerns!!!*, but once you get used to it it's completely fine and you just forget about it. I do think it best suits React components. I haven't used the library in any other environment other than React so I wouldn't know how it fairs in Angular or Vue. It is framework agnostic tho.

It doesn't bring anything new to the table. It's just another way of writing CSS for web apps, based on opinions by a couple of developers how it should be done. It solves some minor problems, but in my opinion doesn't do anything new, just a different and new way of styling.

So why learn it?

- Makes styling React components super simple, without having to create external files or use CSS modules or preprocessors.
- At it's core it's still just CSS written on the component level. You don't have to use object notation because it leverages the power of template literals.
- Because it's template literals it also means it's JS, which again means you can write expressions and use variables in your styles without preprocessors.
- You avoid dead CSS more easily.
- Easier maintanance.

## Examples

Here is an example from a Gatsby site I'm currently working on:

```javascript
import React from 'react'
import styled from 'styled-components'
import { Layout, AboutHeader } from '../components'

import portrait from '../../content/assets/portrait.jpg'

const BG = styled.div`
  background-color: ${props => props.theme.colors.bg};
`

const Bio = styled.div`
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
`

const Portrait = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0 20px 0;
  width: 300px;
  filter: grayscale(100%);
`

const About = () => {
  const intl = useIntl()
  return (
    <Layout>
      <AboutHeader />
      <BG id="page-wrap">
        <Portrait src={portrait} alt="" />
        <Bio>Bio text</Bio>
      </BG>
    </Layout>
  )
}

export default About
```

In the markup I have a `div` tag and an `img` tag which are both styled using styled-components. It's very intuitive based on the markup what is what and finding the styles for the specific component is simple and easy. There is also some dynamic styling going on with the `BG` component where the `background-color` is dictated from props.

For more examples check out the resources links I provided at the beginning.

## Pain points

The same pain points that plague CSS are obviously still present here, but styled-components does bring a few new ones, at least to my workflow, and some that I personally haven't noticed, but are apparently pretty serious:

- Intellisense in VSCode for CSS is lost because you are using template literals. If there is some VSCode extension that I am not aware of please send it my way.
- Naming things becomes a pain when styling child components in parent components. You now have to name everything twice as a result.
- It is another new abstraction that you have to learn in order to keep up with the community.
- It doesn't really make you more productive.
- Apparently it does make your app or site a lot bigger and slower on some areas, but most of the performance issues are React related from what I've read.

## Ending notes
- I haven't tried Emotion, JSS or Aphrodite which are all CSS-in-JS libraries.
- I've only used styled-components on a Gatsby site, which does implement styling differently than maybe a classic React app.
- The site which I didn't use styled-components on isn't complicated and only requires some basic layout and other smaller CSS snippets. I also work on this site alone so I can't comment how styled-components works on a team based dynamic when code is shared.

Overall I enjoy writing my CSS with styled-components. I just wish intellisense would somehow be included or used, but I can't see how that would work.