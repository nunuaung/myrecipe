import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {GiChopsticks, GiNoodles} from "react-icons/gi";
import { Link } from 'react-router-dom';
import "./Categories.css";
import Home from '../../pages/Home';

const Categories = () => {
  return (
      <div className='categories flex_center'>
        <Link to={`/cuisine/Italian`} className='category'>
            <FaPizzaSlice className='category_icon'/>
            <h4 className='category_title'>Italian</h4>
        </Link>
        <Link to={`/cuisine/American`} className='category'>
            <FaHamburger className='category_icon'/>
            <h4 className='category_title'>American</h4>
        </Link>
        <Link to={`/cuisine/Thai`} className='category'>
            <GiNoodles className='category_icon'/>
            <h4 className='category_title'>Thai</h4>
        </Link>
        <Link to={`/cuisine/Japanese`} className='category'>
            <GiChopsticks className='category_icon'/>
            <h4 className='category_title'>Japanese</h4>
        </Link>
      </div>
  )
}

export default Categories
