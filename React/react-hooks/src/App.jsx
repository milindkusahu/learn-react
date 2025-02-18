import { createContext, useState } from "react";
import CardA from "./components/CardA";

/**
 * Step 1: create Context
 * Step 2: Wrap all the clid components in the Provider
 * Step 3: Pass the value to the Provider
 * Step 4: Consume the value in the child component
 */
const UserContext = createContext();
const ThemeContext = createContext();

const App = () => {
  const [message, setMessage] = useState("Context Working");
  const [theme, setTheme] = useState("light");

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000000" }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ message, setMessage }}>
          <CardA />
        </UserContext.Provider>
      </ThemeContext.Provider>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
export { UserContext };
export { ThemeContext };
