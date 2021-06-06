import React from 'react';
import coverImage from '../../assets/images/clara.jpg'

function About() {
    return (
        <section id="about-me" className="content">
            <div className="section-wrapper">
                <div className="section-title">
                    <h2>About Me</h2>
                    
                </div>
                <div className="section-content">
                    <p>
                        Pathologist by day, coder by night, father/husband/mentor/mentee somewhere in between. 
                    </p>
                </div>
            </div>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt = "karyotype" />
        </section>
    )
}

export default About;