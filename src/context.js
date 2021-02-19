import React, { useCallback, useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();
const urls = [
  {
    type: 'NAME',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  },
  {
    type: 'ID',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=',
  },
  {
    type: 'RANDOM',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  },
  {
    type: 'INGREDIENT',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
  }
]

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('RANDOM');
  const [cocktails, setCocktails] = useState([]);
  
  const fetchDrinks = useCallback( async () => {
    setLoading(true);
    try {
      const drinks = await getDrinks();
      if (drinks) {
        console.log('drinks');
        if (searchType === 'RANDOM') {
          console.log('random');
          const newCocktails = await getRandomCocktails(drinks);
          setCocktails(newCocktails);
        } else {
          setCocktails(extractCocktails(drinks));
        }
      } else {
        console.log('else');
        setCocktails([]);
      }
      setLoading(false)
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  }, [searchType])

  const getDrinks = async () => {
    let url = urls.find(url => url.type === searchType).url;
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    console.log('data', data);
    const { drinks } = data;
    return drinks || [];
  }

  const getRandomCocktails = async (drinks) => {
    const newCockTails = [].concat(extractCocktails(drinks));
    while (newCockTails.length < 2) {
      const drink = await getDrinks();
      const extractedDrink = extractCocktails(drink);
      newCockTails.push(extractedDrink[0]);
    }
    console.log('new cocktails', newCockTails);
    return newCockTails;
  }

  const extractCocktails = (cocktails) => {
    return cocktails.map(drink => {
      const { idDrink, strDrink, strCategory, strDrinkThumb, strAlcoholic, strGlass,
              strInstructions } = drink;
      let ingredientString = 'strIngredient';
      let count = 1;
      const ingredientInfo = [];
      while (drink[`${ingredientString}${count}`]) {
        ingredientInfo.push({
          [`ingredient${count}`]: drink[`${ingredientString}${count}`],
          [`measure${count}`]: drink[`strMeasure${count}`],
        })
        count++;
      }
      return {
        id: idDrink,
        name: strDrink,
        category: strCategory,
        image: strDrinkThumb,
        alcoholic: strAlcoholic,
        glass: strGlass,
        instructions: strInstructions,
        ingredientInfo,
      }
    });
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])

  return (
    <AppContext.Provider 
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        searchType,
        setSearchType,
        cocktails
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };