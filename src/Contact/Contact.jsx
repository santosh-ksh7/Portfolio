import "./Contact.css"
import Navbar from "../Navbar/Navbar"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';

import React from 'react'

function Contact() {
  return (
    <div>
        <Navbar />
        <div style={{margin:"10px"}}>
            <h2 className="contactheading">Reach out to me <span style={{color:"green"}}>_____</span></h2>
            <div className="contatcards">
                {/* location info card */}
                <div className="ContactSingleCard">
                    <div className="icon">
                        <LocationOnOutlinedIcon style={{color:"grey", fontSize: "40px"}} />
                    </div>
                    <div className="infocont">
                        <div>
                            <h3 className="contheading">Location</h3>
                        </div>
                        <div>
                            <p className="maininfo">Jharkhand, India</p>
                        </div>
                    </div>
                </div>
                {/* Email info card */}
                <div className="ContactSingleCard">
                    <div className="icon">
                        <ForwardToInboxOutlinedIcon style={{color:"grey", fontSize: "40px"}} />
                    </div>
                    <div className="infocont">
                        <div>
                            <h3 className="contheading">E-mail</h3>
                        </div>
                        <div>
                            <p className="maininfo">santoshksh7@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* Contact number card */}
                <div className="ContactSingleCard">
                    <div className="icon">
                        <PhoneForwardedOutlinedIcon style={{color:"grey", fontSize: "40px"}} />
                    </div>
                    <div className="infocont">
                        <div>
                            <h3 className="contheading">Call me</h3>
                        </div>
                        <div>
                            <p className="maininfo">+91 6203871212</p>
                            <p className="maininfo">+91 9040694737</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialhandles">
                <a className="socialimg" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santosh-kumar-singh-50b343221/"><img className="linkdimg" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" alt="LinkedIn" /></a>
                <a className="socialimg" target="_blank" rel="noreferrer" href="https://github.com/santosh-ksh7"><img className="linkdimg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" /></a>
            </div>
        </div>
    </div>
  )
}

export default Contact





