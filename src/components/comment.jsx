import './comment.css'
export default function Comment({img,person})
{
    return(
    <div className="mainComm">
    <img src={img} alt="failed loading"/>
    <h3>{person.toUpperCase()}</h3>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Placeat debitis blanditiis porro reprehenderit recusandae 
         consectetur omnis commodi, voluptas, eos sit soluta dicta.
          Ab nisi officiis veniam perferendis quis nihil consequatur?
    </p>
    <hr />
    
    </div>
    )
}