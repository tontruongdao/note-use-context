import { useTheme, useThemeUpdate } from "./ThemeContext"

const FunctionalComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#008080' : '#CCC',
    color: darkTheme ? '#CCC' : '#008080',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <div style={themeStyles}>
        Function Theme
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default FunctionalComponent
