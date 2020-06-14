import React from "react"
const Languages = ({ HEADING, LANGUAGE_LIST }) => {
  return (
    <section className="curriculum-vitae-section language-section mb-5">
      <h2 className="curriculum-vitae-section-title text-uppercase font-weight-bold pb-3 mb-3">
        {HEADING}
      </h2>
      <div className="curriculum-vitae-section-content">
        <ul className="list-unstyled curriculum-vitae-lang-list">
          {LANGUAGE_LIST.map(item => (
            <li className="mb-2" key={item.NAME}>
              <span className="curriculum-vitae-lang-name font-weight-bold">
                {item.NAME}
              </span>{" "}
              <small className="text-muted font-weight-normal">
                ({item.LEVEL})
              </small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Languages
