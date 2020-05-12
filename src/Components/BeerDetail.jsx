import React from 'react'

export default function BeerDetail(props) {
    console.log(props)
    const BeerId = props.match.params.id
    console.log("BeerID",BeerId)

    const beer = props.beers.find(beerItem => beerItem._id === BeerId )
    console.log("beer:", beer)
    return (
        <div>
            beer detail
            <br></br>
             { beer && 
                <>
                    <div> Name: {beer.name}</div>
                    <img src={beer.image_url} alt="beer"/>  
                    <div> Tag line: {beer.tagline}</div>
                    <div> First Brewed: {beer.first_brewed}</div>
                    <div> Attenuation Level: {beer.attenuation_level}</div>
                    <div> Description: {beer.description}</div>
                    <div> Contributed by: {beer.contributed_by}</div>
                </>
            }
        </div>
    )
}
