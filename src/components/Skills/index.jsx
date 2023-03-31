import React from "react";
import "./style.css";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Languages/Technologies/Skills</h1>
      <br />
      <div className="content">
        <div>
          <strong>Programming Languages</strong>
          <li>C</li>
          <li>Python</li>
          <li>C# .NET</li>
          <li>Go lang</li>
          <li>R lang</li>
          <li>C++</li>
          <li>Java</li>
        </div>
        <div>
          <strong>Web Technologies</strong>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Angular</li>
          <li>React Js</li>
          <li>Node JS</li>
          <li>Express Js</li>
          <li>Mongo DB</li>
        </div>
        <div>
          <strong>CRM Skills</strong>
          <li>Microsoft Dynamics 365</li>
          <li>Power Apps</li>
          <li>Power Automate</li>
          <li>Web Resources/Ribbon/Workflows/Cloud Flows/Plugins</li>
          <li>SQL Server,SSIS (using KingswaySoft)</li>
          <li>Cloud & Data Migration</li>
        </div>
      </div>
    </div>
  );
}
