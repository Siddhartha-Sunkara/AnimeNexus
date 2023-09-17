// components/AddToWishlistButton.js
"use client"
import { addAnimeToWishlist } from '../app/context/AuthContext'; // Import your function for adding anime to the wishlist

const AddToWishlistButton = ({ animeId , animeTitle, imageURL}) => {
  const handleAddToWishlist = () => {
    // Call your function to add the anime to the wishlist based on the animeId
    addAnimeToWishlist(animeId, animeTitle, imageURL);
  };

  return (
    <button onClick={handleAddToWishlist}>Add to Wishlist</button>
  );
};

export default AddToWishlistButton;
