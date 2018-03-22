import React from 'react';
import location from'./photo.jpeg';
import Tilt from 'react-tilt';
import './Photo.css'

const Photo = () =>{
  return (
    <div className='flex-container'>
    
        <div className='pr4 pl4'>
            <p className='f1 b v-mid h-mid white'>I' am<br/>Äalok Pujari</p>
        </div>
        
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 250, width: 350 }} >
                <div className="Tilt-inner">
                    <img className='br2 h5 w5 dib photoFrame flex-container' alt='Aalok' title='Aalok' src={location}/>
                </div>
            </Tilt>
        
        <div className='pr3'>
            <p className='v-mid f3 white'>"Entry Level Software Engineer enthusiastic about developing practical software solutions. Adept at identifying issues with existing software and creating innovative new software solutions."</p>
        </div>
       
    </div>
    );
}

export default Photo;