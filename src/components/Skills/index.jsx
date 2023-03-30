import React from 'react'
import './style.css'

export default function Skills() {
  return (
    <div className='skills'>
      <h1>Languages/Technologies/Skills</h1>
      <br />
      <div className='content'>
        <div>
          <strong>Programming Languages</strong>
          <li>C</li>
          <li>Python</li>
          <li>C# .NET</li>
          <li>C++</li>
          <li>Go lang</li>
          <li>R lang</li>
          <li>Java</li>
        </div>
        <div>
          <strong>Web Technologies</strong>
          <li>HTML</li>
          <li>HTML5</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Angular</li>
          <li>Node JS</li>
        </div>
        <div>
          <strong>CRM Skills</strong>
          <li>Microsoft Dynamics 365</li>
          <li>Power Apps</li>
          <li>Power Automate</li>
          <li>Web Resources/Ribbon/Workflows/Cloud Flows/Plugins</li>
          <li>SSIS (using KingswaySoft)</li>
          <li>SQL Server</li>
          <li>Cloud & Data Migration</li>
        </div>
      </div>
    </div>
  )
}
