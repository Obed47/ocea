import { useState } from 'react';
import './services.css'

 function ServiceBox({props})
{
    return(
    <div className="serviceBox">
        <h2>{props}</h2>
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Aperiam similique necessitatibus fuga modi, atque, excepturi,
              at quibusdam doloremque aut asperiores debitis rem? Molestiae
            dolores at corporis beatae delectus saepe a!</h4>
    </div>
    );
}
function SlideShow(Img)
{
    let[image,SetImange]=useState(0);


    let images=[
        "image1",
        "image2",
        "image3",
        "image4"
    ]

    let nextImage=()=>
    {
        if(image<=images.length())
        {
            SetImange(image+=1);
            console.log(images[image])
        }
        else
        {
            SetImange(0);
        }
       
    }
    let PreviousImage=()=>
    {
        if(image>=0)
        {
            SetImange(image-=1);
        }
        else
        {
            SetImange(images.length())
        }
    }

  
    return(
    <div className="mainSlide">
        <button onClick={()=>PreviousImage}>Prev</button>
        <div className="image" style={{backgroundImage:`url(${images[image]})`,backgroundPosition:'center',backgroundSize:'cover'}}> </div>
        <button onClick={()=>nextImage}>Next</button>
    </div>
    )
}

function Services()
{
    let images=[
        "image1",
        "image2",
        "image3",
        "image4"
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