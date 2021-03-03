import React from 'react'
import Cards from "../components/Cards/Cards";

var cardInfo = [
    {
        image : "",
        title : "Potentially A Blog",
        discrip : "Created a blog with team that allows users view uploaded posts, create their own accounts, sign in, edit, and delete their own content for all to see",
        live : "https://whispering-stream-30896.herokuapp.com/",
        git : "https://github.com/jsgarzi/Potentially-A-Blog"
    },
    {
        image : "",
        title : "Travel God",
        discrip : "Worked to integrate Google Maps API and on frontend UI of a site that would display location, weather, and event info for a searched location.",
        live : "https://jsgarzi.github.io/Travel_God/",
        git : "https://github.com/jsgarzi/Travel_God"
    },
    {
        image : "",
        title : "Weather Track",
        discrip : "This site allows users to quickly review detailed weather data in a location over a five day period. The search history is saved to the local host.",
        live : "https://jsgarzi.github.io/weather-site/",
        git : "https://github.com/jsgarzi/weather-site"
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
        <div className = "container-fluid">
            <div className ="row justify-content-center">
            {cardInfo.map((data) => {
               return (
                < Cards 
                        cardInfo = {data}
                /> 
               )
            })}
            </div> 
        </div>
    )
}

export default Home
