import { useReducer } from "react"
import  getListQuery  from "../queries/listQuery"
import  getDetailQuery  from "../queries/detailsQuery"
const URL = 'https://graphql.anilist.co'
export const fetchStatus = {
    NOT_STARTED: 'not started',
    LOADING: 'loading',
    COMPLETED: 'completed',
    ERROR: 'error',
}
export const mediaSort = {
    TITLE_ENGLISH: 'TITLE_ENGLISH',
    TITLE_ENGLISH_DESC: 'TITLE_ENGLISH_DESC',
    TITLE_NATIVE: 'TITLE_NATIVE',
    TITLE_NATIVE_DESC: 'TITLE_NATIVE_DESC',
    TYPE: 'TYPE',
    TYPE_DESC: 'TYPE_DESC',
    FORMAT: 'FORMAT',
    FORMAT_DESC: 'FORMAT_DESC',
    SCORE: 'SCORE',
    SCORE_DESC: 'SCORE_DESC',
    POPULARITY: 'POPULARITY',
    POPULARITY_DESC: 'POPULARITY_DESC',
    TRENDING: 'TRENDING',
    TRENDING_DESC: 'TRENDING_DESC',
    STATUS: 'STATUS',
    STATUS_DESC: 'STATUS_DESC',
    SEARCH_MATCH: 'SEARCH_MATCH',
    FAVOURITES: 'FAVOURITES',
    FAVOURITES_DESC: 'FAVOURITES_DESC',
}
export function useQuery(data) {

    const initialState = {
        status: fetchStatus.NOT_STARTED,
        data: null
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
        let query;
        let variables;
        dispatch({type: 'FETCH_DATA'})
        if(data.id){
            const {detailsQuery, detailsVariables} = getDetailQuery(data.id)
            query = detailsQuery;
            variables = detailsVariables;
        }else{
            const {listQuery, listVariables} = getListQuery(data.pageSize, data.pageNumber, data.sort)
            query = listQuery;
            variables = listVariables;
        }
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
        
    function handleData(res) {
        // console.log(data)
        dispatch({type: 'FETCH_COMPLETED', payload: data.id ? res.data.Media : res.data.Page.media})
    }
    
    function handleError(error) {
        dispatch({type: 'FETCH_ERROR', payload: error})
    }
    return {
        state,
        getData
       }
}