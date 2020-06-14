import React from "react"
const Interests = ({ HEADING, INTERESTS_LIST }) => {
  return (
    <section className="curriculum-vitae-section interests-section mb-5">
      <h2 className="curriculum-vitae-section-title text-uppercase font-weight-bold pb-3 mb-3">
        {HEADING}
      </h2>
      <div className="curriculum-vitae-section-content">
        <ul className="list-unstyled">
          {INTERESTS_LIST.map(item => (
            <li className="mb-1" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Interests
