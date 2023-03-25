import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Admin from "./pages/admin";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
     <Navbar></Navbar>

     <Routes> 
       <Route path='/' element={<Home/>} ></Route>
       <Route path='/catalog' element={<Catalog/>} ></Route>
       <Route path='/about' element={<About/>} ></Route>
       <Route path='/cart' element={<Cart/>} ></Route>
       <Route path='/admin' element={<Admin/>} ></Route>

     </Routes> 
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
