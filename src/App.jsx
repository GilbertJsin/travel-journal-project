import './index.css';
import Header from './components/Header';
import Entry from './components/Entry';
import marker from './assets/marker.png';
import entryData from './data';


function App() {

  const journalEntries = entryData.map((entry) =>(
    <Entry 
        key={entry.id}
        {...entry}          
        markerImg={{ src: marker, alt: "Map marker icon" }}  
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
