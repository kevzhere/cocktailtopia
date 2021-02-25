import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({cocktail}) => {
  console.log('cocktail', cocktail)
  return (
    <article className='card'>
      <div className='img-container'>
        <img src={cocktail.image} alt={cocktail.name}/>
      </div>
      <div className='card-footer'>
        <h2>{ cocktail.name }</h2>
        <h4>{ cocktail.glass }</h4>
        <p>{ cocktail.alcoholic }</p>
        <Link to={`/cocktail/${cocktail.id}`} className='btn btn-primary'>
          Info
        </Link>
      </div>
    </article>
  )
}

export default CocktailCard;