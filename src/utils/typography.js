import Typography from 'typography'
import FairyGates from 'typography-theme-fairy-gates'
import './global.css';

FairyGates.overrideThemeStyles = () => {
  return {
    'h1,h3': {
      color: 'rebeccapurple'
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'a': {
      color: 'rebeccapurple',
      textDecoration: 'underline double',
      background: 'none',
      textShadow: 'none'
    },
    'blockquote': {
      borderLeftColor: 'rebeccapurple'
    }
  }
}

// delete FairyGates.googleFonts

const typography = new Typography(FairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
