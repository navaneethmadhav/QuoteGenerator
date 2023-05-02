import axios from 'axios'
import React,{useState, useEffect} from 'react'
import './Dropdown.css'

function Dropdown() {

    const [tags, setTags] = useState([])

    useEffect(function(){
        axios.get('https://api.quotable.io/tags')
        .then(response => setTags(response.data))
        .then(error => console.log(error))
    },[])

  return (
    <div className='select-container'>
        <select className='select-box'>
            <option value='0'>-- Select Tag --</option>
            {
                tags.map(tag =>
                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                )
            }
        </select>
    </div>
  )
}

export default Dropdown