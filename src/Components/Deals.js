import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useAxios from 'axios-hooks'

export default function Deals(props) {

    const [popFlight, setPopFlight] = useState([]);
    const [{ data, loading, error }, refetch] = useAxios(
      'https://everymundointernship.herokuapp.com/popularRoutes/BM88RE94IE35' //this takes a little time 
    )

    console.log('data is ',data)

    const flightData  = data || [];


    // function showFlight(){
    //   console.log(flightData)
    //   let newArray = flightData.map((eachFlight,i)=>{
    //     console.log(eachFlight.departureDate)
    //     return eachFlight.departureDate
    // })
    // return newArray 
    // }

    const showFlight = () => flightData.map(eachFlight => eachFlight.departureDate) 



    return(
      <div>
         <button onClick={showFlight()}>refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
     {showFlight()} {/*But i'm not waiting*/}
      </div>
    )
}

