import React, { useState } from "react"
import './Skills.css'
import SkillsCard from "./SkillsCard/SkillsCard"; // Se till att du har SkillsCard-komponenten
import { SKIILS } from '../../utils/data'
import SkillsInfoCard from "./SkillsInfoCrad/SkillsInfoCard";

const Skills = () => {

    const [selectedSkills, setSelectedSkills] = useState(SKIILS[0]);

    const handleSlectedSkill = (data) =>{
        setSelectedSkills(data);
    };

    return (
        <section id="skills" className="skills-container">
            <h5>Teknik</h5>

            <div className="skills-content">
                <div className="skills">
                    {SKIILS.map((item) => {
                        return ( // Här ska du returnera JSX
                            <SkillsCard
                                key={item.title}
                                iconUrl={item.icon} // Skicka ikonen som en prop
                                title={item.title}
                                isActive={selectedSkills.title === item.title}
                                onClick={()=>{
                                    handleSlectedSkill(item);
                                }}
                            />
                        );
                    })}
                </div>

                <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkills.title}
                skills={selectedSkills.skills}
                />
                </div>

            </div>
        </section>
    );
}

export default Skills;
