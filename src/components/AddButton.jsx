// components/AddToWishlistButton.js
"use client";
import { addAnimeToWishlist } from "../app/context/AuthContext"; // Import your function for adding anime to the wishlist

const AddToWishlistButton = ({ animeId, animeTitle, imageURL }) => {
  const handleAddToWishlist = () => {
    // Call your function to add the anime to the wishlist based on the animeId
    addAnimeToWishlist(animeId, animeTitle, imageURL);
  };
  // console.log(animeId, animeTitle , imageURL);

  return (
    <>
    <button
      onClick={handleAddToWishlist}
      className="bg-[#7053ff]  text-sm md:text-base lg:text-base xl:text-base xl:mx-5 font-semibold h-8 md:h-12 rounded-lg text-black"
    >
      <p className="w-full h-full flex items-center justify-center">
        Add to Wishlist
      </p>
    </button>
   </>
  );
};

export default AddToWishlistButton;
