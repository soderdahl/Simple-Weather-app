import React from "react";
import DateTime from './DateTime'


const Weather = (props) => {
    return(
        <div className="weather__info">
                { 
                    props.city && props.country && <p className="weather__key">Location: 
                        <span className="weather__value" >{props.city}, {props.country}</span>
                        </p> 
                }                
                { 
                    props.temperature && <p className="weather__key">Temperatur:
                        <span className="weather__value">{props.temperature} °C</span> 
                        </p> 
                }
                { 
                    props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value"> {props.humidity}%</span>
                        </p> 
                }
                { 
                    props.description && <p className="weather__key">Conditions: 
                        <span className="weather__value">{props.description}</span>
                        </p> 
                }
                {/* { 
                    props.timezone && <p className="weather__key">Timezone: 
                        <span className="weather__value">{props.timezone}</span>
                        </p> 
                } */}
                { 
                    props.timezone && <p className="weather__key">Date : 
                        <span className="weather__value"><DateTime timezone={props.timezone}/></span>
                        </p> 
                }
                

                { 
                    props.error && <p className="weather__error"> {props.error} </p> 
                }
            </div>
    )
}

export default Weather;