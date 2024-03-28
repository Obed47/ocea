import './App.css'
import { useState } from 'react';
import { ReactDOM } from 'react';
import { Router } from 'react-router';
import Homepage from './components/Homepage';
import Nav from './components/navigation';
import Faq from './components/faq';
import Chat from './components/chat';
import Ceo from './components/Ceo';
import Catalogue from './components/Catalogue';
import BookService from './components/bookService';
import Images from './components/images';
import Footer from './components/footer';
import { Services,ServiceBox } from './components/services';
import ImageGallery from './components/ImageGalllery';
//implement routung here in the homepage.
//check notes in book

function App()
{
  const[page,setPage]=useState("Homepage");
  let ChangePage=(page)=>
  {
    setPage(page);
  }
  return (
    <div className="mainApp">
      <div className="page1">
      <Nav Change={ChangePage}/>
      {page==="Homepage" &&  <Homepage className="home" changePage={ChangePage}/> }
      {page==="faq" && <Faq/>}
      {page==="Catalogue" && <Catalogue/>}
      {page==="Chat" && <Chat/>}
      {page==="bookService" && <BookService S={ChangePage} className='Booking'/>}
      {page==="CEO" && <Ceo/>}
      {page==="images" && <Images/>}
      </div>
      <div></div>
      <div className="ser">
        <ImageGallery/>
       <Services/>
      </div>
      <Footer/>
    </div>
  );
}
export default App