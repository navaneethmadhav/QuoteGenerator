import axios from 'axios'
import React,{useState, useEffect} from 'react'
import './Dropdown.css'
import { Table } from 'react-bootstrap'

function Dropdown(props) {

    const [tags, setTags] = useState([])
    const [singleTag, setSingleTag] = useState([])

    useEffect(function(){
        axios.get('https://api.quotable.io/tags')
        .then(response => setTags(response.data))
        .then(error => console.log(error))
    },[])

    const onddlChange = (e) =>{
        // alert(e.target.value)
        axios.get('https://api.quotable.io/random')
        .then(response => setSingleTag(response.data))
        .then(error => console.log(error))
        props.onData(singleTag)
    }

  return (
    <div className='select-container' onChange={onddlChange}>
        <select className='select-box'>
            <option value='0'>-- Select Tag --</option>
            {
                tags.map(tag =>
                    <option key={tag._id} value={tag._id}>{tag.name}</option>
                )
            }
        </select>

        {/* <Table striped bordered>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>Author</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{singleTag._id}</td>
                    <td>{singleTag.content}</td>
                    <td>{singleTag.author}</td>
                </tr>
            </tbody>
        </Table> */}
    </div>
  )
}

export default Dropdown