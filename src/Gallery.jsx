import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './Context';
import axios from 'axios';


const Gallery = () => {
  const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`;
  console.log('key :',import.meta.env.VITE_API_KEY);
  const { searchText } = useGlobalContext();
  const response = useQuery( {
    queryKey: ['images', searchText],
    queryFn: async ()=> {
      const queryEndpoint = `${url}&query=${searchText}`
      console.log(queryEndpoint);
      const result = await axios.get(queryEndpoint);
      return result.data
    }
  })

  console.log('response :',response.isLoading)
  console.log('a');
  if(response.isLoading) {
    return ( <div>Loading...</div> )
  }

  if(response.isError) {
    return (<div>there was an error </div>)
  }

  if(response?.data?.results.length <= 0) {
    return (
      <div> No results found... </div>
    )
  }

  return (
    <>
      {
        response?.data?.results?.map((item, index) => {
          const image = item?.urls?.small;
          return (
            <img src={image}  key={index} />
            ) 
          })
      }
    </>
  )
}

export default Gallery;