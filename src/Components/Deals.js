import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useAxios from 'axios-hooks'

export default function Deals(props) {

    const [popFlight, setPopFlight] = useState([]);
    const [{ data, loading, error }, refetch] = useAxios(
      'https://everymundointernship.herokuapp.com/popularRoutes/BM88RE94IE35'
    )

    // function showFlight(){
    //   data.map((eachFlight,i)=>{
    //     console.log(eachFlight.departureDate)
    // })
    // }
    return(
      <div>
         <button onClick={refetch}>refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && <pre>{(data.map((eacgFlight,i)=>{
        console.log(eacgFlight.departureDate)
      }))}</pre>}
     {/* {showFlight()} */}
      </div>
    )
}

