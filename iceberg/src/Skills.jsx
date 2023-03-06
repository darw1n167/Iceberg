import { useEffect, useState } from "react";
import "./Skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [companies, setCompanies] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getCompany = async () => {
    const response = await fetch("http://localhost:8000/company");
    const data = await response.json();
    const companyObj = {};
    for (const company of data) {
      companyObj[company.id] = {
        name: company.name,
        logo_img: company.logo_img,
      };
    }
    setCompanies(companyObj);
    setIsLoading(false);
  };

  const getSkills = async () => {
    const response = await fetch("http://localhost:8000/skills");
    const data = await response.json();
    setSkills(data);
  };

  useEffect(() => {
    getSkills();
    getCompany();
  }, []);

  return (
    <section className="entire-component margin-top-8">
      <div id="skills" className=" padding-top-right-left-12">
        <div className="padding-top-right-left-12">
          <h2 className="component-h2-header">
            <span>Skills</span>
          </h2>
        </div>
      </div>
      {/* outer container of the skills list */}
      <div>
        {/* inner container of the skills list */}
        <ul>
          {skills.map((skill) => {
            return (
              //Start of each skill list
              <SkillItem
                key={skill.id}
                id={skill.id}
                skill={skill}
                companies={companies}
                isLoading={isLoading}
              />
            );
          })}
        </ul>
        <div>
          <a className="footer display-flex align-items-center justify-center">
            <div>
              <span className="footer-text">Show all 23 skills</span>
            </div>
            <div className="pvs-navigation__icon">
              <li-icon aria-hidden="true" type="arrow-right" size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="mercado-match"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                </svg>
              </li-icon>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ id, skill, companies, isLoading }) {
  const [isEndorsed, setIsEndorsed] = useState(true);
  const toggleEndorsement = () => {
    setIsEndorsed(!isEndorsed);
  };

  return (
    <li key={id} className="skill-item-container">
      <div className="padding-top-bottom-12-left-right-24">
        {/*  skill title */}
        <div>
          <a>
            <span className="inline-show-more-text skill-title">
              {skill.name}
            </span>
          </a>
        </div>
        {/* Each skills company and endorsements */}
        <ul>
          <li>
            <div className="display-flex margin-top-bottom-4">
              <div className="right-margin-8">
                <img width="24" height="24" loading="lazy" src="" />
              </div>
              <div className="display-flex align-items-center">
                <div className="inline-show-more-text">
                  {isLoading ? (
                    <span>loading...</span>
                  ) : (
                    <span>{companies[skill.company_id].name}</span>
                  )}
                </div>
              </div>
            </div>
          </li>
          <li>
            <a target="_self" href="">
              <div className="display-flex">
                <div className="right-margin-8">
                  <img width="24" height="24" loading="lazy" src="" />
                </div>
                <div className="inline-show-more-text display-flex align-items-center">
                  <span>
                    Endorsed by Dany Briceno and 1 other mutual connection
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a target="_self" href="">
              <div className="display-flex">
                <div className="right-margin-8">
                  <li-icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>
                  </li-icon>
                </div>
                <div className="inline-show-more-text display-flex align-items-center">
                  {isEndorsed ? (
                    <span>3 endorsements</span>
                  ) : (
                    <span>2 endorsements</span>
                  )}
                </div>
              </div>
            </a>
          </li>
          <li>
            <div className="padding-top-bottom-8"></div>
            <EndorseButton
              isEndorsed={isEndorsed}
              toggleEndorsement={toggleEndorsement}
            />
          </li>
        </ul>
      </div>
    </li>
  );
}

function EndorseButton({ isEndorsed, toggleEndorsement }) {
  return (
    <button type="button" onClick={toggleEndorsement}>
      {isEndorsed ? (
        <div>
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
              <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
            </svg>
          </li-icon>{" "}
          <span>Endorsed</span>
        </div>
      ) : (
        <span>Endorse</span>
      )}
    </button>
  );
}
export default Skills;
