export async function getTop10() {
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
          status
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
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
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
    id: 15125,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Page.media;
  return data;
}

export async function getFavourites() {
  const query = `
    {
        Page(page:1 perPage:20)
        {
          media(sort:FAVOURITES_DESC , type:ANIME) {
            id
            title{
              english
              romaji
              native
            }
            status
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
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            popularity
            bannerImage
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
    id: 15125,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Page.media;
  return data;
}
export async function getPopular() {
  const query = `
    {
        Page(page:1 perPage:20)
        {
          media(sort:POPULARITY_DESC , type:ANIME) {
            id
            title{
              english
              romaji
              native
            }
            status
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
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            popularity
            bannerImage
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
    id: 15125,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Page.media;
  return data;
}

export async function getTrending() {
  const query = `
    {
        Page(page:1 perPage:20)
        {
          media(sort:TRENDING_DESC , type:ANIME) {
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
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            popularity
            bannerImage
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
    id: 15125,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Page.media;
  return data;
}


export async function getUpcoming() {
  const query = `
    {
        Page(page:1 perPage:10 )
        {
          media(status:NOT_YET_RELEASED, type:ANIME, sort:POPULARITY_DESC) {

            id
            title{
              english
              romaji
              native
            }
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
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
            popularity
            bannerImage
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
    id: 15125,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Page.media;
  return data;
}
export async function getAnimebyId(id) {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {

        id
        title {
          english
          romaji
          native
        }
        type
        status
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
        popularity
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        duration
        status
        studios {
          edges {
            id
          }
        }
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  `;

  const variables = {
    id: id,
  };
  console.log("id", id);
  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Media;
  return [data];
}

export async function searchAnime(searchText) {
  const query = `
    query ($searchText: String){
      Page(page: 1, perPage: 20) {
        media(search: $searchText, type:ANIME){
          id
          title {
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
          popularity
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          duration
          status
          studios {
            edges {
              id
            }
          }
          bannerImage
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
    searchText: searchText,
  };

  const url = "https://graphql.anilist.co";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = result.data.Page.media; // Check if data and media properties exist

  // console.log(data);

  return data || []; // Return an empty array if data is undefined
}
