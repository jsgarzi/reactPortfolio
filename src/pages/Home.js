import React from 'react'
import Cards from "../components/Cards/Cards";

var cardInfo = [
    {
        image : "",
        title : "Potentially A Blog",
        discrip : "",
        live : "",
        git : ""
    },
    {
        image : "",
        title : "Travel God",
        discrip : "",
        live : "",
        git : ""
    },
    {
        image : "",
        title : "Weather Track",
        discrip : "",
        live : "",
        git : ""
    },
    {
        image : "",
        title : "Employee Directory",
        discrip : "",
        live : "",
        git : ""
    },
    {
        image : "",
        title : "Fortitude Dev",
        discrip : "",
        live : "",
        git : ""
    },
    {
        image : "",
        title : "Workout Tracker",
        discrip : "",
        live : "",
        git : ""
    }
]

function Home() {
    return (
        <div>
            {cardInfo.map((data) => {
               return (
                < Cards 
                        cardInfo = {data}
                /> 
               )
            })}
            
        </div>
    )
}

export default Home
