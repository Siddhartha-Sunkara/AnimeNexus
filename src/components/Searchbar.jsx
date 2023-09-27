"use client"
import React,{useState} from 'react'
import useSWR from 'swr'
const Searchbar = () => {
  const [searchTerm, setSearchTerm] =useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
   
    // console.log(data);
  }
  const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${searchTerm}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cd376e17c3msh4106435b62c3cc5p198fe9jsnb7b4b0796591',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  const fetcher = async () => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
  
    return response.json();
  };
  
  const { data, error } = useSWR(`https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${searchTerm}` , fetcher);
  
   
  return (
      // <form onSubmit={handleSubmit} className='w-[100%] flex items-center justify-center'>
      // <div className="search w-[50%]  ">
      //       <input onChange={} type="text" value={ searchTerm} className="search__input h-[100%]" placeholder="Type your text" />
      //       <button type='submit' className="search__button ">
      //         <svg className="search__icon " aria-hidden="true" viewBox="0 0 24 24">
      //           <g>
      //             <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
      //           </g>
      //         </svg>
      //       </button>
      //     </div>
      //     </form>
      <></>
  )
}

export default Searchbar

