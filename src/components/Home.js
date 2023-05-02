import React, {useState, useEffect} from 'react'
import './Home.css'
import Dropdown from './Dropdown';

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
    <div className='container'>
        <div className='quote'>
            <h4>{quote}</h4>
            <br/>
            <p>{author} <FaBookmark className='bookmark-icon'/></p>
            
        </div>
        <Dropdown/>
        <br/>
        <button className='quote-btn' onClick={fetchNewQuote}>Next Quote</button>
    </div>
  )
}

export default Home