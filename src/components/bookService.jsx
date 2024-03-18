import './bookService.css'
function BookService({S})
{
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
            <input type="text" placeholder='Service needed:'/>
            <input type="text" placeholder='Date:'/>
            <input type="text" placeholder='Availability:'/>
                <input className='Description' type="text" placeholder='Brief Description of expectations here' />
                <button onClick={()=>HandleClick("Homepage")} className='submitButton'>Submit</button>
           </div>
        </div>
    )
}
export default BookService