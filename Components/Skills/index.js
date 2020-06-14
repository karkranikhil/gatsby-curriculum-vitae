import React from "react"

const getSkillList = (SKILLS_LIST) => {
    return (
        SKILLS_LIST.map(item => <li className="mb-2" key={item.NAME}>
            <div className="curriculum-vitae-skill-name">{item.NAME}</div>
            <div className="progress curriculum-vitae-progress">
                <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{ "width": `${item.LEVEL}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" aria-label="progressbar"></div>
            </div>
        </li>)
    )
}
const getSkill = (SKILLS) => {
    return (
        SKILLS.map(item => <div className="curriculum-vitae-skill-item" key={item.HEADING}>
            <h4 className="curriculum-vitae-skills-cat font-weight-bold">{item.HEADING}</h4>
            <ul className="list-unstyled mb-4">
                {getSkillList(item.SKILLS_LIST)}
            </ul>
        </div>)
    )
}

const getOtherSkillList = (OTHERS_SKILLS) => {
    return (
        OTHERS_SKILLS.map(item => <li className="list-inline-item" key={item}><span className="badge badge-light">{item}</span></li>)
    )
}

const Skills = ({ HEADING, SKILLS, OTHERS_SKILLS }) => {
    return (
        <section className="curriculum-vitae-section skills-section mb-5">
            <h2 className="curriculum-vitae-section-title text-uppercase font-weight-bold pb-3 mb-3">{HEADING}</h2>
            <div className="curriculum-vitae-section-content">
                {getSkill(SKILLS)}
                {OTHERS_SKILLS && OTHERS_SKILLS.length && <div className="curriculum-vitae-skill-item">
                    <h4 className="curriculum-vitae-skills-cat font-weight-bold">Others</h4>
                    <ul className="list-inline">
                        {getOtherSkillList(OTHERS_SKILLS)}
                    </ul>
                </div>}
            </div>
        </section>
    )
}

export default Skills
