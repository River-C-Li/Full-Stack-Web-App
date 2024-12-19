import "./Homepage.css"
import kiaLogo from "../img/kia_logo_white.svg"

export function Footer() {
    return<div style={{backgroundColor:"black"}}>
    <div id="biggap">
        <a href="/">
            <img
            src={kiaLogo}
            alt="triangle with all three sides equal"
            height="50px"
            width="auto" /></a>
    </div>
            <div className="lastmain">
               
                <div  className="footertext">
                    <div  className="footertextdetai">Vehicles<br/>
                    Certified Pre-Owned<br/>
                    Why Kia heart<br/>
                    Kia Collective <br/>
                    Owners 
                    </div>
                </div>
    
                <div  className="footertext">
                    <div  className="footertextdetai">About Our Vehicles<br/>
                    SUV Family<br/>
                    Sedan Family<br/>
                    Alternative Fuel Vehicles<br/>
                    Kia Safety Technology<br/>
                    Kia Connect<br/>
                    Accessories<br/>
                    Request a Brochure</div>
                </div>
    
                <div  className="footertext">
                  <div  className="footertextdetai">Corporate<br/>
                    About Us<br/>
                    Careers<br/>
                    Kia Finance<br/>
                    Investors<br/>
                    Contact Us<br/>
                    Recalls<br/>
                    Vulnerability<br/>
                    Communication Preferences</div>
                </div>
    
                <div  className="footertext">
                <div  className="footertextdetai">What’s New<br/>
                    Kia EasyBuy<br/>
                    Concept Vehicles<br/>
                    Social Impact<br/>
                    Kia Media<br/>
                    The Kia Instrument</div>
                </div>
                <div className="footertext" style={{border:"none"}} >
                   <div className="footertextdetai">
                    Kia Media<br/>
                    The Kia Instrument<br/>
                    Legal<br/>
                    Privacy<br/>
                    Terms of Service<br/>
                    MPG Disclaimer<br/>
                    Accessibility<br/>
                    Cookies Management<br/>
                    Your Privacy Choices<br/>
                    Unsolicited Idea Submission Policy</div>
                </div>
            </div>
            <div id="biggap">
            </div>
            </div>

}
