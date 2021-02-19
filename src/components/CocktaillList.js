import React from 'react'
import { useGlobalContext } from '../context';

export const CocktaillList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log('cocktails', cocktails);
  return (
    <div>
      
    </div>
  )
}
