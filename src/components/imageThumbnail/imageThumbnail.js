import './imageThumbnail.scss'
import { useNavigate } from 'react-router-dom'
export default function ImageThumbnail({id, src, title, studio}){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/details/${id}`)
    }
    return(
        <figure onClick={handleClick} className="image-thumbnail">
        <img src={src}
            alt={title} width="304" height="228"/>
        <figcaption>
            <div><span>{title}</span></div>
            <div><span>{studio}</span></div>
        </figcaption>
    </figure>
    )
}