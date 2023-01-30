import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LandingPage from './components/LandingPage/LandingPage.js';
import './App.css';

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
}


const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
const [theme, setTheme] = useState("light")
  
  return (
      <ThemeProvider theme={themes[theme]}>
         <LandingPage theme={theme} setTheme={setTheme}/>
      </ThemeProvider>
  );
}

export default App;
