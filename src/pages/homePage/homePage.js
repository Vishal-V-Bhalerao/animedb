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
                    <CategorySection categoryTitle='TRENDING' sort={ mediaSort.POPULARITY_DESC } ></CategorySection>
                    <CategorySection categoryTitle='POPULAR' sort={ mediaSort.POPULARITY_DESC } ></CategorySection>
                    <CategorySection categoryTitle='TOP RATED' sort={ mediaSort.POPULARITY_DESC } ></CategorySection>
                    {/* <CategorySection categoryTitle='AIRING' sort={ mediaSort.POPULARITY_DESC } ></CategorySection> */}
                    {/* <CardList></CardList> */}
                </div>
            </div>
        </div>
    )
}