import { useContext } from "react"
import { ThemeContext } from "./App"

const FunctionalComponent = () => {
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#008080' : '#CCC',
    color: darkTheme ? '#CCC' : '#008080',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <div style={themeStyles}>
      Function Theme
    </div>
  )
}

export default FunctionalComponent
