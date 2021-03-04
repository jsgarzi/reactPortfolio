import React from 'react';
import Cards from "../components/Cards/Cards";
import LowerSection from '../components/LowerSection/LowerSection';
import TopSection from "../components/TopSection/TopSection";
import pab from "../Images/pab.jpg";
import TG from "../Images/TG.jpeg";
import weather from "../Images/weather.jpeg";
import directory from "../Images/directory.jpeg";
import fort from "../Images/fort.jpeg";
import fitness from "../Images/fitness.jpeg";


var cardInfo = [
    { 
        image: pab,
        title: "Potentially A Blog",
        discrip: "Created a blog with team that allows users view uploaded posts, create their own accounts, sign in, edit, and delete their own content for all to see",
        live: "https://whispering-stream-30896.herokuapp.com/",
        git: "https://github.com/jsgarzi/Potentially-A-Blog"
    },
    {
        image: TG,
        title: "Travel God",
        discrip: "Worked to integrate Google Maps API and on frontend UI of a site that would display location, weather, and event info for a searched location.",
        live: "https://jsgarzi.github.io/Travel_God/",
        git: "https://github.com/jsgarzi/Travel_God"
    },
    {
        image: weather,
        title: "Weather Track",
        discrip: "This site allows users to quickly review detailed weather data in a location over a five day period. The search history is saved to the local host.",
        live: "https://jsgarzi.github.io/weather-site/",
        git: "https://github.com/jsgarzi/weather-site"
    },
    {
        image: directory,
        title: "Employee Directory",
        discrip: "React app with a collection of users that can be filtered through by name or sorted by age.",
        live: "https://jsgarzi.github.io/employeeDirectory/",
        git: "https://github.com/jsgarzi/employeeDirectory"
    },
    {
        image: fort,
        title: "Fortitude Dev",
        discrip: "Current site of a software design and development company I am a partner of; I was responsible for a significant portion of the UI.",
        live: "https://www.fortitudedev.com",
        git: "https://github.com/fortitudedevllc"
    },
    {
        image: fitness,
        title: "Workout Tracker",
        discrip: "This site can be used to input one's workout stats, update those stats, and create new workouts. User can then look over metrics over a period of time.",
        live: "https://immense-garden-87862.herokuapp.com/?id=603e9b75e7024600158dfc93",
        git: "https://github.com/jsgarzi/workoutTracker"
    }
]

function Home() {
    return (
        <div>
            < TopSection />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {cardInfo.map((data) => {
                        return (
                            < Cards
                                cardInfo={data}
                            />
                        )
                    })}
                </div>
            </div>
            < LowerSection />
        </div>
    )
}

export default Home
