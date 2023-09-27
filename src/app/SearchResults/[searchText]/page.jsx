import React from 'react'
import { searchAnime } from '../../../lib/Calls'
import ResultCard from '../../../components/ResultCard'
import AnimeCardSlider from '../../../components/AnimeCardSlider';
export default async function SearchResults({params}) {
  const searchText = params.searchText;
  // console.log(searchText);
 
   const data = await searchAnime(searchText);
    // Rest of your code for rendering the data 
    // console.log(data)
  return (
    <div className='text-white'>
     <div className=" p-5 text-[36px] sm:text-[48px] md:text-[80px] lg:text-[100px] xl:text-[120px] items-center flex flex-col  font-['dark'] text-white ">
      Search Results
      </div>
      <div className='text-white'>


      <div className="w-full flex justify-center">
              <div className="flex  flex-row flex-wrap   gap-10 items-center px-0 sm:px-5 xl:px-10 justify-center">
                {/* <Searchbar onSearch={handleSearch}/> */}
                {Array.isArray(data) &&
                  data
                    .map((datas) => <AnimeCardSlider anime={datas} />)}
              </div>
            </div>
    </div>
    </div>
  )
}


