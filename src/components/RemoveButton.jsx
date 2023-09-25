"use client"
import { addAnimeToWishlist, removeAnime } from '../app/context/AuthContext'; // Import your function for adding anime to the wishlist
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';

const RemoveAnime = ({ animeId}) => {
  const router = useRouter()
  const handleRemoveFromWishlist = async () => {
    
    // Call your function to add the anime to the wishlist based on the animeId
    await removeAnime(animeId);
    toast.success('Successfully removed from Wishlist!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    // router.refresh();
     
  };

  return (
    <button onClick={handleRemoveFromWishlist} className='bg-[#7053ff] text-sm md:text-base lg:text-lg xl:text-[22px] font-bold h-8 md:h-12 w-full rounded-lg my-5 text-black'>Remove from Wishlist</button>
  );
};

export default RemoveAnime;
