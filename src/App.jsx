import './App.css';
import foto from "./images/foto.jpg"
import avatar from "./images/Avatar.png"
import soat from "./images/12px.png"
import person from "./images/Image.png"
import naushnik from "./images/naushnik.png"
import phone from "./images/phone.png"
import covid from "./images/covid.png"
import phone2 from "./images/phone2.png"
import noutbuk from "./images/noutbuk.png"
import shoes from "./images/shoes.png"
import place from "./images/marketplace.png"
import car from "./images/car.png"
import tuya from "./images/tuya.png"
import city from "./images/city.png"



function App() {
  return (
    <div className="App">
      {<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />}

      <div className='header'>
        <h1 className='logo'>Fabrx</h1>
        <div className='fo'>
          <img className='foto' src={foto} alt="" />
          <h2>Bruce Lee</h2>
        </div>
        <div class="icons">
          <i class="fa-solid fa-gift"></i>
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>

      <div className='header-2'>
        <div className='box'>
          <h3 className='text'>5 mind blowing facts about the iPhone 14</h3>
          <div className='avatar-text'>
            <img className='avatar' src={avatar} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
        </div>
      </div>

      <h1 className='footer-text'>Featured articles</h1>

      <div className='footer'>

        <div className='footer-box'>
          <img className='soat' src={soat} alt="" />
          <h6 className='footer-text-soat'>10 beaches you must visit</h6>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-person'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>

        <div className='footer-box'>
          <img className='soat' src={naushnik} alt="" />
          <h6 className='footer-text-soat'>10 beaches you must visit</h6>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-person'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>

        <div className='footer-box'>
          <img className='soat' src={phone} alt="" />
          <h6 className='footer-text-soat'>10 beaches you must visit</h6>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-person'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>
      </div>

      <div className='footer'>

        <div className='footer-box'>
          <img className='soat' src={covid} alt="" />
          <h6 className='footer-text-soat'>10 beaches you must visit</h6>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-person'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>

        <div className='footer-box'>
          <img className='soat' src={phone2} alt="" />
          <h6 className='footer-text-soat'>10 beaches you must visit</h6>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-person'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>

        <div className='footer-box'>
          <img className='soat' src={noutbuk} alt="" />
          <h6 className='footer-text-soat'>10 beaches you must visit</h6>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-person'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>
      </div>


      <div className='footer-2'>

        <div className='goods'>
          <button>Featured</button>
          <h2>Beached to take you somewhere else</h2>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
        </div>
      </div>

      <h1 className='footer-text'>Featured articles</h1>
      <div className='hr'></div>

      <div className='box-shoes'>

        <div className='foto-shoes'>
          <img className='shoes' src={shoes} alt="" />
        </div>

        <div className='textsss'>
          <h4 className='text-text'>Pathway to the Mediterranean</h4>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-pers'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>
      </div>


      <div className='box-shoes'>

        <div className='foto-shoes'>
          <img className='shoes' src={place} alt="" />
        </div>

        <div className='textsss'>
          <h4 className='text-text'>Pathway to the Mediterranean</h4>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-pers'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>
      </div>


      <div className='box-shoes'>

        <div className='foto-shoes'>
          <img className='shoes' src={car} alt="" />
        </div>

        <div className='textsss'>
          <h4 className='text-text'>Pathway to the Mediterranean</h4>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-pers'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>
      </div>


      <div className='box-shoes'>

        <div className='foto-shoes'>
          <img className='shoes' src={tuya} alt="" />
        </div>

        <div className='textsss'>
          <h4 className='text-text'>Pathway to the Mediterranean</h4>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-pers'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>
      </div>


      <div className='box-shoes'>

        <div className='foto-shoes'>
          <img className='shoes' src={city} alt="" />
        </div>

        <div className='textsss'>
          <h4 className='text-text'>Pathway to the Mediterranean</h4>
          <div className='person-text'>
            <img className='person' src={person} alt="" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className='texts-pers'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
        </div>

      </div>

      <button className='btn'>Load more</button>

      <div className='boxnew'>
        <div className='boxnewbox'>
          <h1>Incredible deals, right to your inbox!</h1>
          <input type="text" name="" id="" placeholder='Placeholder' />
          <p>By joining you agree to our Terms and Conditions</p>
        </div>
      </div>

      <div className='hr'></div>

      <div className='disp'>

      <div className='endbox'>
        <a className='f1' href="#">First Column</a>
        <p><a href="#">Link One</a></p>
        <p><a href="#">Link Two</a></p>
        <p><a href="#">Link Three</a></p>
        <p><a href="#">Link Four</a></p>
        
      </div>

      <div className='endbox'>
        <a className='f1' href="#">First Column</a>
        <p><a href="#">Link One</a></p>
        <p><a href="#">Link Two</a></p>
        <p><a href="#">Link Three</a></p>
        <p><a href="#">Link Four</a></p>
      </div>

      <div className='endbox'>
        <a className='f1' href="#">First Column</a>
        <p><a href="#">Link One</a></p>
        <p><a href="#">Link Two</a></p>
        <p><a href="#">Link Three</a></p>
        <p><a href="#">Link Four</a></p>
      </div>

      <div className='endbox'>
        <a className='f1' href="#">First Column</a>
        <p><a href="#">Link One</a></p>
        <p><a href="#">Link Two</a></p>
        <p><a href="#">Link Three</a></p>
        <p><a href="#">Link Four</a></p>
      </div>

<div className='endbox'>
      <p className='yoz'>Never miss an update</p>
      <input type="text" name="" id="" placeholder='Placeholder' />
</div>
      </div>
      <div className='hr'></div>


<div className='dispp'>

      <div className='con'>
      <i class="fa-brands fa-slack"></i>
      </div>

      <div>
        <p>© 2019 Fabrx </p>
      </div>

      <div className='con'>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      </div>
</div>

<div className='hr'></div>



    </div>
  );
}

export default App;
