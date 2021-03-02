import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const Cocktail = () => {
  const { id } = useParams();
  const { cocktails, setSearchType, setSearchTerm, loading } = useGlobalContext();
  const [ singleCocktail, setSingleCocktail ] = useState([]);

  useEffect(() => {
    setSearchTerm(id);
    setSearchType('ID');
    setSingleCocktail(cocktails[0] || []);
  }, [cocktails])

  return (
    <div className='container'>
      { loading ? <Loading/> : (
      <>
        <h2 className='flex'>{ singleCocktail.name }</h2>
        <div className='container flex'>
          <div className='column'>
            <img src={ singleCocktail.image } alt={ singleCocktail.name }/>
          </div>
          <div className='column'>
            <h4>{ singleCocktail.name }</h4>
            <p>{ singleCocktail.alcoholic }</p>
            <p>{ singleCocktail.category }</p>
            <p>{ singleCocktail.glass }</p>
            <h5>Ingredients</h5>
            <ul>
              { 
                singleCocktail.ingredientInfo?.map((ing, index) => {
                  return <li key={index}>{ing[`ingredient${index+1}`]}</li>
                })
              }
            </ul>
            <br/>
            <h5>Instruction</h5>
            <p>{ singleCocktail.instructions }</p>
          </div>
        </div>
      </>) }
    </div>
  )
}

export default Cocktail;