import React from 'react'
import { useGlobalContext } from '../context';
import CocktailCard from './CocktailCard';

export const CocktaillList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log('cocktails', cocktails);
  return (
    <div className='container'>
      <h2>Random Cocktails</h2>
      <div className='card-center'>
        {cocktails.map((cocktail) => {
          return <CocktailCard key={cocktail.id} cocktail={cocktail}/>
        })}
      </div>
      
    </div>
  )
}
