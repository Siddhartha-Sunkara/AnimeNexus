import Link from "next/link";
import Image from "next/image";
import PageWrapper from "../../components/PageWrapper";
async function getData(currentPage) {

  const url = "https://myanimelist.p.rapidapi.com/anime/recommendations/1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ffbc9fdadamshc1603e2785ddab1p124e76jsnbf8a6b5e067e",
      "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }


  const suggestions = result.recommendations;
  return suggestions;


}

export default async function Movie() {

  const suggestions = await getData();
  //  console.log(suggestions)
  return (
    <div className="h-[100%] w-[100%]  flex flex-col py-10 gap-10 bg-[#040203] text-[#faf4fa]">
      <div className="flex flex-col gap-10 items-center justify-center">
        <p className="text-lg sm:text-2xl lg:text-3xl text-center xl:text-left xl:text-4xl font-semibold p-5 ">
          Anime suggestions recommended for you
        </p>
        <p className="text-sm sm:text-md lg:text-xl text-center  xl:text-left xl:text-2xl font-semibold p-5">
          If you Like one, you will like the other
        </p>
      </div>
      <div className="w-full">
        <PageWrapper>
          <div className="card  flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center ">

            {Array.isArray(suggestions) && suggestions.slice(0, 21).map((data, i) => (

              <div className="card-inner min-h-[300px] xl:min-h-[500px] w-[80%] md:w-[40%] xl:w-[30%] bg-[#141414] flex  flex-col font-semibold gap-5 p-5 " key={i}>

                <div className="flex">
                  <div className="image">
                    <Image
                      src={data.recommendation.picture_url}
                      alt=""
                      className=" rounded-[8px] w-12 h-16"
                      width={300} height={300}
                    />
                  </div>
                  <div className="flex flex-col justify-between px-3">
                    <div className="flex gap-10">

                      <div className="">{data.recommendation.type}</div>
                    </div>
                    <div className="title text-[16px] xl:text-xl flex xl:hidden font-bold">
                      {data.recommendation.title.substring(0, 20)}..
                    </div>
                    <div className="title text-[16px] xl:text-xl hidden xl:flex font-bold">
                      {data.recommendation.title.substring(0, 40)}
                    </div>
                  </div>

                </div>
                <div className="flex">
                  <div className="image">
                    <Image
                      src={data.liked.picture_url}
                      alt=""
                      className=" rounded-[8px] w-12 h-16"
                      width={300} height={300}
                    />
                  </div>
                  <div className="flex flex-col justify-between px-3">
                    <div className="flex gap-10">

                      <div className="">{data.liked.type}</div>
                    </div>
                    <div className="title  text-[16px] xl:text-xl flex xl:hidden font-bold">
                      {data.liked.title.substring(0, 20)}..
                    </div>
                    <div className="title text-[16px] hidden xl:flex xl:text-xl font-bold">
                      {data.liked.title.substring(0, 40)}
                    </div>
                  </div>

                </div>

                <div className="text-justify font-normal mb-4 xl:mb-12 2xl:mb-4">
                  <p className="text-md xl:text-lg font-semibold ">Synopsis:</p>
                  <p className="text-sm  h-32 xl:text-base ">{data.description.substring(0, 200)}
                  </p>
                </div>
                <button className="h-12 w-40 bg-[#7053ff] rounded-[24px]">
                  <Link href={data.recommendation.myanimelist_url} target="_blank">
                    Go to Main Site
                  </Link>
                </button>

              </div>
            ))}
          </div>
        </PageWrapper>
        <div className="flex w-full items-center justify-center p-20">
          {/* <button onClick={handleChange} className="h-12 w-40 bg-[#7053ff] rounded-[12px]">

            View More

          </button> */}
        </div>

      </div>
    </div>
  );
};


