
import './App.css';
import Footer from './Component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Signup from './Component/Login/Signup';
import Login from './Component/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Abo from './Component/About/Abo';
import Cont from './Component/Contact/Cont';//svg(for logo)
import Getweather from "./Component/Getweather/Getweather";
import WeatherForecast from "./Component/WeatherForecast/WeatherForecast";
function App() {
  return (
    // <>
    //   <Navbar/>  
    //   <Footer/>
    //   <Signup />
    // </>
    
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/navbar' element={<Navbar />}></Route>
      <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/Abo' element={<Abo />}></Route>
            <Route exact path='/Cont' element={<Cont />}></Route>
            <Route exact path='/Getweather' element={<Getweather />}></Route>
            <Route exact path='/WeatherForecast' element={<WeatherForecast />}></Route>
    </Routes>
  );
}

export default App;
