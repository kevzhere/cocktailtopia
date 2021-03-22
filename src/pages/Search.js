import React, { useEffect, useRef, useState } from 'react'
import Select from 'react-dropdown-select'
import { CocktaillList } from '../components/CocktaillList';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const Search = () => {
  const { setSearchType, setSearchTerm, loading } = useGlobalContext();
  const searchBox = useRef('');
  const [ searchTerm, updateSearchTerm ] = useState('');
  const options = [
    { value: 'NAME', label: 'Name' },
    { value: 'INGREDIENT', label: 'Ingredient' },
  ]


  const updateSearchType = (type) => {
    setSearchType(type);
  } 

  useEffect(() => {
    setSearchType('NAME');
    searchBox.current.focus();
  },[])

  const search = () => {
    setSearchTerm(searchTerm);
  }

  return (
    <div className='container'>
      <h2 className='flex'>Find your Dream</h2>
      <div className='select-bar flex'>
        <Select
          options={options}
          portal={typeof document !== `undefined` && document.body}
          values={[{ value: 'NAME', label: 'Name'}]}
          onChange={(value) =>updateSearchType(value[0].value)}
        />
        <input 
          className='text-input' 
          type='text' 
          ref={searchBox} 
          onChange={(v) => updateSearchTerm(v.target.value)}
        />
        <button className='btn btn-secondary' onClick={search}>Search</button>
      </div>
        <div className='flex flex-column'>
          <h2>Cocktails</h2>
          { loading ? <Loading/> : <CocktaillList/>}
        </div>
    </div>
  )
}

export default Search;
