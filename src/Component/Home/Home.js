import Abo from '../About/Abo';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
function Home(){
    return(
        <>
        <Navbar />
        <div class="intro">
      <h1>Home Page</h1>
      <p>This is home page which describes about this project.</p>
      <button>Learn More</button>
    </div>
    <Footer />
        </>
              
    )
}
export default Home