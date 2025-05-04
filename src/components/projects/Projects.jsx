import React, { useState } from 'react'
import "./projects.css"

const Projects = () => {
    const [toggleState,setToggleState]=useState(0);
    const toggleTab=(index)=>{setToggleState(index);}

  return (
    <section className="projects section" id="projects">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">My Canvas</span>
          <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <i className="uil uil-web-grid projects__icon"></i>
                    <h3 className="projects__title">Jenkins Deploy</h3>
                </div>
                <span className="projects__button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right projects__button"></i></span>
                <div className={toggleState===1?"projects__modal active-modal":"projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Jenkins Deploy</h3>
                        <p className="projects__modal-description">With more than 2 years of experience providing quality work through collaboration and honesty.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I develope user unterface and deployed in bcakend through AWS </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I can create application using cloud technologies(AWS) </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I position your company brand </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I have worked in cross-functional international teams as well</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-arrow projects__icon"></i>
                    <h3 className="projects__title">My Portfolio</h3>
                </div>
                <span className="projects__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right projects__button"></i></span>
                <div className={toggleState===2?"projects__modal active-modal":"projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">My Portfolio</h3>
                        <p className="projects__modal-description">With more than 2 years of experience providing quality work through collaboration and honesty.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I develope user unterface and deployed in bcakend through AWS </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I can create application using cloud technologies(AWS) </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I position your company brand </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I have worked in cross-functional international teams as well</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-edit projects__icon"></i>
                    <h3 className="projects__title">Project1</h3>
                </div>
                <span className="projects__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right projects__button"></i></span>
                <div className={toggleState===3?"projects__modal active-modal":"projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Project1</h3>
                        <p className="projects__modal-description">With more than 2 years of experience providing quality work through collaboration and honesty.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I develope user unterface and deployed in bcakend through AWS </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I can create application using cloud technologies(AWS) </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I position your company brand </p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__modal-info">I have worked in cross-functional international teams as well</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
    </section>
  )
}

export default Projects
