import Card from "../card/card"
import './cardList.scss'
export default function CardList(){
    const data = [1,2,3,4,5,6,7,8]
    return(
        <div className="card-list" >
            {data.map(() => <Card></Card>)}
        </div>
    )
}