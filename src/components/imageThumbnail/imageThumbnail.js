import './imageThumbnail.scss'
import { useNavigate } from 'react-router-dom'
export default function ImageThumbnail(){
    const navigate = useNavigate()
    function handleClick(){
        navigate('/details')
    }
    return(
        <figure onClick={handleClick} className="image-thumbnail">
        <img src=
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png"
            alt="Hunter X Hunter" width="304" height="228"/>
        <figcaption>
            <div><span>Hunter X Hunter</span></div>
            <div><span>MADHOUSE</span></div>
        </figcaption>
    </figure>
    )
}