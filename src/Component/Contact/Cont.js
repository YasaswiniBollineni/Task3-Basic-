import React from "react";
import "./Cont.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function Cont() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "931ccdae-1072-45df-a3bb-18d93cc3119f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", { method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
   <>
   <Navbar />
   <div class="container1">
      <span class="big-circle"></span>
      <img src="Images/shape.jpg" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src="D:\react\myapp\src\Images\location.jpg" class="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div class="information">
              <img src="D:\react\myapp\src\Images\email.jpg" class="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              <img src="D:\react\myapp\src\Images\phone.jpg" class="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form autocomplete="off" action="https://api.web3forms.com/submit" method="POST">
         
            <h3 class="title">Contact us</h3>
            <input type="hidden" name="access_key" value="931ccdae-1072-45df-a3bb-18d93cc3119f" />
            <label for="">Username</label>

            <div class="input-container1">
              
              <input type="text" name="name" class="input" />
          
             
            </div>
            <label for="">Email</label>
            <div class="input-container1">
              <input type="email" name="email" class="input" />
              
              <span>Email</span>
            </div>
            <label for="">Phone</label>
            <div class="input-container1">
              <input type="tel" name="phone" class="input" />
             
              <span>Phone</span>
            </div>
            <label for="">Message</label>
            <div class="input-container1 textarea">
              <textarea name="message" class="input"></textarea>
             
              <span>Message</span>
            </div>
            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>
      </div>
    </div>

  <Footer />
   </>


  )
}
export default Cont



