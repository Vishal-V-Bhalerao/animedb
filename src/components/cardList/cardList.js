import { useContext, useEffect } from "react"
import { queryContext } from "../../contexts/queryContext"
import { fetchStatus } from "../../hooks/useQuery"
import Card from "../card/card"
import './cardList.scss'
export default function CardList(){
    const {state, getData} = useContext(queryContext)
    useEffect(() => {
        getData()
    }, [])

    if(state.status === fetchStatus.LOADING){
        return (
            <h2>Loading ...</h2>
        )
    }
    if(state.status === fetchStatus.LOADING){
        return (
            <h2> Some Error occurred !</h2>
        )
    }
    if(state.status === fetchStatus.COMPLETED) {
        return ( <div className="card-list" >
                {state.data.map((cardData) => <Card key={cardData.key} cardData={cardData}></Card>)}
             </div>)
    }
}