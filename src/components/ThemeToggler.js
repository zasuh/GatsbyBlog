import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { rhythm, scale } from '../utils/typography'

export default class Toggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label
            style={{
              marginTop: 0,
              marginBottom: rhythm(-1),
              marginLeft : rhythm(9),
          }}>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}