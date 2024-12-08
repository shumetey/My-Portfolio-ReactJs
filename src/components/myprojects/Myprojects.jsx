import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/TSL.png'
import IMG2 from '../../assets/CMS.jpg'
import IMG3 from '../../assets/JobPortal.JPG'
import IMG4 from '../../assets/IQ.JPG'
import IMG5 from '../../assets/Meyla.JPG'
import IMG6 from '../../assets/Pentech.JPG'

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
                <img src={IMG3} alt="" />
            </div>
            <h3>Job Portal System</h3>
            <small className='text-light'>VueJS | TailwindCSS | NodeJs | Express | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/Job-Portal-System-Frontend" target="_blank" rel='noreferrer' className='btn'>Github</a> 
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>IQ Business Group(Website)</h3>
            <small className='text-light'>VueJS | TailwindCSS | NodeJs | Express | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/IQ-Website-Frontend" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://iq-businesses.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Meyla SACCO</h3>
            <small className='text-light'>VueJS | TailwindCSS | NodeJs | Express | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shumetey/Meyla-Website-Frontend" target="_blank" rel='noreferrer' className='btn'>Github</a> 
              <a href="https://meyla.et" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>PenTech Trading Sc.</h3>
            <small className='text-light'>VueJS | TailwindCSS | NodeJs | Express | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/zedkbro/Pentech-Backend" target="_blank" rel='noreferrer' className='btn'>Github</a> 
              <a href="https://pentechtradingsc.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects