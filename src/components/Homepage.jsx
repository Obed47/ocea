import './Homepage.css'

function Homepage({changePage})
{
     const Handleclick=(s)=>
     {
        changePage(s);
     }
    return(
        <div className="mainHomepage">
            

            <div className="center">
            <div className="links">
            <button onClick={()=>Handleclick("Catalogue")}>Catalogue</button>
            <button onClick={()=>Handleclick("Chat")}>Chat</button>
            <button className='booking' onClick={()=>Handleclick("bookService")}>Book Service</button>
            <button onClick={()=>Handleclick("images")}>Images</button>
            <button onClick={()=>Handleclick("CEO")}>CEO</button>
            <button onClick={()=>Handleclick("faq")}>FAQ</button>
            </div>
            <hr />
                <h1>Enhance Your Natutal <br />Beauty</h1>
                <p><text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quibusdam eaque culpa, in possimus voluptatibus nemo
                      ducimus architecto! Quae soluta architecto nam placeat quisquam, 
                      molestias esse ipsam vero porro delectus consequatur!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Est hic consequuntur unde quas aut. Magnam ullam, 
                       amet magni ipsam ratione cumque tempora sequi quidem
                        incidunt est quisquam corrupti assumenda delectus.</text></p>
            </div>
        </div>
    );
}
export default Homepage