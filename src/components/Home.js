import React from 'react'
import { CocktaillList } from './CocktaillList';
import Loading from './Loading';

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1>Cocktails</h1>
        <p>A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added</p>
      </div>
      <CocktaillList/>
    </>
  )
}

export default Home;