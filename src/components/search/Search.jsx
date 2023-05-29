import React, { useState } from 'react'
import "./Search.css"
import { FaSearch } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { Navigate, useNavigate } from 'react-router-dom'

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const closeHandler = ()=>{
        setInput("");
    }

    const formHandler = (e)=>{
        e.preventDefault();
        navigate(`/search/${input}`);
    }
  return (
    <>
      <form className='search_form' onSubmit={formHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <FaSearch className='search_icon'/>
        <AiOutlineClose className='close_icon' onClick={closeHandler}/>
      </form>
    </>
  )
}

export default Search
