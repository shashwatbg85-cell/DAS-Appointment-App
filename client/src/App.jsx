
import './App.css';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
import About from './pages/About';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import GallaryPage from './pages/Gallary/GallaryPage';
import Home from "./pages/Home";
import {Routes,Route} from 'react-router';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Auth/Login';
import AllDoctors from './pages/Doctors/AllDoctors';
import Appointments from './pages/Doctors/Appointments';
import UserProfile from './pages/user/UserProfile';
import MyAppointment from './pages/user/MyAppointment';

function App() {

  return ( 
    <>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallary" element={<GallaryPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctors" element={<AllDoctors/>}/>
        <Route path="/doctors/:id" element={<Appointments/>}/>
        <Route path="/user/profile" element={<UserProfile/>}/>
        <Route path="/user/appointments" element={<MyAppointment/>}/>

      </Routes>
      <Footer/>
    </>
   
  );
}

export default App;
