import React from 'react'

function SkillSection() {

  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recepies",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked"
  ]

  return (
    <div className='section improve-skills'>
        <div className='col img'>
            <img src='/img/gallery/11.jpg' alt='' />
        </div>
        <div className='col typography'>
            <h2 className='title'>Improve Your Culinary Skills</h2>
            { list.map((item, index) => (
              <p className='skill-item' key={index}>{ item }</p>
            ))}
            <button className='btn'>singup now</button>
        </div>
    </div>
  )
}

export default SkillSection;