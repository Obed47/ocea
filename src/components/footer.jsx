import './footer.css'
function Footer()
{
    return(
        <div className="MainFooter">
            <div className="subscription">
                <h3>Subscribe Here</h3>
                <input type="text" placeholder='Email' />
                <input type="text" name="" id="" placeholder='Password' />
                <button>Subscribe</button>
            </div>
            <div className="desk">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Blanditiis excepturi rerum voluptate harum hic obcaecati,
                      sint deserunt modi, exercitationem reprehenderit qui.
                       Accusantium exercitationem maiores fuga vero 
                       asperiores laboriosam consequatur vitae.
                </p>
            </div>
           <div className="icons">
            <h3>Contact Us</h3>
           <a href="#" class="fa fa-facebook"></a>
           <a href="#" class="fa fa-twitter"></a>
           <a href="#" class="fa fa-whatsapp"></a>
           <a href="#" class="fa fa-instagram"></a>
           </div>
        </div>
    );
}
export default Footer