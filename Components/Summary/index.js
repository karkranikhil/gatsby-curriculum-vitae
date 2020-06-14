import React from "react"

const getListView = (KEY_POINTS) => KEY_POINTS.map(item =>
    <li key={item}>{item}</li>
)

const Summary = ({ HEADING, DESCRIPTION, KEY_POINTS }) => {
    return (
        <section className="curriculum-vitae-body mb-5">
            <h2 className="curriculum-vitae-section text-uppercase font-weight-bold pb-3 mb-3">{HEADING}</h2>
            <div className="curriculum-vitae-section-content">
                <p>{DESCRIPTION}</p>
                {KEY_POINTS && KEY_POINTS.length ? <ul className="list-unstyled key-points position-relative">{getListView(KEY_POINTS)}</ul>
                    : null}

            </div>
        </section>

    )

}

export default Summary

