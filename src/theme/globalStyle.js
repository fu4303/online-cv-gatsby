import { createGlobalStyle, css } from 'styled-components'

export const themes = {
  theme1: {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#4A4A4A',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontHeader: 'Nunito, sans-serif',
    fontBody: 'Poppins, sans, sans-serif',
    fontDark: '#34434b',
    fontLight: '#586368',
  },

  theme2: {
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#f16623',
    light: '#f5f5f5',
    dark: '#505050',
    background: '#e6e6e6',
    foreground: '#f7f0f0',
    border: '#054545',
    fontHeader: 'Open Sans, sans, sans-serif',
    fontBody: '"Titillium Web", sans-serif',
    fontDark: '#034544',
    fontLight: '#596869',
  },

  theme3: {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#4A4A4A',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontHeader: '"Titillium Web", sans-serif',
    fontBody: 'Open Sans, sans, sans-serif',
    fontDark: '#34434b',
    fontLight: '#586368',
  },
}

const fonts = () => {
  const list = [
    'Open+Sans:400,700|',
    'Titillium+Web:400,700|',
    'Nunito:400,700|',
    'Poppins:400,700',
  ]
  return list.join('')
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=${fonts()}');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    /* word-wrap: break-word; */
    line-height: 1.85rem;
    letter-spacing: 0.06rem;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;  
  }
`

const sizes = {
  monitor: 1800,
  giant: 1500,
  desktop: 992,
  tablet: 768,
  phone: 376,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
