export default function getListQuery(pageSize, pageNumber, sort){
const listQuery = `
            query($page: Int, $perPage: Int, $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){
            Page(page: $page, perPage: $perPage){
             media(sort: $sort){
              id
              popularity
              averageScore
              title {
                romaji
                english
                native
                userPreferred
              }
              type
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
              episodes
              source
              studios {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              genres
            } 
            }
          }          
            `;

  const listVariables = {
    page: pageNumber,
    perPage: pageSize,
    sort: sort
  };
  return{
    listQuery,
    listVariables
  }
}