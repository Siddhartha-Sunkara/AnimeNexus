'use client'
import { useContext, createContext, useState} from "react";
import {auth} from '../../app/firebase'
import { useEffect } from 'react';
import { getAnime } from '../context/AuthContext';
import { UserAuth } from '../context/AuthContext';


const WishListContext = createContext();
export const WishListContextProvider = ({ children }) => {
    const user = auth.currentUser;
  const authContext = UserAuth();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      if ( user) {
        try {
          const animeData = await getAnime(user.uid);
          // console.log(animeData);
          const res= JSON.stringify(animeData)
          const res1 = JSON.parse(res);
        //   console.log("hello")
          setAnimeList(res1 || []); 
        //   console.log(animeList);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching anime data:", error);
          setLoading(false); 
      }}
      
    };
    
      fetchAnimeData();
   
    
  }, [authContext.isUserFetched , animeList]);
  return (
    <WishListContext.Provider value={{animeList}}>{children}</WishListContext.Provider>
  );
}

export const WishlistInfo = () => {
    return useContext(WishListContext);
  };


