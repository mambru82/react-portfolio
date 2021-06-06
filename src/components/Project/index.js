import React, {useState} from 'react'
import simpleJack from '../../assets/images/simple-jack.png'
import labManager from '../../assets/images/lab-manager-app.png'
import confeastador from '../../assets/images/confeastador.png'
import cuita from '../../assets/images/cuitacruela.jpg'
import runbuddy from '../../assets/images/screenshot.jpg'

function ProjectList() {
    const [projects] = useState ([
        {
            name: 'Simple Jack',
            description: 'A comic-book themed blackjack game!',
            website: 'https://jamesluu96.github.io/simple-jack/',
            imagename: simpleJack
        },
        {
            name: 'Lab manager',
            description: 'A full stack web application to manage Laboratory Information',
            website: 'https://hidden-sea-70156.herokuapp.com',
            imagename: labManager
        },
        {
            name: 'Confeastador',
            description: 'MERN stack web application to manage your restaurant reservations',
            website: 'https://confeastador.herokuapp.com/',
            imagename: confeastador
        },
        {
            name: 'Clara Zawadzki',
            description: 'A google pages archive of the writings and photos of one Clara Zawadzki',
            website: 'https://sites.google.com/site/claritazawadski/',
            imagename: cuita
        },
        {
            name: 'Run Buddy',
            description: 'The very first module project I worked on, kept here for sentimental purposes!',
            website: 'https://mambru82.github.io/run-buddy/',
            imagename: runbuddy
        }
    ])
    return (
        <div className="flex-row">
                {projects.map((image) => (
                    <div className="flex-row">
                        <a href={image.website}>
                        <img
                            src={image.imagename}
                            alt={image.name}
                            className="img-thumbnail mx-2"
                            key={image.name}
                            href={image.website} />
                          </a>
                        <p>{image.description}</p>
                      
                    </div>
                ))}
        </div>
    )
}

export default ProjectList;