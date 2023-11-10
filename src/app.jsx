import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Booking from './Pages/Booking';
import './Store'
import ConfirmationTicket from './Pages/ConfirmationTicket';

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="booking" element={<Booking/>}/>
        <Route path="confrimation" element={<ConfirmationTicket/>}/>
        <Route path="*" element={<PageNotFound/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
