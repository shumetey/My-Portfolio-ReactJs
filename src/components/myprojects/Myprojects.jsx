import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/TSL.png'
import IMG2 from '../../assets/CMS.jpg'
import IMG3 from '../../assets/img-1.jpg'
import IMG4 from '../../assets/img-1.jpg'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Tigray Service Locator</h3>
            <small className='text-light'>Laravel | Php | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/Tigray-Service-Locator" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Crime Management System</h3>
            <small className='text-light'>VueJS | TailwindCSS | NodeJs | Express | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/Crime-Management-System-Sequelize" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/My-Portfolio-ReactJs" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/shumetey/My-Portfolio-ReactJs/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Resume</h3>
            <small className='text-light'>React | TailwindCSS | JS | NodeJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/My-Portfolio-ReactJs" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/shumetey/My-Portfolio-ReactJs/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects