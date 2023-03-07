import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="entire-profile-section">
      <div className="live-video-hero-image" tabIndex="-1">
        <div className="profile-background-image__image-container">
          <img
            className="profile-background-image__image"
            loading="lazy"
            src=""
          />
        </div>
      </div>
      <ProfilePhoto />
      <ProfileFooter />
    </section>
  );
}

function ProfilePhoto() {
  return (
    <div className="ph5">
      <div className="display-flex">
        <div className="profile-photo-container text-align-left">
          <div className="photo-wrapper">
            <button className="profile-photo-button" type="button">
              <img
                className="profile-image"
                width="200"
                height="200"
                title="Jacob Linson, #OPEN TO WORK"
                src=""
              />
            </button>
            <div className="presence-indicator">
              <span className="visually-hidden">Status is online</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-column">
          <div className="badges">
            <span>badge 1</span>
            <span>badge 2</span>
          </div>
        </div>
      </div>

      <ProfileInformation />
      <ul className="connections"></ul>
      <a className="mutual-connections"></a>
      <div className="profile-buttons">
        <div className="message-button">
          <a className="artdeco-button" role="button">
            <li-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
              </svg>
            </li-icon>
            Message
          </a>
        </div>
        <div className="dropdown-button">
          <button className="button--circle">
            <li-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
              </svg>
            </li-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
function ProfileInformation() {
  return (
    <div className="mt2 relative">
      <div className="profile-headline"></div>
      <ul className="company-details"></ul>
      <div className="location-details"></div>
    </div>
  );
}
function ProfileFooter() {
  return (
    <div className="pv-open-to-carousel">
      <section>ProfileFooter</section>
    </div>
  );
}

export default Profile;
