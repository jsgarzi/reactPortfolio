import React from 'react'


function Cards(props) {
    return (

            <div className="card col-3 m-3 container-fluid" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.cardInfo.title}</h5>
                    <p className="card-text">{props.cardInfo.discrip}</p>
                    <a href={props.cardInfo.live} className="btn btn-primary mx-1">Live Version</a>
                    <a href={props.cardInfo.git} className="btn btn-primary mx-1">Github Repo</a>
                </div>
            </div>

    )
}

export default Cards