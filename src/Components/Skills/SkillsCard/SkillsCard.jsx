import React from "react";
import './SkillsCard.css'

const SkillsCard  =  ({title, iconUrl, isActive,onClick})=>{
    return(
        <div
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick ()}
        >

            <div className="skill-icon">
            <span className={`icon ${iconUrl}`} style={{ fontSize: '2rem' }}></span> {/* Lägg till ikonen som className */}
            </div>

            <p>{title}</p>
        </div>
    );  
};

export default SkillsCard;