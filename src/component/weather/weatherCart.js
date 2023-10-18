import React, { useEffect } from 'react'

const WeatherCart = ({ temp,
    humidity,
    pressure,
    main,
    name,
    speed,
    country,
    sunset,}) => {
      
    const [weatherstate, setWeatheState]= React.useState("");
   

      useEffect(()=> {
        if(main){
            switch(main){
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                 case "Mist":
                        setWeatheState("wi-dust");
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    break;

            }
        }
      }, [main]);

      //converting the seconds into time

      let sec = sunset;
      let date = new Date(sec * 1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherstate}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{main}</div>
            <div className="place"> {name}, {country}</div>
          </div>
        </div>

        <div className="date">
           {new Date().toLocaleString()}
        </div>

        {/* our 4colum section */}
        
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
                 <p>
                  <i className={"wi wi-sunset"}></i>
                 </p>
                 <p className="extra-info-leftside">
                  {timeStr} PM <br/>
                  Sunset
                 </p>
            </div>
            <div className="two-sided-section">
                 <p>
                  <i className={"wi wi-humidity"}></i>
                 </p>
                 <p className="extra-info-leftside">
                  {humidity} <br/>
                  Humidity
                 </p>
            </div>
          </div>
          <div className="weather-extra-info">
          <div className="two-sided-section">
                 <p>
                  <i className={"wi wi-rain"}></i>
                 </p>
                 <p className="extra-info-leftside">
                  {pressure}<br/>
                  Pressure
                 </p>
            </div>
            <div className="two-sided-section">
                 <p>
                  <i className={"wi wi-strong-wind"}></i>
                 </p>
                 <p className="extra-info-leftside">
                  {speed} <br/>
                  speed
                 </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCart
