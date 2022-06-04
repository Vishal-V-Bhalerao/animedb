import ImageThumbnail from '../imageThumbnail/imageThumbnail'
import './card.scss'
export default function  Card(){
    return (
        <div className="card" >
            <div className="card__image-holder">
                <ImageThumbnail></ImageThumbnail>
            </div>
            <div className="card__info-holder" >
                <div className='info-holder__header' >
                    <div className='info-holder__info'>
                        <div className='info-holder__episode-count' >148 episodes aired on</div>
                        <div className='info-holder__air-date' >October 12, 2011</div>
                        <div className='info-holder__source' >Source-Manga</div>
                    </div>
                    <div className='info-holder__score' >
                        <div className='info-holder__rating'>
                            89%
                        </div>
                        <div className='info-holder__rank'>
                            #2
                        </div>
                    </div>
                </div>
                <div className='info-holder__description'>
                <p>
                A new adaption of the manga of the same name by Togashi Yoshihiro. A Hunter is one who travels the world doing all sorts
                of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a 
                young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he
                could one day reunite with him. After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, 
                notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven 
                Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing  
                throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.
                </p>
                </div>
            </div>
        </div>    
    )
}