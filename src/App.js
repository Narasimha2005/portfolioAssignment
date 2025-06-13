import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import ThemeContext from './context/ThemeContext'

const App = () => {
  const [theme, setTheme] = useState('light')
  const setContextTheme = () => {
    setTheme(prev => prev==='light'?'dark':'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setContextTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
};

export default App;
