import React from 'react';
import { useGlobalContext } from './Context';

const SearchForm = () => {
  const {setSearchText} = useGlobalContext();

  const changeState = (event) => {
    event.preventDefault();
    const value = event.target.elements.search.value;
    if(!value) return
    setSearchText(value);
  }

  return (
    <div>
        <form onSubmit={changeState}>
           <input type="text" name='search' placeholder='cat'  />
           <button type='submit'>search</button>
        </form>
    </div>
  )
}

export default SearchForm;