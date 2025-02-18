import { useContext } from "react";
import { ThemeContext, UserContext } from "../App";

const CardC = () => {
  const { message, setMessage } = useContext(UserContext);

  const { theme, setTheme } = useContext(ThemeContext);

  const handleMessage = () => {
    setMessage("Context Updated");
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleMessage}>Update Message</button>

      <div>
        <h1>{theme}</h1>
        <button onClick={handleThemeToggle}>Theme Toggle</button>
      </div>
    </div>
  );
};

export default CardC;
