export default function getDetailQuery(id, type){
  const detailsQuery = `
  query($id: Int){
    Media(id: $id){
      id
      idMal
      title {
        romaji
        english
        native
        userPreferred
      }
      type
      format
      status
      description
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
      season
      seasonYear
      seasonInt
      episodes
      duration
      chapters
      volumes
      countryOfOrigin
      isLicensed
      source
      hashtag
      trailer {
        id
      }
      updatedAt
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      genres
      synonyms
      averageScore
      meanScore
      popularity
      isLocked
      trending
      favourites
      relations {
        edges {
          id
        }
      }
      studios {
        edges {
          id
        }
      }
      staff {
        edges {
          id
        }
      }
      reviews {
        edges {
          node {
            id
          }
        }
      }
      rankings {
        id
      }
      characters(page: 1) {
        nodes { # Array of character nodes
          id
          name {
            first
            last
          }
        }
      }
    }
  }`;
  
  const detailsVariables = {
      "id": parseInt(id)
  };

  return{
    detailsQuery, detailsVariables
  }
}