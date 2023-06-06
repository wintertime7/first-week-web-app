// Main imports
import React, { useState } from 'react'

// Style imports
import '../style/Home.css'

function Home() {

  const [textColor, setTextColor] = useState('#fffcf2')
  const [fontStyle, setFontStyle] = useState('normal')
  const [isWhite, setIsWhite] = useState(true)

  const handleColorChange = (e) => {
    setIsWhite(!isWhite)
    setTextColor(isWhite ? '#e63946' : '#fffcf2')
    setFontStyle(isWhite ? 'italic' : 'normal')
  }

  return (
    <div>
      <div className="home-body-area">
        <div className="home-left">
          <p className='home-left-text'>Hi! My name is</p>
          <h2>Rainers <span style={{ color:textColor, fontStyle:fontStyle}} className='bodySurnameSpan'
            onClick={handleColorChange}>Smolenskis</span></h2>
          <p id='psParagraph'>Click to change color ^</p>
        </div>
      </div>
    </div>
  )
}

export default Home