import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

function Current(props) {

    useEffect(() => {
        // console.log(props)
    }, [props])

    return (
        <div className='d-lg-flex container module-dimensions justify-content-center align-items-center w-75'>
            <div className='row'>
                <div className='col text-gold text-center'>

                    <div className='row'>
                        <span className='col'>Current Temp</span>
                    </div>

                    <div className='row'>
                        <span className='splash-temp col'>
                            {Math.round(props.weather.main.temp)}
                            <span className='splash-temp-celsius'>&#8451;</span>
                        </span>
                    </div>
                    {/* Heat bar */}
                    <div className="progress">
                        <div 
                            className="progress-bar bg-warning" 
                            role="progressbar" 
                            style={{width: ((props.weather.main.temp*100)/props.weather.main.temp_max)}}
                            aria-valuenow={props.weather.main.temp} 
                            aria-valuemin={props.weather.main.temp_min} 
                            aria-valuemax={props.weather.main.temp_max} 
                        />
                    </div>

                    <div className='row p-1'>
                        <div className='col text-left'>
                            <span className='text-grey'>Min: </span><span>{Math.floor(props.weather.main.temp_min)}</span>
                        </div>
                        <div className='col text-right'>
                            <span className='text-grey'>Max: </span><span>{Math.ceil(props.weather.main.temp_max)}</span>
                        </div>
                    </div>

                    <div className='row p-1'>
                        <div className='col-6 text-left'>
                            <span className='text-grey'>Feels like: </span>
                        </div>
                        <div className='col-6 text-right'>
                            <span>{Math.round(props.weather.main.feels_like)}</span>
                        </div>
                    </div>

                    <div className='row p-1'>
                        <div className='col-6 text-left'>
                            <span className='text-grey'>Wind: </span>
                        </div>
                        <div className='col-6 text-right'>
                            <span>{Math.round(props.weather.wind.speed)}<span className='text-grey'> kp/h</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Current