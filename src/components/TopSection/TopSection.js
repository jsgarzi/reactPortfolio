import React from 'react';
import './TopSection.css'

function TopSection(props) {
    return (

        <div className="container-fluid d-flex" id="topSecCont">
            <div className="Aligner-item row"> 
                <p className="topTextOne">Design</p><div className="border"></div><p className="topTextTwo">Development</p><div className="border"></div><p className="topTextThree">Operations</p>
            </div>
        </div>

    )
}

export default TopSection;