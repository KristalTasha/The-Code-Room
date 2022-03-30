import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/land_index.css';

export default function LandIndex() {
  return (


    <div className='land-index-page'>
      <div className='frame-1'></div>
      <div className='frame-2'>
        <h2 className='who'>Who are we?</h2>
        <p className='who-text'>We offer you a brand new experience of Tech News</p>
        <Link to="/articles" className='browse-articles'>Browse articles</Link>
      </div>
      <div className='frame-3'></div>

      <div className='frame-4'>
        <h2 className='who'>We report</h2>
        <p className='who-text'>We bring you the latest feed from the Tech community</p>
       
      </div>
      <div className='frame-5'></div>
      <div className='frame-6'>
        <h2 className='who'>We hear from you</h2>
        <p className='who-text'>We listen to your views and thoughts and we create news together!</p>
        
      </div>
    </div>


  )
}
