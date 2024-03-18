import './navigation.css'

function Nav({Change})
{
    const SetToHome=(c)=>
    {
        Change(c);
    }
    return(
        <div className="mainNav">
            <div onClick={()=>SetToHome("Homepage")} className="logoIcon">
                <p> logo here </p>
            </div>
            <div className="left">
                <p onClick={()=>SetToHome("Homepage")}>Ocea's Blush</p>
            </div>
            <div className="right">
                <ul>
                    <li onClick={()=>SetToHome("Homepage")}>Home</li>
                    <li onClick={()=>SetToHome("About")}>About</li>
                    <li onClick={()=>SetToHome("Contact")}> Contact</li>
                </ul>
            </div>
        </div>
    );
}
export default Nav