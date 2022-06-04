import CardList from "../../components/cardList/cardList";
import './homePage.scss'
export default function HomePage(){
    return(
        <div className="home-page" >
            <div className="home-page__container" >
                <CardList></CardList>
            </div>
        </div>
    )
}