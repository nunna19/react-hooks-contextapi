import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useAxios from 'axios-hooks'
import { useStyles } from "@andywer/style-hook"

const Img = useStyles({
  width:"100px"
})


export default function Deals(props) {

    const [{ data, loading, error }, refetch] = useAxios(
     
      'https://everymundointernship.herokuapp.com/popularRoutes/BM88RE94IE35' //1.this takes a little time 
    )
    console.log(data)
    const flightData  = data || []; // 3. that why need to give emtry []
    const showFlight = () => 
    flightData.map(eachFlight => 
      <Img>
    <img className="Img" src={eachFlight.routeCoverImage} />   

        {eachFlight.departureDate}

      </Img>
    )


    // function showFlight(){
    //   console.log(flightData)
    //   let newArray = flightData.map((eachFlight,i)=>{
    //     console.log(eachFlight.departureDate)
    //     return eachFlight.departureDate
    // })
    // return newArray 
    // }

  


   
    return(
      <div>
         <button onClick={showFlight()}>refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
     {showFlight()} {/* 2. But i'm not waiting*/}
      </div>
    )
    
}

