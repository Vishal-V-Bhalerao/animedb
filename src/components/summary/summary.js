import './summary.scss'
export default function Summary({title: {english}, description, coverImage: {extraLarge}}){
    return(
        <div className="summary" >
            <div className="summary__image-holder">
                <img src={extraLarge} alt={english}></img>
            </div>
            <div className="summary__description-holder" >
                <h3>{english}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}