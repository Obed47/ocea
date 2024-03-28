import { useState } from 'react';
import './imageGallery.css';
import gal1 from './galllery1.jpg'
import gal2 from './gallery2.jpg'
import gal3 from './gallery3.jpg'
import gal4 from './gallery4.jpg'




export default function ImageGallery()
{
    const gallery=[
        gal1,gal2,gal3,gal4
    ]
    return (
        
        <div className="mainGallery">
            {gallery.map((g)=>(
                <img  src={g} alt="failed" />
                
            ))}
           

        </div>
    )
}