import { useState } from "react";
import "./QuoteCard.css";

const QuoteCard = ({ quote, isLoading, onNewQuote }) => {
  const [copying, setCopying] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${quote.content} - ${quote.author}`);
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 800);
  };

  return (
    <div className="quote-container">
      <h1 className="quote-title">Random Quote</h1>

      {isLoading ? (
        <p className="loading-text">Loading quote...</p>
      ) : (
        <>
          <blockquote className="quote-text">{quote.content}</blockquote>
          <cite className="quote-author">{quote.author}</cite>

          <div className="quote-actions">
            <div className="share-section">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `${quote.content} - ${quote.author}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="tweet-link"
              >
                Tweet
              </a>
            </div>

            <button
              onClick={copyToClipboard}
              className="action-button"
              disabled={isLoading}
            >
              {copying ? "Copied!" : "Copy to Clipboard"}
            </button>

            <button
              onClick={onNewQuote}
              className="action-button"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "New Quote"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteCard;
