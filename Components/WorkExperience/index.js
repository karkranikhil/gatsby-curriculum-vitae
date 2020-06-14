import React from "react"
// import './style.css'

const getAchievements = (item) => {
    return (
        <>
            <h4 className="curriculum-vitae-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
            <p>{item.ACHIEVEMENTS}</p>
            <ul>
                {item.ACHIEVEMENTS_POINTS && item.ACHIEVEMENTS_POINTS.length && item.ACHIEVEMENTS_POINTS.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}

const getTechnologyList = (item) => {
    return (
        <>
            <h4 className="curriculum-vitae-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
            <ul className="list-inline">
                {item.TECHNOLOGIES_USED.map(item => <li className="list-inline-item" key={item}><span className="badge badge-primary badge-pill">{item}</span></li>)}
            </ul>
        </>
    )
}
const getDescriptionPoints = (DESCRIPTION_POINTS) => {
    return (
        <ul>
            {DESCRIPTION_POINTS.map(item => <li key={item}>{item}
            </li>)}
        </ul>
    )
}
const getExperiences = (EXPERIENCES) => {
    return (EXPERIENCES.map(item =>
        <section className="curriculum-vitae-timeline-item position-relative pb-5" key={`${item.DURATION}${item.COMPANY_NAME}`}>
            <div className="curriculum-vitae-timeline-item-header mb-2">
                <div className="d-flex flex-column flex-md-row">
                    <h3 className="curriculum-vitae-position-title font-weight-bold mb-1">{item.ROLE}</h3>
                    <div className="curriculum-vitae-company-name ml-auto">{item.COMPANY_NAME}</div>
                </div>
                <div className="curriculum-vitae-position-time">{item.DURATION}</div>
            </div>
            <div className="curriculum-vitae-timeline-item-desc">
                <p>{item.DESCRIPTION}</p>
                {item.DESCRIPTION_POINTS && item.DESCRIPTION_POINTS.length && getDescriptionPoints(item.DESCRIPTION_POINTS)}
                {item.ACHIEVEMENTS && getAchievements(item)}
                {item.TECHNOLOGIES_USED && item.TECHNOLOGIES_USED.length && getTechnologyList(item)}
            </div>
        </section>)
    )
}

const WorkExperience = ({ HEADING, EXPERIENCES }) => {
    return (
        <section className="curriculum-vitae-section experience-section mb-5">
            <h2 className="curriculum-vitae-section-title text-uppercase font-weight-bold pb-3 mb-3">{HEADING}</h2>
            <div className="curriculum-vitae-section-content">
                <div className="curriculum-vitae-timeline position-relative">
                    {getExperiences(EXPERIENCES)}
                </div>
            </div>
        </section>
    )

}

export default WorkExperience

