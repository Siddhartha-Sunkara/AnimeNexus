import React from 'react'
import Image from 'next/image'
const AnimeBanner = ({anime}) => {
  return (
    <>
    
    <Image src={anime.bannerImage} alt={anime.id} width={1080} height={1080} className='object-cover h-48 w-96'/>
    {/* <p className='text-[10px]'>{anime.title.english || anime.title.ramoji || anime.title.native}</p> */}
    </>
  )
}

export default AnimeBanner
