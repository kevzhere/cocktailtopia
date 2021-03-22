import React from 'react'
import { useGlobalContext } from '../context';
import CocktailCard from './CocktailCard';
import Loading from './Loading';

export const CocktaillList = () => {
  const { cocktails, loading } = useGlobalContext();
  const renderCocktails = () => {
    if (cocktails.length < 1) {
      return <p>NO COCKTAILS FOUND</p>;
    }
    return cocktails.map((cocktail) => 
      <CocktailCard key={cocktail.id} cocktail={cocktail}/>
    );
  }
  return (
    <div className='container'>
      <div className='card-center'>
        { loading ? <Loading/> : renderCocktails() }
      </div>
    </div>
  )
}
