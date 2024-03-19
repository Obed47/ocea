import { useState } from 'react';
import './services.css'
import nails from './nails.jpg'
import image1 from './gallery2.jpg'
import image2 from './gallery3.jpg'
import image3 from './gallery4.jpg'
import image4 from './galllery1.jpg'




 function ServiceBox({props})
{
    return(
    <div className="serviceBox">
        <h2>{props}</h2>
        <div className="textAndImg">
            <img src={nails} alt="failed" />
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Aperiam similique necessitatibus fuga modi, atque, excepturi,
              at quibusdam doloremque aut asperiores debitis rem? Molestiae
            dolores at corporis beatae delectus saepe a!</h4>
            </div>
    </div>
    );
}
function SlideShow(Img)
{
    let[image,SetImange]=useState(0);


    let images=[
        image1,
        image2,
        image3,
        image4
    ]

    const nextImage=()=>
    {
        if(image<images.length-1)
        {
            SetImange(image+=1);

        }
        else
        {
            SetImange(0);
        }
       
    }
    const PreviousImage=()=>
    {
        if(image>0)
        {
            SetImange(image-=1);

        }
        else
        {
            SetImange(images.length-1)
        }
    }

    console.log(images[image])
    return(
            
    <div className="mainSlide">
        <button onClick={()=>PreviousImage()}>Prev</button>
        <div className="image">
            <img className='imageLoader' src={images[image]}alt="failed" />
        </div>
        <button onClick={()=>nextImage()}>Next</button>
    </div>
    )
}

function Services()
{
    let images=[
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
    ]
    return (
        <div className="mainServices">
            <div className="ser">
            <ServiceBox className="makeup" props={"MakeUp"}/>
            <ServiceBox props={"Nails"}/>
            </div>
            <div className="slideShow">
                <SlideShow Img={images}/>
            </div>

        </div>
    );
}

export {ServiceBox,SlideShow,Services}