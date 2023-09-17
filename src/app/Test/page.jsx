
import React  from 'react'
// import { UserAuth } from '../context/AuthContext'
import Image from 'next/image';
import AnimeCardSlider from '../../components/AnimeCardSlider'
import AnimeBanner from '../../components/AnimeBanner'
async function getAnimeData() {
  const query = `
  {
    Page(page:1 perPage:20)
    {
      media(sort:SCORE_DESC , type:ANIME) {
        id
        title{
          english
          romaji
          native
        }
        type
        episodes
        duration
        averageScore
        genres
        description
        recommendations {
          edges {
            node {
              id
            }
          }
        }
        bannerImage
        popularity
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
  `;

  const variables = {
    id: 15125
  };

  const url = 'https://graphql.anilist.co';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  };

 
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    } 
    const data = result.data.Page.media;
    return data;
  
};

export default async function page() {
const data=  await getAnimeData()

// console.log(data, "anime" , Array.isArray(data));
  return (
   <div className='flex flex-col gap-2 p-5'>
    <div className="text-white flex  font-['dark'] text-3xl items-end justify-between">
      <p> Top Anime of All Time</p>
      <p className='text-xl'> View All</p>
    </div>
    <div className='text-white w-full  flex gap-8 items-center '>
      
      {/* {
        
        Array.isArray(data) && 
        data.map((anime , index )=>(
          <>
          <ul>
          <li key={anime.title?.english || anime.title?.native || anime.title?.ramoji}>{anime.id}</li>
            <li key={index}>{anime.title?.english || anime.title?.native ||anime.title?.ramoji}</li>
            <div key={index} className={`h-96 w-56 bg-[${anime.coverImage.color }]`}>

            <Image src={anime.coverImage?.extraLarge} alt={anime.title?.english || anime.title?.native ||anime.title.ramoji} width={200} height={200} className='h-full w-full'/>
            </div>
            <li key={index}>{anime.averageScore/10}</li>
            <li key={index}>{anime.description}</li>
          </ul>
          </>
        ))
      } */}
        {Array.isArray(data) &&
        data.slice(0,5).map((anime)=>(
          
          <div className='flex flex-col gap-10'>

          <AnimeCardSlider anime ={anime}/>
          <AnimeBanner anime={anime}/>
          </div>
          
          
        ))
        }

    </div>
    </div>
  )
}


