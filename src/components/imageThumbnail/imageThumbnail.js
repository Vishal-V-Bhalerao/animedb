import './imageThumbnail.scss'
import { useNavigate } from 'react-router-dom'
export default function ImageThumbnail({id, src}){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/details/${id}`)
    }
    return(
        <figure onClick={handleClick} className="image-thumbnail">
        <img src={src}
            alt="Hunter X Hunter" width="304" height="228"/>
        <figcaption>
            <div><span>Hunter X Hunter</span></div>
            <div><span>MADHOUSE</span></div>
        </figcaption>
    </figure>
    )
}