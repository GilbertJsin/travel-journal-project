import React from 'react';

function Entry(){
    return(
        <main className="entry-container">
            <article className="entry-article">
                <div className="entry-img-container">
                    <img src="src\assets\mt_fuji.jpg" className="country-img"/>
                </div>
            </article>
            <article className="entry-info">
                <div className="entry-info-map-link">
                <img src="src\assets\marker.png" className="marker-img"/>
                <span className="country-name">JAPAN</span>
                <a href="https://maps.app.goo.gl/7QmWeZUqyboNGZyy5" className="google-map-link">View on Google Maps</a>
                </div>
                <div className="entry-info-container">
                    <span className="attraction-location">Mount Fuji</span>
                    <span className="visit-dates">12 Jan, 2021 - 24 Jan, 2021</span>
                    <span className="attraction-facts">Mount Fuji is Japan’s highest mountain, standing at 3,776 meters 
                        (12,389 feet), and is an active stratovolcano that last erupted in 1707.
                         It is considered one of Japan’s “Three Holy Mountains” and is a symbol of
                          national identity, art, and spirituality.</span>
                </div>                
            </article>
        </main>
    )
}

export default Entry;