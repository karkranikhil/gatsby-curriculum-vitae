import React from "react"
import PROFILE from '../../images/profile.png';

const Header = ({ profile_name, profile_designation, profile_email, profile_contact, profile_links }) => {
    return (
        <header className="curriculum-vitae-header pt-4 pt-md-0">
            <div className="d-flex flex-column flex-md-row p-2">
                <img className="mr-3 img-fluid profile-picture mx-auto" src={PROFILE} alt={`User ${profile_name}`} />
                <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                    {/* primary-information */}
                    <div className="primary-information">
                        {/* Name and Designation */}
                        <h1 className="username mt-0 mb-1 text-white text-uppercase">{profile_name}</h1>
                        <div className="designation mb-3">{profile_designation}</div>

                        {/* Contact and Email Details */}
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href={`mailto:${profile_email}`}>
                                    <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3">
                                    </i>{profile_email}</a>
                            </li>
                            <li><a href={`tel:${profile_contact}`}>
                                <i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6">
                                </i>0123 456 78900</a></li>
                        </ul>
                    </div>
                    {/* secondary-information */}
                    <div className="secondary-information ml-md-auto mt-2">
                        {/* Social media Links */}
                        <ul className="curriculum-vitae-social list-unstyled">
                            {profile_links.map(item => <li className="mb-3" key={item.type}>
                                <a href={item.link}>
                                    <span className="fa-container text-center mr-2">
                                        <i className={item.Icon}></i>
                                    </span>
                                    {item.text}</a>
                            </li>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )

}

export default Header