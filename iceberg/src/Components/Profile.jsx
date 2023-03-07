import React from "react";
import "./Profile.css";
import { useState, useEffect } from "react";

function Profile() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
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
            <span className="individual-badge premium-color">
              <li-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 21"
                  data-supported-dps="21x21"
                  fill="currentColor"
                  class="mercado-match"
                  width="21"
                  height="21"
                  focusable="false"
                >
                  <g>
                    <path
                      class="background-mercado"
                      d="M19.5 0h-18A1.5 1.5 0 000 1.5v18A1.5 1.5 0 001.5 21h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0019.5 0zM6 18H3V8h3zM4.5 6.25a1.75 1.75 0 110-3.5 1.75 1.75 0 110 3.5zM18 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0011 13v5H8V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4z"
                    ></path>
                  </g>
                </svg>
              </li-icon>
            </span>
            <span className="individual-badge">
              <button className="notify-button">
                <li-icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                </li-icon>
              </button>
            </span>
          </div>
        </div>
      </div>

      <ProfileInformation />
      <ProfileConnections />
      <ProfileMessageButtons />
    </div>
  );
}
function ProfileInformation() {
  return (
    <div className="mt2 relative">
      <div className="profile-headline">
        <div className="user-name-title">
          <h1 className="inline">Jacob Linson</h1>
          <span> 1st</span>
          <div className="user-headline">Software Engineer.....</div>
        </div>
      </div>
      <ul className="company-details">
        <li>
          <button>
            <img src="" />
            <span>Galvanize Inc</span>
          </button>
        </li>
      </ul>
      <div className="location-details">
        <span>Kileen-Temple Area</span>
      </div>
    </div>
  );
}
function ProfileConnections() {
  return (
    <>
      <ul>
        <li>
          <a>
            <span>41 connections</span>
          </a>
        </li>
      </ul>
      <a>
        <div>
          <ul>
            <li>
              <img />
            </li>
            <li>
              <img />
            </li>
          </ul>
        </div>
        <span>
          Moises Martinez, Chase Shertzer, and 20 other mutual connections
        </span>
      </a>
    </>
  );
}
function ProfileMessageButtons() {
  return (
    <div className="profile-buttons">
      <div className="message-button">
        <a className="anchor-button" role="button">
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
  );
}
function ProfileFooter() {
  return (
    <div className="pv-open-to-carousel">
      <section className="margins-24 footer-section">
        <div className="display-flex open-to-work">
          <a className="footer-anchor">
            <h3 className="footer-h3">Open to Work</h3>
            <p className="footer-p">Software Engineer roles</p>
            <p className="footer-p link-text">Show details</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Profile;
