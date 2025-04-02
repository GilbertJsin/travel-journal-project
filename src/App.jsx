import './index.css';
import Header from './components/Header';
import Entry from './components/Entry';
import marker from './assets/marker.png';
import mtFuji from './assets/mt_fuji.jpg';

function App() {
  return (
    <>
      <Header /> 
        <Entry 
          locImg={{ src: mtFuji, alt: "Mt. Fuji" }}
          markerImg={{ src: marker, alt: "Google Marker" }}  
          countryName="Japan"  
          mapLink="https://maps.app.goo.gl/7QmWeZUqyboNGZyy5"
          locationName="Mount Fuji"
          travelDates="12 Jan, 2021 - 24 Jan, 2021"
          attractionFact="Mount Fuji is Japan’s highest mountain, standing at 3,776 meters 
                          (12,389 feet), and is an active stratovolcano that last erupted in 1707.
                          It is considered one of Japan’s “Three Holy Mountains” and is a symbol of
                            national identity, art, and spirituality."/>   
    </>
  );
}

export default App;
