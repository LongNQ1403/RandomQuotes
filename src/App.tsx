import { useState } from 'react'
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css'
//interface dùng để định nghĩa 1 cấu trúc, nó tương tự như Class trong Java ý
interface Quote {
  quote: string;
  author: string;
}
// Hàm này sẽ trả ra cho chúng ta 1 đối tượng quote có 2 thuộc tính là quote và author. 
const getRandomQuote = (): Quote => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}
// Hàm này sẽ trả về 1 chuỗi rgb
const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
}
// Đây là functional component nè để render
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());// quote is state and setQuote is setState
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());// so on
  
  const changeQuote = () => {// Hàm này sẽ được thực thi khi mà người dùng click vào button Change Quote
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return ( // Trả về JSX
    <div className='background' style={{ backgroundColor: randomColor }}>
      <div id="quote-box" style={{ backgroundColor: "white" }}>
        <div className="quote-content" style={{ color: randomColor }}>
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote.quote}</h2>
          <FaQuoteRight size="30" style={{ marginRight: "10px" }} />
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a href={`twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id='tweet-quote' style={{
            backgroundColor: "#1DA1F2",
            marginRight: "10px",
            marginTop: "100px"
          }} >
            <FaTwitter color="white" />
          </a>
          <button style={{color:"white",height:"42px",marginBottom:"12px"}} id='new-quote' onClick={changeQuote}>New Quote</button>
        </div>
      </div>
    </div >
  )
}

export default App
