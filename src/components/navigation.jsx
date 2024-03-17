import './navigation.css'

function Nav(title,{Change})
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
                <p onClick={()=>SetToHome("Homepage")}>{title.title}</p>
            </div>
            <div className="right">
                <ul>
                    <li onClick={()=>SetToHome("Homepage")}>Home</li>
                    <li> <a href="/">About</a></li>
                    <li> <a href="/">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Nav