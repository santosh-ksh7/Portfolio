import "./Navbar.css"
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
// DIalog box 
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Navbar() {

  // dialog-box for full stack blog app
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // dialog-box for full stack blog app
  return (
        <div className="navbar">
            <h1 style={{margin: "0px", color: "white"}}>Santosh</h1>
            <div className="navbarlinks">
                <Link className="remdec" to="/">About</Link>
                <a target="_blank" rel="noreferrer" className="remdec" href="https://drive.google.com/file/d/10J1RtfcxeboInKvadN3tVioaf90wgnPj/view?usp=sharing">Resume</a>
                <Link className="remdec" to="/projects">Projects</Link>
                <Link className="remdec" to="/contact">Contact</Link>
            </div>
            <div className="collapsed">
              <MenuIcon style={{color:"white"}} onClick={() => handleClickOpen()} />
              <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{textAlign: "center"}}>{"Quick Links"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <div style={{display: "flex", flexDirection: "column", color: "black", textAlign: "center"}}>
                    <Link style={{textDecoration: "none"}} to="/">About</Link>
                    <a style={{textDecoration: "none"}} target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/10J1RtfcxeboInKvadN3tVioaf90wgnPj/view?usp=sharing">Resume</a>
                    <Link style={{textDecoration: "none"}} to="/projects">Projects</Link>
                    <Link style={{textDecoration: "none"}} to="/contact">Contact</Link>
                  </div>
                </DialogContentText>
                </DialogContent>
            </Dialog>
            </div>
        </div>
  )
}

export default Navbar