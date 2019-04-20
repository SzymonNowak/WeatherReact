import React, { Component } from 'react';
{/*<p><span><i className="fas fa-building"></i></span>{city}</p>*/}
const Result = (props) => {
    const {err, city, sunrise, sunset, temp, pressure , wind} = props.weather;
    let content = null;
    if(!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"><span><i className="fas fa-city"></i></span></p>
                            </div>
                            <div className="card-footer">
                               {city}
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"><span><i className="fas fa-cloud-moon"></i></span></p>
                            </div>
                            <div className="card-footer">
                                {sunsetTime}
                            </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"><span><i className="fas fa-cloud-sun"></i></span></p>
                            </div>
                            <div className="card-footer">
                                {sunriseTime}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"><span><i className="fas fa-thermometer-half"></i></span></p>
                            </div>
                            <div className="card-footer">
                               {temp}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"><span><i className="fas fa-wind"></i></span></p>
                            </div>
                            <div className="card-footer">
                                {wind}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"><span><i className="fas fa-water"></i>Woda</span></p>
                            </div>
                            <div className="card-footer">
                                {pressure}
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            )

    }

    return(


            <>
                {err? `Miasto niedostepne: ${city}` : content }
            </>

    )
}

export default Result;