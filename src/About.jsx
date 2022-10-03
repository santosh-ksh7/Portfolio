import "./About.css"
import {Link} from "react-router-dom"

function About() {
  return (
    <div className="maincontabout">
        <div className="myinfo">
            <h3 className="name">Santosh Kumar Singh</h3>
            <h3 className="about">A motivated & dilligent individual, who likes to keep up with new technology & catch up with the dynamics of the web development world.</h3>
            <div className="links">
                <Link className="linkchild" to="/">About</Link>
                <a className="linkchild" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/10J1RtfcxeboInKvadN3tVioaf90wgnPj/view?usp=sharing">Resume</a>
                <Link className="linkchild" to="/projects">Projects</Link>
                <Link className="linkchild" to="/contact">Contact</Link>
            </div>
            <div className="otherlinks">
                <a className="linkchild" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/santosh-kumar-singh-50b343221/"><img className="linkdimg" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" alt="LinkedIn" /></a>
                <a className="linkchild" target="_blank" rel="noreferrer" href="https://github.com/santosh-ksh7"><img className="linkdimg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" /></a>
            </div>
        </div>
        <div className="codingimg">
            <img className="codimg" src="https://brightsec.com/wp-content/uploads/2022/03/blog-Web-Application-Security_-Top-Threats-and-6-Defensive-Methods.png" alt="Img" />
        </div>
    </div>
  )
}

export default About