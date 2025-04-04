import './index.css';
import Header from './components/Header';
import Entry from './components/Entry';
import marker from './assets/marker.png';
import entryData from './data';


function App() {

  const journalEntries = entryData.map((entry) =>(
    <Entry 
        key={entry.id}
        locImg={entry.img}
        markerImg={{ src: marker, alt: "Google Marker" }}
        countryName= {entry.countryName}
        mapLink= {entry.mapLink}
        locationName= {entry.title}
        travelDates= {entry.travelDates}
        attractionFact= {entry.text}      
        /> 
    ));

  return (
    <>
      <Header /> 
        {journalEntries} 
    </>
  );
}

export default App;
