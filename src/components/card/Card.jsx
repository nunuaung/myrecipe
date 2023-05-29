import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({recipe}) => {
  return (
    <Link to={"/recipe/"+recipe.id}>
      <div className='card'>
        <img src={recipe.image} alt={recipe.title}/>
        <h3 className='card_title'>{recipe.title}</h3>
        <div className='gradient'/>
      </div>
    </Link>
  )
}

export default Card
