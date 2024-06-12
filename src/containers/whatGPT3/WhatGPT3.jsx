import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatGPT3 section__margin' id='whtgpt3'>
      <div className="gpt3__whatGPT3-feature">
        <Feature />
        <div className="gpt3__whatGPT3-heading">
          <h1 className="gradient__text">
            The Possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatGPT3-container">
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3