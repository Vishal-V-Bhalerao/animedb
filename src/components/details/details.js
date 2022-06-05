import Banner from '../banner/banner'
import Dataset from '../dataset/dataset'
import Summary from '../summary/summary'
import './details.scss'
export default function Details(){
    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return(
        <div className="details" >
            <div className="details__banner-holder" >
                <Banner></Banner>
            </div>
            <div className='details__container'>
                <div className="details__summary-holder" >
                    <Summary></Summary>
                </div>
                <div className="details__data-holder">
                    <div className="data-holder__information-holder">
                        {data.map(() => {
                           return <Dataset></Dataset>
                        })}
                    </div>
                    <div className="data-holder__characters-holder"></div>
                </div>
            </div>
        </div>
    )
}