//---------imports------------
import React, { useEffect, useState } from 'react'
import './App.css'
import StarshipSearch from './StarshipSearch.jsx'
// import StarshipList from './src/components/StarshipList.jsx'



//---------functions----------
const  App = () => {
  const [count, setCount] = useState(0)
  const [starships, setStarships] = useState([])

  useEffect(() => {

service()
  });

// useEffect(service());

  //create a service function to retrieve a list of starships
  const service = async ()  => {
    const BASE_URL = `https://swapi.tech/api/starships`
    // const query = 'starships'
    try {
       let response = await fetch(BASE_URL)
       let JSONdata = await response.json()
       setStarships(JSONdata.results)
      //  console.log(starships);
    }
    catch {
      console.log("BaseURL didnt Work");
    }
  }
  return (
    <>
<h1>Star Wars</h1>
<StarshipSearch/>
    </>
  );
};




//-----exports
export default App
