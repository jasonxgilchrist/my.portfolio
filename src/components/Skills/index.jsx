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
          <strong>Web Technologies</strong>
          <li>HTML, CSS, JS</li>
          <li>React Js</li>
          <li>Node JS</li>
        </div>
        <div>
          <strong>CRM Skills</strong>
          <li>Microsoft Dynamics 365,Power Apps, Power Automate</li>
          <li>Web Resources/Ribbon/Workflows/Cloud Flows/Plugins</li>
          <li>SQL Server,SSIS (using KingswaySoft)</li>
          <li>Cloud & Data Migration</li>
        </div>
      </div>
    </div>
  );
}
