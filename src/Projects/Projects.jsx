import Navbar from "../Navbar/Navbar"
import "./Projects.css"
import Capturebloog from "./Capturebloog.PNG"
import Capturebloginfo from "./Captureblogfinfo.PNG"
import todo from "./Capturetodo.PNG"
import todoinfo from "./Capturetodoinfo.PNG"
import studteach from "./Capturestud-teach.PNG"
import studteachinfo from "./Capturestud-teachinfo.PNG"
import { useState } from "react"
import Button from '@mui/material/Button';
// DIalog box 
 import Dialog from '@mui/material/Dialog';
 import DialogContent from '@mui/material/DialogContent';
 import DialogContentText from '@mui/material/DialogContentText';
 import DialogTitle from '@mui/material/DialogTitle';

function Projects() {

   // dialog-box for full stack blog app
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };
   // dialog-box for full stack blog app

   // dialog-box for todo react app
   const [open1, setOpen1] = useState(false);

   const handleClickOpen1 = () => {
     setOpen1(true);
   };

   const handleClose1 = () => {
     setOpen1(false);
   };
   // dialog-box for todo react app

   // dialog-box for todo react app
   const [open2, setOpen2] = useState(false);

   const handleClickOpen2 = () => {
     setOpen2(true);
   };

   const handleClose2 = () => {
     setOpen2(false);
   };
   // dialog-box for todo react app



  return (
    <div>
      <Navbar />
      <div style={{margin: "10px", padding: "10px"}}>
        <h2 className="heading">Portfolio</h2>
        <h3 className="heading">Explore my work <span>____</span></h3>
        <div className="projectscontainer">
          <div className="indiproj">
            <h4 style={{textAlign: "Center", color: "white", marginBottom: "5px"}}>A full stack blog app using MERN stack</h4>
            <div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                <a title="click to go to frontend code" style={{fontSize: "13px",textDecoration: "none", color: "blue"}} target="_blank" rel="noreferrer" href="https://github.com/santosh-ksh7/capstone-project-frontend-MTC">Go to Frontend Source Code</a>
                <a title="click to go to backend code" style={{fontSize: "13px", textDecoration: "none", color: "blue"}} target="_blank" rel="noreferrer" href="https://github.com/santosh-ksh7/capstone-project-backend-MTC">Go to Backend Source Code</a>
            </div>
            <img src={Capturebloog} alt="blog-app" className="projprev" />
            {/* Project details display */}
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{textAlign: "center"}}>{"Project summary & Technical highlights"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <p style={{textAlign: "center"}}><img src={Capturebloginfo} alt="Project info" style={{width: "450px", height: "350px"}} /></p> 
                    <Button variant="contained" style={{marginLeft: "45%"}} onClick={()=>handleClose()}>Close</Button>
                </DialogContentText>
                </DialogContent>
            </Dialog>
            <h4 style={{fontSize: "13px", textAlign: "Center", color: "white", margin: "0px"}}>Common User Credentials</h4>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                  <p style={{fontSize: "13px", textAlign: "Center", color: "white", margin: "0px"}}><strong>Email id:</strong> zzz@gmail.com</p>
                  <p style={{fontSize: "13px", textAlign: "Center", color: "white", margin: "0px"}}><strong>Password:</strong> 12345678</p>
            </div>
            {/* Button to open dialog */}
            <div style={{display: "flex", justifyContent: "space-around", marginTop: "5px"}}>
              {/* update the use navigate link to open app in a new tab */}
              <a style={{textDecoration: "none"}} target="_blank" rel="noreferrer" href="https://coruscating-parfait-9f3f00.netlify.app"><Button variant="outlined">Go to App</Button></a>
              <Button variant="outlined" onClick={()=>handleClickOpen()}>Project details</Button>
              {/* update the link */}
            </div>
          </div>
          <div className="indiproj">
            <h4 style={{textAlign: "Center", color: "white", marginBottom: "5px"}}>A Todo app based on react</h4>
            <p style={{textAlign: "center", margin: "0px", marginBottom: "3px"}}><a title="click to go to source code" style={{textDecoration: "none", color: "blue", fontSize: "13px"}} target="_blank" rel="noreferrer" href="https://github.com/santosh-ksh7/todo_app_with_reminder">Go to Source Code</a></p>
            <img src={todo} alt="blog-app" className="projprev" />
            {/* Project details display */}
            <Dialog
                open={open1}
                keepMounted
                onClose={handleClose1}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{textAlign: "center"}}>{"Project summary"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <p style={{textAlign: "center"}}><img src={todoinfo} alt="Project info" style={{width: "300px", height: "100px", objectFit: "contain"}} /></p> 
                    <Button variant="contained" style={{marginLeft: "40%"}} onClick={()=>handleClose1()}>Close</Button>
                </DialogContentText>
                </DialogContent>
            </Dialog>
            {/* Button to open dialog */}
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <Button variant="outlined" onClick={()=>handleClickOpen1()}>Show details</Button>
              {/* update the use navigate link to open app in a new tab */}
              <a style={{textDecoration: "none"}} target="_blank" rel="noreferrer" href="https://cerulean-arithmetic-022bf5.netlify.app"><Button variant="outlined">Open App</Button></a>
            </div>
          </div>
          <div className="indiproj">
            <h4 style={{textAlign: "Center", color: "white", marginBottom: "5px"}}>A Student-teacher mgt. app based on react</h4>
            <p style={{textAlign: "center", margin: "0px", marginBottom: "4px"}}><a style={{fontSize: "13px", textDecoration: "none", color: "blue"}} target="_blank" rel="noreferrer" href="https://github.com/santosh-ksh7/React-Day-34-task">Go to Source Code</a></p>
            <img src={studteach} alt="blog-app" className="projprev" />
            {/* Project details display */}
            <Dialog
                open={open2}
                keepMounted
                onClose={handleClose2}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{textAlign: "center"}}>{"Project summary"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                <p style={{textAlign: "center"}}><img src={studteachinfo} alt="Project info" style={{width: "300px", height: "100px", objectFit: "contain"}} /></p>  
                    <Button variant="contained" style={{marginLeft: "40%"}} onClick={()=>handleClose2()}>Close</Button>
                </DialogContentText>
                </DialogContent>
            </Dialog>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              {/* Button to open dialog */}
              <Button variant="outlined" onClick={()=>handleClickOpen2()}>Show details</Button>
              {/* update the use navigate link to open app in a new tab */}
              <a style={{textDecoration: "none"}} target="_blank" rel="noreferrer" href="https://bejewelled-raindrop-6aa542.netlify.app"><Button variant="outlined">Open App</Button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects