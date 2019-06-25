import React from 'react'
import { Link } from 'gatsby'
import Toggle from './ThemeToggler'

import { rhythm, scale } from '../utils/typography'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      theme : null
    }
  }
  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            textAlign: 'center',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Zane The Dev
          </Link>
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={this.state.theme === 'dark'}
            onChange={e =>
              window.__setPreferredTheme(
                e.target.checked ? 'dark' : 'light'
              )
            }
          >
          </Toggle>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
          <Toggle
            icons={{
              checked: (
                <img
                  src={moon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
              unchecked: (
                <img
                  src={sun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: 'none' }}
                />
              ),
            }}
            checked={this.state.theme === 'dark'}
            onChange={e =>
              window.__setPreferredTheme(
                e.target.checked ? 'dark' : 'light'
              )
            }
          >
          </Toggle>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          color: 'var(--textNormal)',
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
