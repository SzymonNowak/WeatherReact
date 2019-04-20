import React, { Component } from 'react';

const Result = (props) => {
    const {err, city, sunrise, sunset, temp, pressure , wind} = props.weather;
    let content = null;
    if(!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div> </div>
        )
    }

    return(
        <React.Fragment>
            <div>
                {err? `Miasto niedostepne: ${city}` : content }
            </div>
        </React.Fragment>

    )
}

export default Result;