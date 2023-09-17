"use client"
import React, { useContext, useState } from 'react'
import {auth} from '../../app/firebase'
import { useEffect } from 'react';
import { getAnime } from '../context/AuthContext';
import { UserAuth } from '../context/AuthContext';
import WishlistCard from '../../components/WishlistCard';
const page = () => {
  const user = auth.currentUser;
  const authContext = UserAuth();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted , setMounted]= useState(false);
  


  useEffect(() => {
    const fetchAnimeData = async () => {
      if ( user) {
        try {
          const animeData = await getAnime(user.uid);
          // console.log(animeData);
          const res= JSON.stringify(animeData)
          const res1 = JSON.parse(res);
          console.log(res1)
          setAnimeList(res1 || []); 
          setLoading(false);
        } catch (error) {
          console.error("Error fetching anime data:", error);
          setLoading(false); 
      }}
    };
    
      fetchAnimeData();
   
    
  }, [user,authContext.isUserFetched, animeList]);

console.log(animeList)
  return (
    <div className='text-white'>
      Wish list
      <div className='text-white'>
      {animeList.map((anime) => (
        <div key={anime.animeId}>{anime.animeId }</div>
      ))}

      <div className="w-full flex justify-center">
              <div className="flex flex-col md:flex-row flex-wrap  w-[80vw] gap-10 items-center px-0 sm:px-10 xl:px-20 justify-start">
                {/* <Searchbar onSearch={handleSearch}/> */}
                {Array.isArray(animeList) &&
                  animeList
                    .slice(0, 10)
                    .map((datas) => <WishlistCard key={datas.animeId} {...datas} />)}
              </div>
            </div>
    </div>
    </div>
  )
}

export default page
