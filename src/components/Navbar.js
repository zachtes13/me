import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlineContactPage } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaTools } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
        <a href="/" className="icon"><FiMenu size={'50px'} /></a>
        <a href="/xp" className="icon"><MdOutlineContactPage size={'50px'} /></a>
        <a href="/projects" className="icon"><FaTools size={'50px'} /></a>
        <a href="/mail" className="icon"><FiMail size={'50px'} /></a>
        <a href="https://www.linkedin.com/in/zachary-tesolin/" className="icon"><FaLinkedin size={'50px'} /></a>
        <a href="https://github.com/zachtes13" className="icon"><FaGithub size={'50px'} /></a>
    </nav>
  )
}

export default Navbar