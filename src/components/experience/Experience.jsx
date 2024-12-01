import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>VueJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>NodeJs</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article><article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article><article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Fastify</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article><article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article><article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>NestJs</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>php</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience