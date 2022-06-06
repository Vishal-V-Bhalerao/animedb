import { useEffect } from "react"
import { useParams } from "react-router"
import { fetchStatus, useQuery, mediaSort } from "../../hooks/useQuery"
import Card from "../card/card"
import './cardList.scss'
export default function CardList(){

    const {sortType} = useParams()
    let sortingMethod = mediaSort.POPULARITY_DESC;
    switch(sortType){
        case 'Trending':
            sortingMethod = mediaSort.TRENDING_DESC;
            break;
        case 'Top':
            sortingMethod = mediaSort.SCORE_DESC;
            break;
        case 'Popular':
            sortingMethod = mediaSort.POPULARITY_DESC;
            break;
        default:
            sortingMethod = mediaSort.POPULARITY_DESC;
    }

    const params = {
        pageSize: 100,
        pageNumber: 1,
        sort: sortingMethod
    }

    const {state, getData} = useQuery(params)
    
    useEffect(() => {
        getData()
    }, [sortType])

    if(state.status === fetchStatus.LOADING){
        return (
            <div className="list-loading" >
                <h2>Loading ...</h2>
            </div>
        )
    }
    if(state.status === fetchStatus.LOADING){
        return (
            <h2> Some Error occurred !</h2>
        )
    }
    if(state.status === fetchStatus.COMPLETED) {
        return ( 
        <div className="card-container" >
            <div className="card-list" >
                {state.data.map((cardData) => <Card key={cardData.key} cardData={cardData}></Card>)}
            </div>
        </div>
        )
    }
}