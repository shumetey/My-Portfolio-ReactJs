import React from 'react'
import './about.css'
import myImage from '../../assets/img-1.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bsc. Information Technology(IT) <br /><i>Mekelle University - Mekelle Institute Of Technology (MIT).</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Commulative GPA</h5>
                  <small>3.95</small>
                  <h5>Exit Exam Result</h5>
                  <small>79%</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                    <li>Industry Focus</li>
                    <li>Technical Skills</li>
                    <li>Problem Solving</li>
                    <li>User Centric</li>
                    <li>Web Based Systems</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Information Technology Postgradute</b> at Mekelle University (MU-MIT). 
                    I'm an enthusiastic and driven Information Technology seeking a challenging opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in Information Technology and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About