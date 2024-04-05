import './comments.css';
import Comment from "./comment"
import image from './gallery2dark.jpg'
import { useState } from 'react'
export default function MainComments()
{
    const [showTextimonies,setShowTextimonies]=useState(false);
    const [buttonText,setButtonText]=useState('Show Textimonies')
    const handleTestimonies=()=>
    {
        if(!showTextimonies)
        {
            setShowTextimonies(true)
            setButtonText("Hide Textimonies")
        }
        else
        {
            setShowTextimonies(false)
            setButtonText('Show Textimonies')
        }
    }
    return(
    <div className="mainComments">
        <button onClick={handleTestimonies}>{buttonText}</button>
        <hr />
        <h2>What People Say</h2>
        <hr />
            {showTextimonies&&(
            <div className="comments">
            <Comment  img={image} person={"Daniel"}/>
            <Comment  img={image} person={"Hazel"}/>
            <Comment  img={image} person={"Georgea"}/>
            </div>
       ) }
       <div className="te">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint aspernatur blanditiis adipisci deserunt debitis minus asperiores expedita eligendi ipsa, sunt, nobis nihil neque non harum ullam voluptates consectetur! Facilis, accusantium!</p>
       </div>
    </div>
    )
}