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
                <div className="row py-5">
                        <div className="col-md-4 ">
                            <div className="card ">
                            <div className="card-body">
                                <p className="card-text text-center "><span><i className="fas fa-city "></i>  City:</span></p>
                            </div>
                            <div className="card-footer ">
                                <p className="text-center"> {city}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text text-center"><span><i className="fas fa-cloud-moon"></i> Sunset Time:</span></p>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">  {sunsetTime} </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-body">
                                <p className="card-text text-center"><span><i className="fas fa-cloud-sun"></i>  Sunrise Time:</span></p>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">  {sunriseTime} </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-body">
                                <p className="card-text text-center"><span><i className="fas fa-thermometer-half"></i>  Temperature:</span></p>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">   {temp} </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-body">
                                <p className="card-text text-center"><span><i className="fas fa-wind"></i></span>  Wind Speed:</p>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">  {wind} </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-body">
                                <p className="card-text text-center"><span><i className="fas fa-water"></i>  Rressure:</span></p>
                            </div>
                            <div className="card-footer">
                                <p className="text-center">  {pressure} </p>
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