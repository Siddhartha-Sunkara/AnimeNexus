"use client";
import { useContext, createContext, useState, useEffect } from "react";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import config from '../firebase'
import { doc, setDoc,getDoc, updateDoc, arrayUnion , arrayRemove} from 'firebase/firestore';

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserFetched , setIsUserFetched]= useState(false);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user assigned")
      setIsUserFetched(true)
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  return (
    <AuthContext.Provider value={{ user , isLoading, googleSignIn , logOut, isUserFetched}}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

// Add anime to wishlist with title and imageUrl
export const addAnimeToWishlist = async (animeId, animeTitle, imageURL) => {
  const user = auth.currentUser;
  
  if (user) {
    const userId = user.uid;

    try {
      const docRef = doc(config.db, "wishlists", userId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(config.db, "wishlists", userId), {
          animeList: [],
        });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    try {
      await updateDoc(doc(config.db, "wishlists", userId), {
        animeList: arrayUnion({ animeId, animeTitle, imageURL })
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    // Handle the case where there is no authenticated user
    console.error('No authenticated user');
  }
};

// Retrieve wishlist with anime details
export async function getAnime(uid) {
  try {
    const docRef = doc(config.db, "wishlists", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.animeList || [];
    }
  } catch (e) {
    return e;
  }
}

// Remove anime from wishlist
export async function removeAnime(animeId) {
 
  const user = auth.currentUser;
  console.log("1");

  if (user) {
    const userId = user.uid;

    try {
      const docRef = doc(config.db, "wishlists", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const updatedAnimeList = docSnap.data().animeList.filter(
          (anime) => anime.animeId !== animeId
        );

        await updateDoc(docRef, {
          animeList: updatedAnimeList,
        });
        console.log("Anime removed successfully");
        
      }
      
    } catch (e) {
      console.error("Error removing anime: ", e);
    }
  } else {
    // Handle the case where there is no authenticated user
    console.error('No authenticated user');
  }
}






