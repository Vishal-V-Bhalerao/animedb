import ImageThumbnail from "../imageThumbnail/imageThumbnail"
import './personList.scss'
export default function PersonList({listName, list}){
    return (
        <div className="person Container" >
            <div className="heading">
                {listName}
            </div>
            <div className="smallcard-container">
            {list.map(
                (person) =>{
                    return(
                        <div className="small-card" >
                            <ImageThumbnail key={person.id} id={person.id} src={person.image.large} title={`${person.name.first ? person.name.first: ''} ${person.name.last ? person.name.last :''}`} studio='' ></ImageThumbnail>
                        </div>
                    )
                }
            )}
            </div>
        </div>
    )
}