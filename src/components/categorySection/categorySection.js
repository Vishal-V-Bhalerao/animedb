import { useEffect } from "react"
import { useQuery } from "../../hooks/useQuery"
import ImageThumbnail from "../imageThumbnail/imageThumbnail"
import { fetchStatus } from "../../hooks/useQuery"
import './categorySection.scss'
import { useNavigate } from "react-router"
export default function CategorySection({categoryTitle, sort}){
    const params = {
        pageSize: 10,
        pageNumber: 1,
        sort: sort
    }
    const navigate = useNavigate()
    const {state, getData} = useQuery(params)
    useEffect(() => {
        getData()
    }, [])
    if(state.status === fetchStatus.LOADING){
        return (
            <div className="loading-div" >
                <h2>Loading ...</h2>
            </div>
        )
    }
    if(state.status === fetchStatus.LOADING){
        return (
            <h2> Some Error occurred !</h2>
        )
    }
    function handleClick(){
        navigate(`/list/${categoryTitle}`)
    }
    if(state.status === fetchStatus.COMPLETED) {
        return (
            <div className="category">
                <div className="category__header" >
                    <div className="category-title" >{categoryTitle.toUpperCase()}</div>
                    <div className="view-div" onClick={handleClick}>View all</div>
                </div>
                <div className="category__card-list">
                    {state.data.map((cardData) => {
                       return (
                        <div className="thumbcard-container" >
                            <ImageThumbnail key={cardData.key} id={cardData.id} title={cardData.title.english} studio={cardData.studios.edges[0].node.name} src={cardData.coverImage.extraLarge}>
                            </ImageThumbnail>
                       </div>)
                    })}
                </div>
            </div>
        )
    }
}