import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import "./CardList.css"

import { useSelector} from 'react-redux';



function CardList() {
    const data = useSelector((state) => state.scanResult.data)
    const isScanned = useSelector((state) => state.scanResult.isScan)

    return (
        <section id='list'>
            <h2 className="list_title">Search Result</h2>
            <div className="list_container">
                {isScanned ? "" : <p className='empty_message'>Scan to see the result ...</p>}
                {
                data && data.map((el) => {
                    return (
                        <InfoCard key={el.uni} img = {el.img} uni = {el.uni} />
                    )
                })
                }   
            </div>
        </section>
    )
}

export default CardList