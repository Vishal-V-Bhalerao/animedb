import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useQuery } from '../../hooks/useQuery'
import { fetchStatus } from '../../hooks/useQuery'
import Banner from '../banner/banner'
import Dataset from '../dataset/dataset'
import PersonList from '../personList/personList'
import Summary from '../summary/summary'
import './details.scss'
export default function Details(){
    const {id} = useParams()
    const params = {
        id
    }
    const {state, getData} = useQuery(params)
    useEffect(() => {
        getData()
    },[])
    function getDataList(){
        const dataArr = []
        for(let ele in state.data){
            if(ele !== 'description' && typeof state.data[ele] !== 'object' ){ // typeof state.data[ele] == 'string'
                dataArr.push(<Dataset label={ele} value={state.data[ele]} ></Dataset>)
            }
        }
        return dataArr
    }
    if(state.status === fetchStatus.LOADING){
        return (
            <div className='details-loading' >
                <h2>Loading ...</h2>
            </div>
        )
    }
    if(state.status === fetchStatus.LOADING){
        return (
            <h2> Some Error occurred !</h2>
        )
    }
    if(state.status === fetchStatus.COMPLETED) {
    return(
        <div className="details" >
            <div className="details__banner-holder" >
                <Banner {...state.data}></Banner>
            </div>
            <div className='details__container'>
                <div className="details__summary-holder" >
                    <Summary {...state.data} ></Summary>
                </div>
                <div className="additional">
                        <div className='data-holder'>
                            <div className="data-holder__information-holder">
                               {getDataList()}
                            </div>
                            <div className="data-holder__characters-holder">
                                <PersonList listName='Characters' list={state.data.characters.nodes} ></PersonList>
                                {/* <PersonList listName='Characters' list={state.data.staff.edges} ></PersonList> */}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
}