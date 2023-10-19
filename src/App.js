import logo from "./logo.svg";
import "./App.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

function App() {
  const { systemTheme, theme, setTheme } = useTheme();

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun />;
    } else {
      return <FaMoon />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="dark:text-red-500 text-green-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {themeBox()}
      </button>
      </header>
      
    </div>
  );
}

export default App;
