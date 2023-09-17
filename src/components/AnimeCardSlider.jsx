import React from 'react'
import Image from 'next/image'
const AnimeCardSlider = ({anime}) => {
    console.log(anime.id)
  return (
    <>
    
      <Image src={anime.coverImage.extraLarge} alt={anime.id} width={1080} height={1080} className='object-cover h-64 w-48'/>
      {/* <p className='text-[10px]'>{anime.title.english || anime.title.ramoji || anime.title.native}</p> */}
      </>
  )
}

export default AnimeCardSlider
