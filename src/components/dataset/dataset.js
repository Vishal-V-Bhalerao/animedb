import './dataset.scss'
export default function Dataset({label, value}){
    return(
        <div className="dataset" >
            <div className="dataset__label" >{label} :</div>
            <div className="dataset__value" >{value}</div>
        </div>
    )
}