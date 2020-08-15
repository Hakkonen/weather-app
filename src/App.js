import React, { useState } from 'react'
import useAxios from 'axios-hooks'

import './App.css'

import Current from './components/Current'
import LocationSearch from './components/LocationSearch'
import Forecast from './components/Forecast'

// https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=d233733ddc2dfd6e8b9278bce7c20c19

function App() {
  const [ location, setLocation ] = useState('Melbourne,au')
  const [{data, loading, error}] = useAxios(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d233733ddc2dfd6e8b9278bce7c20c19`
  )

  if (loading) return <p className='text-center text-gold'>Loading!</p>
  if (error) console.log(error)
  

  function handleSubmit(event) {
    const formattedInput = event.replace(' ', '%20')
    setLocation(formattedInput)
    // console.log(formattedInput)
  }

  return (
    <div className='main-body bg-dark-grey container'>
      <div className='row p-1'>
        <div className='col'>
          <LocationSearch search={handleSubmit} name={data.name} />
        </div>
      </div>
      <br/>
      <div className='row p-1'>
        <div className='col'>
          <Current weather={data} />
        </div>
      </div>
      <div className='row p-1'>
        <div className='col'>
          <Forecast location={location} />
        </div>
      </div>
    </div>
  )
}

export default App