import React from 'react'

import './index.css'

export default () => {

    return (
        <div className='about'>
            <div>
                <div className='info'>
                    <h4>Skills</h4>
                    <ul>
                        <li>React.js, JavaScript, Typescript</li>
                        <li>React Native</li>
                        <li>Node.js</li>
                        <li>Redux, Redux Saga</li>
                        <li>MongoDB, MySQL</li>
                        <li>Agile</li>
                        <li>Python, C++, C# (basic-moderate)</li>
                    </ul>
                </div>
                <div className='info'>
                    <h4>Extra</h4>
                    <p><b>Hacker Games 2016</b> first place in a hackathon in Klaipeda, Lithuania.</p>
                    <p><b>Olympiads</b> participating and performing well in programming Olympiads in Lithuania during my time there (2013-2017)</p>
                </div>
                <div className='info'>
                    <h4>GitHub</h4>
                    <p>403 contributions in the last year</p>
                    <p>235 contributions in 2019</p>
                    <a
                        href='https://github.com/justasam'
                        alt='github'
                        data-hoverable='true'
                    >https://github.com/justasam</a>
                </div>
            </div>
            <div>
                <div className='info'>
                    <h4>Experience</h4>
                    <p><b>Freelance, Remote</b> - <i>Full-stack developer</i></p>
                    <p><i>SEP 2016 - PRESENT</i></p>
                    <p>Working with various clients on projects such as:
                    mobile apps (React Native), Websites (React.js), Scripts (Python), Full-stack chat bots (Node.js, React.js, MongoDB)</p>
                </div>
                <div className='info'>
                    <h4>About me</h4>
                    <p>
                        I am a Lithuanian web-developer with a deep understanding of modern JavaScript.
                        <br />When programming I focus on writing reusable and maintainable code, hence my favourite framework is React.
                        <br />I have been working as a freelance full-stack developer for quite some time now, and am looking to expand my horizons by working a more permanent role.
                    </p>
                </div>
                <div className='info'>
                    <h4>Get in touch & General info</h4>
                    <p>You can reach me through my email: <i>samuolis.just@gmail.com</i></p>
                    <p>I am currently residing in <i>Dundee, Scotland.</i></p>
                    <p>Due to covid-19 I'd prefer to work remotely (with regular visits) until the situation changes.</p>
                </div>
            </div>
        </div>
    )
}