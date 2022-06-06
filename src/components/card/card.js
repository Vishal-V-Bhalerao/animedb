import ImageThumbnail from '../imageThumbnail/imageThumbnail'
import './card.scss'
export default function  Card({cardData}){
    const {id, averageScore, coverImage: {extraLarge}, description, episodes, source,startDate, startDate: {day, month, year}, title: {english}} = cardData
    return (
        <div className="card" >
            <div className="card__image-holder">
                <ImageThumbnail id={id} src={extraLarge}></ImageThumbnail>
            </div>
            <div className="card__info-holder" >
                <div className='info-holder__header' >
                    <div className='info-holder__info'>
                        <div className='info-holder__episode-count' >{`${episodes} episodes aired on`}</div>
                        <div className='info-holder__air-date' >{`${day}-${month}-${year}`}</div>
                        <div className='info-holder__source' > {`Source-${source}`}</div>
                    </div>
                    <div className='info-holder__score' >
                        <div className='info-holder__rating'>
                        {`${averageScore}%`}
                        </div>
                        <div className='info-holder__rank'>
                            #2
                        </div>
                    </div>
                </div>
                <div className='info-holder__description'>
                <p>{description}</p>
                </div>
            </div>
        </div>    
    )
}