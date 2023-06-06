// Main imports
import React from 'react'

// Style imports
import '../style/About.css'

function About() {

  const gitLink = 'https://github.com/wintertime7'
  const spotifyLink = 'https://open.spotify.com/'

  return (
    <div className='about-body'>
      <div className="about-left">
        <h2>About Me</h2>
        <p>My name is Rainers Smolenskis. I am a student in IT. My hobbies are photography, skateboarding and astronomy. 
          In my free time I go to the gym and learn coding from home. When I'm not studying, I enjoy playing videogames and watching movies/TV shows. 
          Currently my favourite games are the Soulsborne games, especially Sekiro: Shadows Die Twice and Dark Souls III. 
          I enjoy watching cartoons like Simpsons and Family Guy. 
          My <a href={gitLink} target='_blank'>GitHub</a> and <a href={spotifyLink} target='_blank'>Spotify</a></p>
      </div>
      <div className="about-right">
        <h2>Picture</h2>
      </div>
    </div>
  )
}

export default About