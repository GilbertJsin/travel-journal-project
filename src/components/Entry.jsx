import React from 'react';

function Entry(props){
    return(
<<<<<<< HEAD
        <article className="entry-article">
            <div className="entry-img-container">
                <img src="src\assets\mt_fuji.jpg" className="country-img"/>
            </div>
            <div className='entry-info'>
                <div className='entry-info-container'>
                    //TODO: fill out country info
                </div>
            </div>

        </article>
=======
        <main className="entry-container">
            <article className="entry-article">
                <div className="entry-img-container">
                <img 
                    src={props.locImg.src} 
                    alt={props.locImg.alt} 
                    className="country-img"
                />
                </div>
            </article>
            <article className="entry-info">
                <div className="entry-info-map-link">
                <img 
                    src={props.markerImg.src} 
                    alt={props.markerImg.alt} 
                    className="marker-img"
                />
                <span className="country-name">{props.countryName}</span>
                <a href={props.mapLink} className="google-map-link">View on Google Maps</a>
                </div>
                <div className="entry-info-container">
                    <span className="attraction-location">{props.locationName}</span>
                    <span className="visit-dates">{props.travelDates}</span>
                    <span className="attraction-facts">{props.attractionFact}</span>
                </div> 
                </article>
        </main>
>>>>>>> a69556a34ccf4f35defafcf887cafa2a3809d50f
    )
}

export default Entry;