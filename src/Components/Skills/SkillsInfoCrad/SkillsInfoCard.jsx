import React from "react";
import './SkillsInfoCard.css'

const SkillsInfoCard = ( {heading, skills})=>{
return(
    <div className="skills-info-card">
        <h6>{heading}</h6>


        <div className="skills-info-content">
  {skills.map((item, index) => (
    <React.Fragment key={`skill_${index}`}>
      <div className="skill-info">
        <p>{item.skill}</p>  {/* Här kan du använda `item.skill` och `item.percantage` */}
    
        <p className="precentage">{item.percantage}</p>
      </div>

      <div className="skill-progress-bg">
        <div className="skill-progress" style={{width: item.percantage }}></div>
      </div>
    </React.Fragment>
  ))}
</div>

    </div>
);
}

export default SkillsInfoCard