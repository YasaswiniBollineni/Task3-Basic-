//empty functional component(just function and fragments)
import {Link, Routes, Route} from "react-router-dom";
import Home from '../Home/Home';
import Abo from '../About/Abo';
import Cont from '../Contact/Cont';//svg(for logo)
import Login from "../Login/Login";
import './Navbar.css';
import Getweather from "../Getweather/Getweather";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
function Navbar(){
    return(
    <>
    <div class="navbar">
        <div class="logo">
            <img src="https://seeklogo.com/images/W/web-site-www-icon-logo-C9F2B6A779-seeklogo.com.png" alt="Logo">
            </img>
        </div>
        <nav>
            <ul>
               <li><a href=""><Link to='/Home'><i class="fa-solid fa-house fa-bounce"></i>Home</Link></a></li>
                <li><a href=""><Link to='/Abo'><i class="fa-solid fa-user fa-bounce"></i>About</Link></a></li>
                <li><a href=""><Link to='/Cont'><i class="fa-solid fa-phone fa-bounce"></i>Contact</Link></a></li>
               
                <li><a href=""><Link to='/Getweather'><i class="fa-solid fa-temperature-half fa-bounce"></i>Getweather</Link></a></li>
                <li><a href=""><Link to='/WeatherForecast'><i class="fa-solid fa-cloud fa-bounce"></i>WeatherForecast</Link></a></li>
            </ul>
        </nav>
    </div>
      
        <Routes>
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/Abo' element={<Abo />}></Route>
            <Route exact path='/Cont' element={<Cont />}></Route>
            <Route exact path='/Getweather' element={<Getweather />}></Route>
            <Route exact path='/WeatherForecast' element={<WeatherForecast />}></Route>
        </Routes>
        <script src="https://kit.fontawesome.com/3e6970347a.js" crossorigin="anonymous"></script>
        
    </>
   
    );
}
export default Navbar;