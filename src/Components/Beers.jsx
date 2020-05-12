import React from 'react'
// import Header from './Header'
import {Link} from 'react-router-dom'

export default function Beers(props) {
    return (
        <div>
            {/* <Header /> */}
            {props.beers.map((beer,index) => (
             <div key={beer._id}>   
                <img src={beer.image_url} alt="beer" />
                <div> Name: {beer.name}</div>
                <div> Tag line:{beer.tagline} </div>
                <div> Contributed by:{beer.contributed_by} </div>
                <Link to={`/beers/${beer._id}`}> Detail </Link> |
             </div>
            ))}
        </div>
    )
}
