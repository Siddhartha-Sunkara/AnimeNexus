// components/AddToWishlistButton.js
"use client";
import { addAnimeToWishlist, removeAnime } from "../app/context/AuthContext"; // Import your function for adding anime to the wishlist
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import { UserAuth } from "../app/context/AuthContext";
import { auth } from "../../src/app/firebase";
import { WishlistInfo } from "../app/context/WishListContext";
import RemoveAnime from "./RemoveButton";

const AddToWishlistButton = ({ animeId, animeTitle, imageURL }) => {
  const user = auth.currentUser;
  const authContext = UserAuth();
  const wishlist = WishlistInfo();
  const router = useRouter();
  // console.log(wishlist.animeList)

  const handleRemoveFromWishlist = async () => {
    // Call your function to add the anime to the wishlist based on the animeId
    await removeAnime(animeId);
    toast.success("Successfully removed from Wishlist!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    router.refresh();
  };
  const isAnimeInWishlist = wishlist.animeList.some(
    (item) => item.animeId === animeId
  );
  const handleAddToWishlist = () => {
    // Call your function to add the anime to the wishlist based on the animeId
    if (user) {
      addAnimeToWishlist(animeId, animeTitle, imageURL);

      toast.success("Successfully Added to Wishlist!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Please Login!", {
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
      {isAnimeInWishlist ? (
        <button
          onClick={handleRemoveFromWishlist}
          className="bg-[#7053ff]  text-sm md:text-base lg:text-base xl:text-base xl:mx-5 font-semibold h-8 md:h-12 rounded-lg text-black"
        >
          Remove from Wishlist
        </button>
      ) : (
        <button
          onClick={handleAddToWishlist}
          className="bg-[#7053ff]  text-sm md:text-base lg:text-base xl:text-base xl:mx-5 font-semibold h-8 md:h-12 rounded-lg text-black"
        >
          <p className="w-full h-full flex items-center justify-center">
            Add to Wishlist
          </p>
        </button>
      )}
    </>
  );
};

export default AddToWishlistButton;
