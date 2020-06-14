import React from "react"

const Awards = ({ HEADING, AWARDS_LIST }) => {
    console.log(AWARDS_LIST)
    return (
        <section className="curriculum-vitae-section reference-section mb-5">
            <h2 className="curriculum-vitae-section-title text-uppercase font-weight-bold pb-3 mb-3">{HEADING}</h2>
            <div className="curriculum-vitae-section-content">
                <ul className="list-unstyled curriculum-vitae-awards-list">
                    {AWARDS_LIST && AWARDS_LIST.length && AWARDS_LIST.map(item => <li className="mb-2 pl-4 position-relative" key={item.NAME}>
                        <i className="curriculum-vitae-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                        <div className="curriculum-vitae-award-name">{item.NAME}</div>
                        <div className="curriculum-vitae-award-desc">{item.DESCRIPTION}</div>
                    </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Awards