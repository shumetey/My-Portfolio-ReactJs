import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Shumuye</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/shumuye-aregay-365378199/"><BsLinkedin/></a>
          <a href="https://github.com/shumetey"><BsGithub/></a>
          <a href="https://medium.com/@shumetey"><BsMedium/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Shumuye Aregay. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer