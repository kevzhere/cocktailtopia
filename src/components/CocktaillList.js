import React from 'react'
import { useGlobalContext } from '../context';
import CocktailCard from './CocktailCard';
import Loading from './Loading';

export const CocktaillList = () => {
  const { cocktails, loading } = useGlobalContext();
  return (
    <div className='container'>
      <h2>Random Cocktails</h2>
      <div className='card-center'>
        {
          loading ? <Loading/> : cocktails.map((cocktail) => {
          return <CocktailCard key={cocktail.id} cocktail={cocktail}/>
        })}
      </div>
      
    </div>
  )
}
