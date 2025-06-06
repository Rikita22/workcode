import React,{useState} from 'react'
import "./qualifications.css"

const Qualifications = () => {
     const [toggleState,setToggleState]=useState(1);
        const toggleTab=(index)=>{setToggleState(index);}
  return (
    <section className="qualifications section" id="portfolio">
    <h2 className="section__title">Qualifications</h2>
    <span className="section__subtitle">My Personal Journey</span>
    <div className="qualifications__container container">
        <div className="qualifications__tabs">
            <div className={toggleState===1?"qualifications__button qualifications__active button--flex":"qualifications__button button--flex"}
            onClick={()=>toggleTab(1)}>
                <i className="uil uil-graduation-cap qualifications__icon"></i>Education
            </div>

            <div className={toggleState===2?"qualifications__button qualifications__active button--flex":"qualifications__button button--flex"}
            onClick={()=>toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualifications__icon"></i>{" "}Experience
            </div>
        </div>
        <div className="qualifications__sections">
            <div className={toggleState===1?"qualifications__content qualifications__content-active":"qualifications__content"}>
                <div className="qualifications__data">
                    <div>
                        <h3 className="qualifications__title">Secondary</h3>
                        <span className="qualifications__subtitle">Heritage Academy High School</span>
                        <div className="qualifications__calender">
                            <div>89%</div>
                            <i class="uil uil-calendar-alt"></i> 2016-17
                        </div>
                    </div>
                    <div>
                        <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                </div>

                <div className="qualifications__data">
                    <div></div>
                <div>
                        <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                    <div>
                        <h3 className="qualifications__title">Higher Secondary</h3>
                        <span className="qualifications__subtitle">Heritage Academy High School</span>
                        <div className="qualifications__calender">
                        <div>75%</div>
                            <i className="uil uil-calendar-alt"></i> 2017-19
                        </div>
                    </div>
                    
                </div>

                <div className="qualifications__data">
                    <div>
                        <h3 className="qualifications__title">Bachalors of Technology(IT)</h3>
                        <span className="qualifications__subtitle">MCKV Insttitre of Engineering</span>
                        <div className="qualifications__calender">
                        <div>9.23 CGPA</div>
                            <i className="uil uil-calendar-alt"></i> 2019-23
                        </div>
                    </div>
                    <div>
                        <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                </div>

                {/* <div className="qualifications__data">
                    <div></div>
                <div>
                        <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                    <div>
                        <h3 className="qualifications__title">Bachalors of Technology1</h3>
                        <span className="qualifications__subtitle">MCKV Insttitre of Engineering</span>
                        <div className="qualifications__calender">
                            <i className="uil uil-calendar-alt"></i> 2019-23
                        </div>
                    </div>
                </div> */}
            </div>


            <div className={toggleState===2?"qualifications__content qualifications__content-active":"qualifications__content"}>
                <div className="qualifications__data">
                    <div>
                        <h3 className="qualifications__title">Software Engineer</h3>
                        <span className="qualifications__subtitle">Labvantage Solutions</span>
                        <div className="qualifications__calender">
                            <i class="uil uil-calendar-alt"></i> 2023-Present
                        </div>
                    </div>
                    <div>
                        <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                </div>

                <div className="qualifications__data">
                <div></div>
                <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                    <div>
                        <h3 className="qualifications__title">Learning in Progress</h3>
                        <span className="qualifications__subtitle">School of Life</span>
                        <div className="qualifications__calender">
                            <i className="uil uil-calendar-alt"></i> Infinity
                        </div>
                    </div>
                    
                </div>

                {/* <div className="qualifications__data">
                    <div>
                        <h3 className="qualifications__title">Software Engineer3</h3>
                        <span className="qualifications__subtitle">Labvantage Solutions</span>
                        <div className="qualifications__calender">
                            <i className="uil uil-calendar-alt"></i> 2023-25
                        </div>
                    </div>
                    <div>
                    <span className="qualifications__rounder"></span>
                    <span className="qualifications__line"></span>
                    </div>
                </div> */}

        
            </div>

            
        </div>
    </div>

    </section>
  )
}

export default Qualifications
