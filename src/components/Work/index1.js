import React from 'react'
import simpleJack from '../../assets/images/simple-jack.png'
import cuitaPhoto from '../../assets/images/cuitacruela.jpg'
import labPhoto from '../../assets/images/lab-manager-app.png'
import confeastador from '../../assets/images/confeastador.png'
import runbuddy from '../../assets/images/screenshot.jpg'


function Work () {
    return (
        <section id="work" class="content">
        <div class="section-wrapper">
          <div class="section-title">
            <h2>Work</h2>
          </div>
          <div class="grid-wrapper">
            <div class="grid-container">
            <a href="https://jamesluu96.github.io/simple-jack/" class="grid-item main">
                <img src={simpleJack} alt="Screenshot of the simple-jack application"/>
            </a>
            <a href="https://jamesluu96.github.io/simple-jack/" class="grid-item main">
              <h3>Simple Jack!</h3>
              <p>A comic-book themed blackjack game! Try it out</p>
            </a>
            <a href="https://sites.google.com/site/claritazawadski/" class="grid-item other two">
              <img src={cuitaPhoto} alt="Portrait of Clara Zawadski, age 70" />
            </a>
            <a href="https://sites.google.com/site/claritazawadski/" class="grid-item other two">
              <h3>Cuita Cruela</h3>
              <p>Various writings and biography</p>
            </a>
            <a href="https://hidden-sea-70156.herokuapp.com" class="grid-item other three">
              <img src={labPhoto} alt="Screenshot of app with test tubes"/>
            </a>
            <a href="https://hidden-sea-70156.herokuapp.com" class="grid-item other three">
              <h3>Lab Manager</h3>
              <p>Full-stack Lab Manager Application</p>
            </a>
            <a href="https://confeastador.herokuapp.com/" class="grid-item other four">
              <img src={confeastador} alt="karyotype analysis, annotated"/>
            </a>
            <a href="https://confeastador.herokuapp.com/" class="grid-item other four">
              <h3>Confeastador!</h3>
              <p>A feast for every occasion</p>
            </a>
            <a href="https://mambru82.github.io/run-buddy/" class="grid-item other five">
              <img src={runbuddy} alt="screenshot of run-buddy web-site"/>
            </a>
            <a href="https://mambru82.github.io/run-buddy/" class="grid-item other five">
              <h3>Run Buddy</h3>
              <p>Practice web-site for the course</p>
            </a>
            </div>
          </div>
        </div>
      </section> 
    )
}

export default Work