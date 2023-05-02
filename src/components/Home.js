import React, {useState, useEffect} from 'react'
import './Home.css'
import { FaBookmark } from "react-icons/fa";

const Home = () => {

    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(()=>{
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote)=>{
                setQuote(quote.content)
                setAuthor(quote.author)
            }
        )
    },[])

    let fetchNewQuote = () =>{
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote)=>{
                setQuote(quote.content)
                setAuthor(quote.author)
            }
        )
    }

  return (
    <div className='container' sm={12} md={6} lg={4} xl={3}>
        <div className='quote'>
            <h4>{quote}</h4>
            <br/>
            <p>{author}</p>
            <FaBookmark className='bookmark-icon'/>
        </div>
        <br/>
        <button className='quote-btn' onClick={fetchNewQuote}>Next Quote</button>
    </div>
  )
}

export default Home