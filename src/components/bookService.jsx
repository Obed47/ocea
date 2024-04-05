import { useState } from 'react';
import './bookService.css'
function BookService({S})
{
    const[display,setDisplay]=useState(false);
    const HandleClick=(variale)=>
    {
        S(variale);
    }
    return(
        <div className="mainBook">
           <div className="headtext">
            <h3>Booking</h3>
           </div>
           <div className="inputfields">
            <input type="text" placeholder='Names:'/>
            <input type="text" placeholder='Email:'/>
            <input type="text" placeholder='Contact:'/>
            <select >
                <option value="Hair dressing">Hair Dressing</option>
                <option value="Nails">Nails</option>
                <option value="Makeup">Makeup</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Feet cleaning">Feet Cleaning</option>
            </select>
            <input type="text" placeholder='Date:'/>
            <input type="text" placeholder='Availability:'/>
                <input className='Description' type="text" placeholder='Brief Description of expectations here' />
                <button onClick={()=>HandleClick("Homepage")} className='submitButton'>Submit</button>
           </div>
        </div>
    )
}
export default BookService;