import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Written by <strong>Žane Suhadolnik</strong> who lives and works in
          Ljubljana, Slovenia. Web dev, game dev, friends, music.{' '}
          <a href="https://twitter.com/zasuh_">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
