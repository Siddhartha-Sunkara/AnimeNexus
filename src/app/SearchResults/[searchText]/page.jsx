import React from 'react'
import { searchAnime } from '../../../lib/Calls'
import ResultCard from '../../../components/ResultCard'
export default async function SearchResults({params}) {
  const searchText = params.searchText;
  console.log(searchText);
 
   const data = await searchAnime(searchText);
    // Rest of your code for rendering the data 
    // console.log(data)
  return (
    <div className='text-white'>
      Search Results
      <div className='text-white'>
      {data.map((anime) => (
        <div key={anime?.animeId}>{anime?.animeId }</div>
      ))}

      <div className="w-full flex justify-center">
              <div className="flex flex-col md:flex-row flex-wrap  w-[80vw] gap-10 items-center px-0 sm:px-10 xl:px-20 justify-start">
                {/* <Searchbar onSearch={handleSearch}/> */}
                {Array.isArray(data) &&
                  data
                    .slice(0, 10)
                    .map((datas) => <ResultCard key={datas.id || ""} {...datas} />)}
              </div>
            </div>
    </div>
    </div>
  )
}


