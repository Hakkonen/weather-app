import React, { useState, useEffect } from 'react'
import useAxios from 'axios-hooks'
import { LineChart, Line, XAxis, Tooltip } from 'recharts'

function Forecast(props) {
    const [ hourly ] = useState([])
    const [renderLineChart, setRenderLineChart ] = useState()
    const chartData = []
    const [{loading, error, response}] = useAxios(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.location}&units=metric&appid=d233733ddc2dfd6e8b9278bce7c20c19`
    )

    useEffect(() => {
        if (!response) {
            console.log('loading')
        } else {
            for (const key in response.data.list) {
                let timeKey = response.data.list[key].dt_txt.substr(11,2) + 'h'
                if (timeKey[0] === '0') {timeKey = timeKey.slice(1)}
                chartData.push({
                    // key: key, 
                    time: timeKey, 
                    temp: response.data.list[key].main.temp, 
                    pv: 0, amt: 0
                },)
            }
            console.log(chartData)
            console.log(chartData[0])
            for(let x = 0; x < 8; x++) {
                hourly.push(chartData[x])
            }
            console.log(hourly)
            setRenderLineChart(
                <LineChart width={(window.innerWidth)*75/100} height={150} data={hourly}>
                    <Line type="monotone" dataKey="temp" stroke="rgb(254,203,54)" />
                    {/* <CartesianGrid stroke="rgb(254,203,54)" /> */}
                    <XAxis dataKey="time" />
                    {/* <YAxis /> */}
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#f5f5f5' }} />
                </LineChart>
            )
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response])

    if (loading) return <p className='text-center text-gold'>Loading!</p>
    if (error) return <p>Error!</p>
    
    return (
        <div className='d-lg-flex container module-dimensions justify-content-center align-items-center w-75 text-gold'>
            <div className='row pt-5'>
                <span className='col text-center'>24 Hour Forecast</span>
            </div>

            <div className='row pt-5 justify-content-center align-items-center'>
                {renderLineChart}
            </div>
        </div>
    )
}

export default Forecast