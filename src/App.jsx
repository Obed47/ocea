import './App.css'
import { useState } from 'react';
import Homepage from './components/Homepage';
import Nav from './components/navigation';
import Faq from './components/faq';
import Chat from './components/chat';
import Ceo from './components/Ceo';
import Catalogue from './components/Catalogue';
import BookService from './components/bookService';
import Images from './components/images';
import { Services,ServiceBox } from './components/services';
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
      <Nav title="Oceas Blush" Change={ChangePage}/>
      {page==="Homepage" && <Homepage changePage={ChangePage}/>}
      {page==="faq" && <Faq/>}
      {page==="Catalogue" && <Catalogue/>}
      {page==="Chat" && <Chat/>}
      {page==="bookService" && <BookService/>}
      {page==="CEO" && <Ceo/>}
      {page==="images" && <Images/>}
      </div>
      <div></div>
      <div className="ser">
        <Services/>
      </div>
    </div>
  );
}
export default App