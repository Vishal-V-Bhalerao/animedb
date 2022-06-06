import CardList from "../../components/cardList/cardList";
import { TopNavigationPanel } from "../../components/topNavigationPanel/topNavigationPanel";
import CategorySection from "../../components/categorySection/categorySection";
import { mediaSort } from "../../hooks/useQuery";
import './homePage.scss'
export default function HomePage(){
    return(
        <div className="home-page" >
            <div className="home-page__container" >
                <div className="list-container">
                    <CategorySection categoryTitle='Trending' sort={ mediaSort.POPULARITY_DESC } ></CategorySection>
                    <CategorySection categoryTitle='Popular' sort={ mediaSort.POPULARITY_DESC } ></CategorySection>
                    <CategorySection categoryTitle='Top' sort={ mediaSort.POPULARITY_DESC } ></CategorySection>
                    {/* <CategorySection categoryTitle='AIRING' sort={ mediaSort.POPULARITY_DESC } ></CategorySection> */}
                    {/* <CardList></CardList> */}
                </div>
            </div>
        </div>
    )
}