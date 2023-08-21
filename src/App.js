import React,{useState,useEffect} from 'react'
import "./App.css";

const App = () => {
  
  const [quotes,setQuotes] = useState([]);

const getQuotes = async () =>{
      const response = await fetch("https://type.fit/api/quotes");
    let realData = await response.json()
      // console.log(realData[18].text);
      const random = Math.floor(Math.random() * 1642);
      const updatedData = realData[random];

      setQuotes(updatedData);
    
}

const quoteHandler = ()=>{
  getQuotes();
}

const tweetHandler = ()=>{
  const tweetPost = `https://twitter.com/intent/tweet?text=${quotes.text}`;
  window.open(tweetPost);
}

  useEffect(() => {
   getQuotes();
  }, []);  

  
  return (
    <div className='container main App'>
<div class="card mt-5">
  <div class="card-header bg-danger text-light font-weight-bold">
    <p className='font-italic text-center'>Ashar OP Quote Generator</p>
  </div>
  <div class="card-body mt-5">
    <blockquote class="blockquote mb-0" style={{height:"200px"}}>
      <p>{quotes.text}</p>
      <footer class="blockquote-footer">By <cite title="Source Title">{quotes.author}</cite></footer>
    <button className='btn btn-success' onClick={quoteHandler}>New Quote Generate</button>
     <br/>
     <br/>
    <button className='btn btn-primary' onClick={tweetHandler}>Tweet Quote</button>
    </blockquote>
  </div>
</div>
    </div>
  )
}

export default App