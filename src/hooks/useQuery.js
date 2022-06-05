import { useReducer } from "react"
const URL = 'https://graphql.anilist.co'
export const fetchStatus = {
    NOT_STARTED: 'not started',
    LOADING: 'loading',
    COMPLETED: 'completed',
    ERROR: 'error',
}
export function useQuery() {

    const initialState = {
        status: fetchStatus.NOT_STARTED,
        data: []
    }
    const reducer = function(state, action){
        switch(action.type){
            case 'FETCH_DATA':
                return {
                    status: fetchStatus.LOADING,
                    data: []
                }
            case 'FETCH_COMPLETED':
                return {
                    status: fetchStatus.COMPLETED,
                    data: action.payload
                }
            case 'FETCH_ERROR':
                return {
                    status: fetchStatus.ERROR,
                    data: []
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    
    function getData(){
        dispatch({type: 'FETCH_DATA'})
        var query = `
        query{
            Page{
             media{
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

        var variables = null;
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
        fetch(URL, options).then(handleResponse)
        .then(handleData)
        .catch(handleError);
    }

    function handleResponse(response) {
        // console.log(response)
        return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
        });
    }
        
    function handleData(data) {
        console.log(data.data.Page.media)
        dispatch({type: 'FETCH_COMPLETED', payload: data.data.Page.media})
    }
    
    function handleError(error) {
        dispatch({type: 'FETCH_ERROR', payload: error})
    }
    return {
        state,
        getData
       }
}