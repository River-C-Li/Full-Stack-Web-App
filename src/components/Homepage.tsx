import Carousel from "./Carousel";
import "./Homepage.css"
import kiaVideo from "../img/kiacarnival.mp4"
 
import connectivityIcon from "../img/connectivity-icon-hover-v4.gif"
import safeIcon from  "../img/keep-you-safe_icon.gif" 
import fuelIcon from  "../img/alt-fuel_icon.gif"
import findDealer from "../img/findDealer.png"
import getOffer from "../img/getOffer.png"
import localPrice from "../img/localPrice.png"
import preOwner from "../img/preOwner.png"


  export function Homepage() {
    return (
   <main className="allmain"> 

  <header style={{backgroundColor:"black"}}>
  <figure className="iframe" style={{backgroundColor:"black"}}>
      <div className="iframetext">
          <div id="iframetexth1">Versatility on <br/>a new level</div>
      <div className="blockcarname">
      <p className="carnivalh">Carnival MPV Hybrid</p>
      <p className="carnival">Carnival MPV</p>
     </div>
  </div>
  <video autoPlay loop  muted  playsInline 
  className="home-hero__video"   src={kiaVideo}   width="100%" 
      height="750px"></video>
  </figure>
</header>

  <section className="threescreen">
      <div className="screen" id="ev9"  >
          <div>
              <p><span className="heading" style={{font:"38px"}}>All-new Kia EV9</span><br/>
                  <span style={{font:"18px"}}>SUV CAPABILITY. EV POWER</span>
              </p>
          </div>
              <div className="dotsingle">
                  <p className="clickbutton">Meet EV9</p>
              </div>
          
      </div>
      <div className="screen" id="Sportage">
          <div>
              <p><span className="heading" style={{font:"38px"}}>
                  2025 Sportage Hybrid</span><br/>
                  <span style={{font:"18px"}}>MILES OF POSSIBILITIES</span>
              </p>
          </div>
          
              <div className="dotsingle" style={{width: "200px"}}>
                  <p className="clickbutton">Meet Sportage Hybrid</p>
              </div>
         
      </div>
      <div className="screen" id="telluride">
          <div>
              <p><span className="heading" style={{font:"38px"}}>
                  2024 Telluride</span><br/>
                  <span  style={{font:"18px"}}>RUGGED & REFINED</span>
              </p>
          </div>
          
              <div className="dotsingle">
                  <p className="clickbutton">Meet Telluride</p>
              </div>
         
      </div>
  </section>

  <section className="" style={{height:"100%", width:"100%"}}>
 <Carousel />
  </section>

  <div id="biggap" style={{backgroundColor: "rgb(0, 0, 0)"}}>
  </div>

  <section className="service">
      <div className="secondmain">
          <div className="leftsecondmain" >
              
                  <p>THE KIA DIFFERENCE WITH<br/>Engineered With Power</p>
                  <div className="dotsingle">
                      <p  className="clickbutton">Why KIA ?</p>
                  </div>              
          </div>
          <div className="rightsecondmain">
              <div className="rightsecond" style={{background: "rgb(206, 205, 205)"}}>
                  <div className="svgservice">
                      <img src={findDealer}  style={{height:"70px"}}/>
                  </div>
                      <p className="boxtext">Find a Dealer</p>
                  
              </div>
              <div className="rightsecond" style={{background: "rgb(179, 179, 179)"}}>
                  <div className="svgservice">
                      <img src={getOffer}  style={{height:"70px"}}/>
                  </div>
                      <p className="boxtext">Offers and <br/>Incentives</p>
                  
              </div>
              <div className="rightsecond" style={{background: "rgb(179, 179, 179)"}}>
                  <div className="svgservice" >
                      <img  src={localPrice}  style={{height:"70px"}}/>
                  </div>
                      <p className="boxtext">Get a Local<br/> Price</p>
                  
              </div>
              <div className="rightsecond" style={{background: "rgb(206, 205, 205)"}}>
                  <div className="svgservice">
                      <img src={preOwner} style={{height:"70px"}}/>
                  </div>
                      <p className="boxtext">Certified <br/>Pre-OwnedApr</p>
                  
              </div>

          </div>
      </div>
  </section>

  <section className="threescreen tech">
      <div className="screen" id="bottomscreen1">
          <div className="svgservice">
              <img src={fuelIcon} style={{height:"70px"}}/>
          </div>
          <div>
              <p><span className="heading" style={{fontSize:"38px"}}>EV, hybrid, and beyond
                  </span><br/>
                  <span style={{fontSize:"18px", lineHeight:"0.9"}} >Discover which Kia electric, 
                      hybrid, or plug-in <br/>hybrid vehicle is right for you.</span>
              </p>
          </div>
          
              <div className="dotsingle">
                  <p className="clickbutton">Exploer Features</p>
              </div>
          
      </div>
      <div className="screen" id="bottomscreen2">
          <div className="svgservice">
              <img src={connectivityIcon} style={{height:"70px"}}/>
          </div>
          <div>
              <p><span className="heading" style={{fontSize:"38px"}}>Kia Connect
                 </span><br/>
                  <span style={{fontSize:"18px", lineHeight:"0.9"}}> Use Kia Access for vehicle
                      connectivity,boosting <br/> security,convenience, and comfort.</span>
              </p>
          </div>
         
              <div className="dotsingle">
                  <p className="clickbutton">Exploer Features</p>
              </div>
          
      </div>
      <div className="screen" id="bottomscreen3"  >
          <div className="svgservice">
              <img src={safeIcon}  style={{height:"70px"}}/>
          </div>
          <div>
              <p><span className="heading" style={{fontSize:"38px"}}>Keeping you safe
                  </span><br/>
                  <span style={{fontSize:"18px", lineHeight:"0.9"}}>Explore Kia’s suite of<br/>advanced
                       safety features.</span>
              </p>
          </div>
          
              <div className="dotsingle" >
                  <p className="clickbutton">Exploer Features</p>
              </div>
        
      </div>
  </section>
  </main>
 )
  }
