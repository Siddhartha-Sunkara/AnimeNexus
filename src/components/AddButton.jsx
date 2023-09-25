// components/AddToWishlistButton.js
"use client";
import { addAnimeToWishlist } from "../app/context/AuthContext"; // Import your function for adding anime to the wishlist
import { ToastContainer, toast } from 'react-toastify';
import { UserAuth } from '../app/context/AuthContext';
import {auth} from '../../src/app/firebase'


const AddToWishlistButton = ({ animeId, animeTitle, imageURL }) => {
  const user = auth.currentUser;
  const authContext = UserAuth();
  const handleAddToWishlist = () => {
    // Call your function to add the anime to the wishlist based on the animeId
    if(user){
      addAnimeToWishlist(animeId, animeTitle, imageURL);

      toast.success('Successfully Added to Wishlist!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
    else{
      toast.error('Please Login!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
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
