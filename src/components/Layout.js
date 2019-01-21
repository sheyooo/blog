import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components';
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    let linkComponent =
      <Link 
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }} to={`/`}
      >
        {title}
      </Link>

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {linkComponent}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          {linkComponent}
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div>
          {header}
          {children}
        </div>
        <footer style={{marginTop: rhythm(1)}}>
          <ul style={{margin: 0}}>
            <FooterListItem><a href="https://sheyiadekoya.me" target="_blank" rel="noopener noreferrer">About Me</a></FooterListItem>
            <FooterListItem><a href="https://mobile.twitter.com/sheyooo" target="_blank" rel="noopener noreferrer">Twitter</a></FooterListItem>
            <FooterListItem><a href="https://github.com/sheyooo" target="_blank" rel="noopener noreferrer">Github</a></FooterListItem>
          </ul>
        
          <p style={{color: '#555', marginBottom: 0}}>
            © {new Date().getFullYear()}, Made with ❤️ in 🇳🇬
          </p>
        </footer>
      </div>
    )
  }
}

const FooterListItem = styled.li`
  ::before {
    content: "• ";
  }

  display: inline-block;
  margin-right: 1em;
`;

export default Layout
