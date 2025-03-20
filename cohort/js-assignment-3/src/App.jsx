import { useEffect, useState } from "react";
import { image } from "./utils/image";
import QuoteCard from "./components/QuoteCard";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes/quote/random"
      );
      const response = await data.json();
      setQuote(response.data);

      const randomIndex = Math.floor(Math.random() * image.list.length);
      setBackgroundImage(image.list[randomIndex]);
    } catch (err) {
      console.error("Error fetching quote:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <QuoteCard quote={quote} isLoading={isLoading} onNewQuote={fetchData} />
    </div>
  );
}

export default App;
