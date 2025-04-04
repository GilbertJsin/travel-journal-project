import React from 'react';

function Entry(props){
    return(
        <main className="entry-container">
            <div className="journal-entry">
                <article className="entry-article">
                    <div className="entry-img-container">
                    <img 
                        src={props.img.src} 
                        alt={props.img.alt} 
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
                    <span className="country-name">{props.country}</span>
                    <a href={props.googleMapsLink} className="google-map-link">View on Google Maps</a>
                    </div>
                    <div className="entry-info-container">
                        <span className="attraction-location">{props.title}</span>
                        <span className="visit-dates">{props.dates}</span>
                        <span className="attraction-facts">{props.text}</span>
                    </div> 
                </article>
            </div>
        </main>
    )
}

export default Entry