import React from "react"

const Education = ({ HEADING, EDUCATION_LIST }) => {
  return (
    <section className="curriculum-vitae-section education-section mb-5">
      <h2 className="curriculum-vitae-section-title text-uppercase font-weight-bold pb-3 mb-3">
        {HEADING}
      </h2>
      <div className="curriculum-vitae-section-content">
        <ul className="list-unstyled">
          {EDUCATION_LIST &&
            EDUCATION_LIST.length &&
            EDUCATION_LIST.map(item => (
              <li className="mb-2" key={item.DURATION}>
                <div className="curriculum-vitae-degree font-weight-bold">
                  {item.DEGREE}
                </div>
                <div className="curriculum-vitae-degree-org">
                  {item.UNIVERSITY_NAME}
                </div>
                <div className="curriculum-vitae-degree-time">
                  {item.DURATION}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Education
