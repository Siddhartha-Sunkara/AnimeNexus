// components/AddToWishlistButton.js
"use client"
import { addAnimeToWishlist, removeAnime } from '../app/context/AuthContext'; // Import your function for adding anime to the wishlist
import { useRouter } from 'next/navigation'
const RemoveAnime = ({ animeId}) => {
  const router = useRouter()
  const handleRemoveFromWishlist = async () => {
    
    // Call your function to add the anime to the wishlist based on the animeId
    await removeAnime(animeId);
    router.refresh();
     
  };

  return (
    <button onClick={handleRemoveFromWishlist}>Remove from Wishlist</button>
  );
};

export default RemoveAnime;
