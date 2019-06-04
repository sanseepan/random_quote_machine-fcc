import React from 'react';

const QuoteBox = (props) => {
  const quote = props.quote;
  return(
  <div id="quote-box" className ="quote-box">
    <div id="text" className ="text">{quote.quote}</div>
    <div id="author" className="author">- {quote.author}</div>

    <div className="button-group">
    <span className="share-btn">
       <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" className="tweet-quote"><img src="https://img.icons8.com/color/48/000000/twitter.png"/></a>
    </span>
        <button onClick= {props.handleNewQuote} id="new-quote" className="btn-primary">New quote</button>
    </div>
  </div>
  )
}

export default QuoteBox;