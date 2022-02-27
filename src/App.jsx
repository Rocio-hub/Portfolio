import { useContext } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
