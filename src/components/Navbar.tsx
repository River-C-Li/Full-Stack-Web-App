// import {Container, Nav, Button, Navbar as NavbarBs} from "react-bootstrap"
// import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import "./Homepage.css"
import kiaLogo from "../img/kia_logo_white.svg"
import mapPin  from "../img/map pin-white.png"
import subCar1  from "../img/kia_homepage_navigation_large-desktop_carnival-ice_hover.png"
export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()

    return<nav>
    <div className="navleft">
    <Link to="/">
      <div id="logo">
        <a >
          <img src={kiaLogo} alt="logo" height="50px"
            width="auto" /></a>
      </div>
      </Link>
      <Link to="/Model">
      <div className="subnav">
        <button className="subnavbtn">Model</button>
        <ul className="subnav-content">
          <li className="subnavcar" >
            <h6>KIA EV9</h6>
            <img src={subCar1} style={{height:"120px%", width:"auto%"}}/>
          </li>
          <li className="subnavcar" >
            <h6>SPORTAGE HYBRID</h6>
            <img src={subCar1} style={{height:"120px%", width:"auto%"}}/>
          </li>
          <li className="subnavcar" >
            <h6>SOUL</h6>
            <img src={subCar1} style={{height:"120px%", width:"auto%"}}/>
          </li>
          <li className="subnavcar" style={{borderRight:"none"}}>
            <h6>SPORTAGE HYBRID</h6>
            <img src={subCar1} style={{height:"120px%", width:"auto%"}}/>
          </li>
          <li className="subnavcar" >
            <h6>SOUL</h6>
            <img src={subCar1}style={{height:"120px%", width:"auto%"}}/>
          </li>
          <li className="subnavcar" >
            <h6>SPORTAGE HYBRID</h6>
            <img src={subCar1} style={{height:"120px%", width:"auto%"}}/>
          </li>
          <li className="subnavcar" >
            <h6>SOUL</h6>
            <img src={subCar1} style={{height:"120px%", width:"auto%"}}/>
          </li>
           
        </ul>
      </div>
      </Link>

      <Link to="/Store">
      <div className="subnav">
        <button className="subnavbtn">Inventory</button>
        <ul className="subnav-content">
          <li className="subnavcar"  ><a href="./Model">KIA EV9</a> </li>
          <li className="subnavcar" > SPORTAGE HYBRID</li>
          <li className="subnavcar" >SOUL</li>
          <li className="subnavcar" style={{borderRight:"none"}}>KIA EV9 </li>
          <li className="subnavcar" > SPORTAGE HYBRID</li>
          <li className="subnavcar">SOUL</li>
        </ul>
      </div>
      </Link>
      <Link to="/ShoppingHelp">
      <div className="subnav">
        <button className="subnavbtn">Assistant</button>
      </div>
      </Link>

      <Link to="/Forum">
      <div className="subnav">
        <button className="subnavbtn">Forum</button>
        <ul className="subnav-content">
          <li className="subnavcar" >Owner Fourm</li>
          <li className="subnavcar" >After Sell Service</li>
          <li className="subnavcar" >kIA Culture</li>
          <li className="subnavcar"  style={{borderRight:"none"}}>Owner Fourm</li>
          <li className="subnavcar" >After Sell Service</li>
          <li className="subnavcar" >kIA Culture</li>
        </ul>
      </div>
      </Link>
   
    </div>
    
    <div className="navright">
      <div className="subnavbtn" style={{fontSize:"14px"}}>
        <img src={mapPin} width="18px" height="18px"/>Find a Dealer</div>
      <form>       
         <label className="subnavbtn" style={{fontSize:"14px"}}>Find New Car</label>
         
         
          <select name="carchoice" id="carchoice">
            <option className="carname" value="KIA EV9" >KIA EV9</option>
            <option  className="carname" value="SPORTAGE" >SPORTAGE</option>
            <option  className="carname" value="SOUL" >SOUL</option>
            <option  className="carname" value="CARNIVA" > CARNIVAL</option>  
          </select>
         
        </form>

    </div>
    <button 
            onClick={openCart}
            style={{backgroundColor:"white", width:"1.5em", height:"1.5em", position:"relative", right: "13px"}}
            // variant="outline-primary"
            className="rounded-circle "
            >
                <svg  width="20px" height="20px"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16.5" cy="18.5" r="1.5"/>
  <circle cx="9.5" cy="18.5" r="1.5"/>
  <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
</svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{ backgroundColor:" #b29376;", borderRadius:"50%", 
                  fontSize:"14px", color:"white",
                width:"1.5em",
                height:"1.5em",
                position:"relative",
                bottom: "12px",
                right: "13px",
                transform: "translate(25%, 25%)",
                }}>
                    {cartQuantity}
                </div>
            </button>
    </nav>

  }
  