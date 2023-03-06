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

  // return (
  //   <section
  //     id="ember3235"
  //     className="artdeco-card ember-view relative break-words pb3 mt2 "
  //     tabIndex="-1"
  //   >
  //     <div id="skills" className="pv-profile-card-anchor"></div>

  //     <div className="pvs-header__container">
  //       <div className="pvs-header__top-container--no-stack">
  //         <div className="pvs-header__left-container--stack">
  //           <div className="pvs-header__title-container">
  //             <h2 className="pvs-header__title text-heading-large">
  //               <span aria-hidden="true">Skills</span>
  //               {/* <span className="visually-hidden">Skills</span> */}
  //             </h2>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="pvs-list__outer-container">
  //       <ul className="pvs-list">
  //         <li className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column">
  //           <div className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-in-columns">
  //             <div>
  //               <div
  //                 className="display-flex"
  //                 tabIndex="-1"
  //                 aria-hidden="true"
  //               ></div>
  //             </div>

  //             <div className="display-flex flex-column full-width align-self-center">
  //               <div className="display-flex flex-row justify-space-between">
  //                 <a
  //                   data-field="skill_card_skill_topic"
  //                   className="optional-action-target-wrapper
  //       display-flex flex-column full-width"
  //                   target="_self"
  //                   href="https://www.linkedin.com/search/results/all/?keywords=JavaScript&amp;origin=PROFILE_PAGE_SKILL_NAVIGATION"
  //                 >
  //                   <div className="display-flex align-items-center">
  //                     <span className="mr1 hoverable-link-text t-bold">
  //                       <span aria-hidden="true">JavaScript</span>
  //                       {/* <span className="visually-hidden">JavaScript</span> */}
  //                     </span>
  //                   </div>
  //                 </a>

  //                 <div className="pvs-entity__action-container"></div>
  //               </div>

  //               <div className="pvs-list__outer-container">
  //                 <ul className="pvs-list">
  //                   <li className=" ">
  //                     <div className="display-flex mv1 link-without-hover-visited">
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               {/* <img width="24" src="https://media.licdn.com/dms/image/C560BAQFKNxOZ4X0g8Q/company-logo_100_100/0/1670610916338?e=1686182400&amp;v=beta&amp;t=xVibPYIeMo9ioMrLZ6IaktH1Y3cyyIX32ZRHGTx7Ju8" loading="lazy" height="24" alt="" id="ember3236" className="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-square-size-0 EntityPhoto-square-0-stackedFacepile  lazy-image ember-view"> */}
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center">
  //                             <div
  //                               className="inline-show-more-text inline-show-more-text--is-collapsed full-width"
  //                               // style={{line-height:1.9+'rem';max-height:3.8+'rem'}}
  //                               tabIndex="-1"
  //                             >
  //                               <span aria-hidden="true">Galvanize Inc</span>
  //                               {/* <span className="visually-hidden">Galvanize Inc</span> */}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className=" ">
  //                     <a
  //                       className="optional-action-target-wrapper display-flex mv1 link-without-hover-visited"
  //                       target="_self"
  //                       href="https://www.linkedin.com/in/jacob-linson/overlay/urn:li:fsd_skill:(ACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU,3)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU&amp;tabIndex=1&amp;modaltabIndex=1"
  //                     >
  //                       <div className="mr2 mv1">
  //                         <ul
  //                           className="ivm-entity-pile
  //     display-flex align-items-center t-black"
  //                         >
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               {/* <img width="24" src="https://media.licdn.com/dms/image/D5603AQG0sE1PfdibwA/profile-displayphoto-shrink_100_100/0/1671662502941?e=1683158400&amp;v=beta&amp;t=CO3ZP6aHVe4SuQMv3NJVZg6kOXvIpq8z1SnbrzqAEsE" loading="lazy" height="24" alt="" id="ember3237" className="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-circle-size-0 EntityPhoto-circle-0-stackedFacepile  lazy-image ember-view"> */}
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="pv-shared-text-with-see-more full-width t-14 t-normal t-black hoverable-link-text display-flex align-items-center">
  //                             <div
  //                               className="inline-show-more-text inline-show-more-text--is-collapsed full-width"
  //                               // style={{line-height:1.9+'rem';max-height:3.8+'rem'}}
  //                               tabIndex="-1"
  //                             >
  //                               <span aria-hidden="true">
  //                                 Endorsed by
  //                                 <span className="white-space-pre"> </span>Dany
  //                                 Briceno
  //                                 <span className="white-space-pre"> </span>
  //                                 and 1 other mutual connection
  //                               </span>
  //                               {/* <span className="visually-hidden">
  //                                 Endorsed by
  //                                 <span className="white-space-pre"> </span>Dany
  //                                 Briceno
  //                                 <span className="white-space-pre"> </span>
  //                                 and 1 other mutual connection
  //                               </span> */}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </a>
  //                   </li>
  //                   <li className=" ">
  //                     <a
  //                       className="optional-action-target-wrapper display-flex mv1 link-without-hover-visited"
  //                       target="_self"
  //                       href="https://www.linkedin.com/in/jacob-linson/details/skills/urn:li:fsd_skill:(ACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU,3)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU&amp;tabIndex=0&amp;modaltabIndex=0&amp;detailScreentabIndex=0"
  //                     >
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               <li-icon
  //                                 aria-hidden="true"
  //                                 type="people"
  //                                 className="ivm-view-attr__icon--icon "
  //                                 size="medium"
  //                               >
  //                                 <svg
  //                                   xmlns="http://www.w3.org/2000/svg"
  //                                   viewBox="0 0 24 24"
  //                                   data-supported-dps="24x24"
  //                                   fill="currentColor"
  //                                   className="mercado-match"
  //                                   width="24"
  //                                   height="24"
  //                                   focusable="false"
  //                                 >
  //                                   <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
  //                                 </svg>
  //                               </li-icon>
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="hoverable-link-text display-flex align-items-centert-14 t-normal t-black">
  //                             <span aria-hidden="true">3 endorsements</span>
  //                             {/* <span className="visually-hidden">
  //                               3 endorsements
  //                             </span> */}
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </a>
  //                   </li>
  //                   <li className=" ">
  //                     <div className="pv2">
  //                       <button
  //                         id="ember3238"
  //                         className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
  //                         type="button"
  //                       >
  //                         {" "}
  //                         <li-icon
  //                           aria-hidden="true"
  //                           type="check"
  //                           className="artdeco-button__icon"
  //                           size="small"
  //                         >
  //                           <svg
  //                             xmlns="http://www.w3.org/2000/svg"
  //                             viewBox="0 0 16 16"
  //                             data-supported-dps="16x16"
  //                             fill="currentColor"
  //                             className="mercado-match"
  //                             width="16"
  //                             height="16"
  //                             focusable="false"
  //                           >
  //                             <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
  //                           </svg>
  //                         </li-icon>
  //                         <span className="artdeco-button__text">Endorsed</span>
  //                       </button>
  //                     </div>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </li>
  //         <li className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column">
  //           <div className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-in-columns">
  //             <div>
  //               <div
  //                 className="display-flex"
  //                 tabIndex="-1"
  //                 aria-hidden="true"
  //               ></div>
  //             </div>

  //             <div className="display-flex flex-column full-width align-self-center">
  //               <div className="display-flex flex-row justify-space-between">
  //                 <a
  //                   data-field="skill_card_skill_topic"
  //                   className="optional-action-target-wrapper display-flex flex-column full-width"
  //                   target="_self"
  //                   href="https://www.linkedin.com/search/results/all/?keywords=Front-End+Development&amp;origin=PROFILE_PAGE_SKILL_NAVIGATION"
  //                 >
  //                   <div className="display-flex align-items-center">
  //                     <span className="mr1 hoverable-link-text t-bold">
  //                       <span aria-hidden="true">Front-End Development</span>
  //                       {/* <span className="visually-hidden">
  //                         Front-End Development
  //                       </span> */}
  //                     </span>
  //                   </div>
  //                 </a>

  //                 <div className="pvs-entity__action-container"></div>
  //               </div>

  //               <div className="pvs-list__outer-container">
  //                 <ul className="pvs-list">
  //                   <li className=" ">
  //                     <div className="display-flex mv1 link-without-hover-visited">
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               {/* <img width="24" src="https://media.licdn.com/dms/image/C560BAQFKNxOZ4X0g8Q/company-logo_100_100/0/1670610916338?e=1686182400&amp;v=beta&amp;t=xVibPYIeMo9ioMrLZ6IaktH1Y3cyyIX32ZRHGTx7Ju8" loading="lazy" height="24" alt="" id="ember3239" className="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-square-size-0 EntityPhoto-square-0-stackedFacepile  lazy-image ember-view"> */}
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center">
  //                             <div
  //                               className="inline-show-more-text inline-show-more-text--is-collapsed full-width"
  //                               // style={{line-height:1.9+'rem';max-height:3.8+'rem'}}
  //                               tabIndex="-1"
  //                             >
  //                               <span aria-hidden="true">Galvanize Inc</span>
  //                               {/* <span className="visually-hidden">
  //                                 Galvanize Inc
  //                               </span> */}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className=" ">
  //                     <a
  //                       className="optional-action-target-wrapper display-flex mv1 link-without-hover-visited"
  //                       target="_self"
  //                       href="https://www.linkedin.com/in/jacob-linson/details/skills/urn:li:fsd_skill:(ACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU,4)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU&amp;tabIndex=0&amp;modaltabIndex=0&amp;detailScreentabIndex=0"
  //                     >
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               <li-icon
  //                                 aria-hidden="true"
  //                                 type="people"
  //                                 className="ivm-view-attr__icon--icon "
  //                                 size="medium"
  //                               >
  //                                 <svg
  //                                   xmlns="http://www.w3.org/2000/svg"
  //                                   viewBox="0 0 24 24"
  //                                   data-supported-dps="24x24"
  //                                   fill="currentColor"
  //                                   className="mercado-match"
  //                                   width="24"
  //                                   height="24"
  //                                   focusable="false"
  //                                 >
  //                                   <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
  //                                 </svg>
  //                               </li-icon>
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="hoverable-link-text display-flex align-items-center t-14 t-normal t-black">
  //                             <span aria-hidden="true">3 endorsements</span>
  //                             {/* <span className="visually-hidden">
  //                               3 endorsements
  //                             </span> */}
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </a>
  //                   </li>
  //                   <li className=" ">
  //                     <div className="pv2">
  //                       <button
  //                         id="ember3240"
  //                         className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
  //                         type="button"
  //                       >
  //                         {" "}
  //                         <li-icon
  //                           aria-hidden="true"
  //                           type="check"
  //                           className="artdeco-button__icon"
  //                           size="small"
  //                         >
  //                           <svg
  //                             xmlns="http://www.w3.org/2000/svg"
  //                             viewBox="0 0 16 16"
  //                             data-supported-dps="16x16"
  //                             fill="currentColor"
  //                             className="mercado-match"
  //                             width="16"
  //                             height="16"
  //                             focusable="false"
  //                           >
  //                             <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
  //                           </svg>
  //                         </li-icon>
  //                         <span className="artdeco-button__text">Endorsed</span>
  //                       </button>
  //                     </div>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </li>
  //         <li className="artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column">
  //           <div className="pvs-entity pvs-entity--padded pvs-list__item--no-padding-in-columns">
  //             <div>
  //               <div
  //                 className="display-flex"
  //                 tabIndex="-1"
  //                 aria-hidden="true"
  //               ></div>
  //             </div>

  //             <div className="display-flex flex-column full-width align-self-center">
  //               <div className="display-flex flex-row justify-space-between">
  //                 <a
  //                   data-field="skill_card_skill_topic"
  //                   className="optional-action-target-wrapper display-flex flex-column full-width"
  //                   target="_self"
  //                   href="https://www.linkedin.com/search/results/all/?keywords=Back-End+Web+Development&amp;origin=PROFILE_PAGE_SKILL_NAVIGATION"
  //                 >
  //                   <div className="display-flex align-items-center">
  //                     <span className="mr1 hoverable-link-text t-bold">
  //                       <span aria-hidden="true">Back-End Web Development</span>
  //                       {/* <span className="visually-hidden">
  //                         Back-End Web Development
  //                       </span> */}
  //                     </span>
  //                   </div>
  //                 </a>

  //                 <div className="pvs-entity__action-container"></div>
  //               </div>

  //               <div className="pvs-list__outer-container">
  //                 <ul className="pvs-list">
  //                   <li className=" ">
  //                     <div className="display-flex mv1 link-without-hover-visited">
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               {/* <img width="24" src="https://media.licdn.com/dms/image/C560BAQFKNxOZ4X0g8Q/company-logo_100_100/0/1670610916338?e=1686182400&amp;v=beta&amp;t=xVibPYIeMo9ioMrLZ6IaktH1Y3cyyIX32ZRHGTx7Ju8" loading="lazy" height="24" alt="" id="ember3241" className="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-square-size-0 EntityPhoto-square-0-stackedFacepile  lazy-image ember-view"> */}
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="pv-shared-text-with-see-more full-width t-14 t-normal t-black display-flex align-items-center">
  //                             <div
  //                               className="inline-show-more-text inline-show-more-text--is-collapsed full-width"
  //                               // style={{line-height:1.9+'rem';max-height:3.8+'rem'}}
  //                               tabIndex="-1"
  //                             >
  //                               <span aria-hidden="true">Galvanize Inc</span>
  //                               {/* <span className="visually-hidden">
  //                                 Galvanize Inc
  //                               </span> */}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </li>
  //                   <li className=" ">
  //                     <a
  //                       className="optional-action-target-wrapper display-flex mv1 link-without-hover-visited"
  //                       target="_self"
  //                       href="https://www.linkedin.com/in/jacob-linson/overlay/urn:li:fsd_skill:(ACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU,5)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU&amp;tabIndex=1&amp;modaltabIndex=1"
  //                     >
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               {/* <img width="24" src="https://media.licdn.com/dms/image/D5603AQG0sE1PfdibwA/profile-displayphoto-shrink_100_100/0/1671662502941?e=1683158400&amp;v=beta&amp;t=CO3ZP6aHVe4SuQMv3NJVZg6kOXvIpq8z1SnbrzqAEsE" loading="lazy" height="24" alt="" id="ember3242" className="ivm-view-attr__img--centered ivm-view-attr__img--stacked ivm-view-attr__img--stacked-circle-size-0 EntityPhoto-circle-0-stackedFacepile  lazy-image ember-view"> */}
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="pv-shared-text-with-see-more full-width t-14 t-normal t-black hoverable-link-text display-flex align-items-center">
  //                             <div
  //                               className="inline-show-more-text inline-show-more-text--is-collapsed full-width"
  //                               // style={{line-height:1.9+'rem';max-height:3.8+'rem'}}
  //                               tabIndex="-1"
  //                             >
  //                               <span aria-hidden="true">
  //                                 Endorsed by
  //                                 <span className="white-space-pre"> </span>Dany
  //                                 Briceno
  //                                 <span className="white-space-pre"> </span>
  //                                 and 1 other mutual connection
  //                               </span>
  //                               {/* <span className="visually-hidden">
  //                                 Endorsed by
  //                                 <span className="white-space-pre"> </span>Dany
  //                                 Briceno
  //                                 <span className="white-space-pre"> </span>
  //                                 and 1 other mutual connection
  //                               </span> */}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </a>
  //                   </li>
  //                   <li className=" ">
  //                     <a
  //                       className="optional-action-target-wrapper display-flex mv1 link-without-hover-visited"
  //                       target="_self"
  //                       href="https://www.linkedin.com/in/jacob-linson/details/skills/urn:li:fsd_skill:(ACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU,5)/endorsers?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU&amp;tabIndex=0&amp;modaltabIndex=0&amp;detailScreentabIndex=0"
  //                     >
  //                       <div className="mr2 mv1">
  //                         <ul className="ivm-entity-pile display-flex align-items-center t-black">
  //                           <li className="ivm-entity-pile__img-item--stacked">
  //                             <div className="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex">
  //                               <li-icon
  //                                 aria-hidden="true"
  //                                 type="people"
  //                                 className="ivm-view-attr__icon--icon "
  //                                 size="medium"
  //                               >
  //                                 <svg
  //                                   xmlns="http://www.w3.org/2000/svg"
  //                                   viewBox="0 0 24 24"
  //                                   data-supported-dps="24x24"
  //                                   fill="currentColor"
  //                                   className="mercado-match"
  //                                   width="24"
  //                                   height="24"
  //                                   focusable="false"
  //                                 >
  //                                   <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
  //                                 </svg>
  //                               </li-icon>
  //                             </div>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="display-flex ">
  //                         <div className="display-flex full-width">
  //                           <div className="hoverable-link-text display-flex align-items-center t-14 t-normal t-black">
  //                             <span aria-hidden="true">3 endorsements</span>
  //                             {/* <span className="visually-hidden">
  //                               3 endorsements
  //                             </span> */}
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </a>
  //                   </li>
  //                   <li className=" ">
  //                     <div className="pv2">
  //                       <button
  //                         id="ember3243"
  //                         className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
  //                         type="button"
  //                       >
  //                         {" "}
  //                         <li-icon
  //                           aria-hidden="true"
  //                           type="check"
  //                           className="artdeco-button__icon"
  //                           size="small"
  //                         >
  //                           <svg
  //                             xmlns="http://www.w3.org/2000/svg"
  //                             viewBox="0 0 16 16"
  //                             data-supported-dps="16x16"
  //                             fill="currentColor"
  //                             className="mercado-match"
  //                             width="16"
  //                             height="16"
  //                             focusable="false"
  //                           >
  //                             <path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
  //                           </svg>
  //                         </li-icon>
  //                         <span className="artdeco-button__text">Endorsed</span>
  //                       </button>
  //                     </div>
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //         </li>
  //       </ul>
  //       <div className="pvs-list__footer-wrapper">
  //         <div className="">
  //           <a
  //             className="optional-action-target-wrapper artdeco-button artdeco-button--tertiary artdeco-button--standard artdeco-button--2 artdeco-button--muted inline-flex justify-center full-width align-items-center artdeco-button--fluid"
  //             target="_self"
  //             href="https://www.linkedin.com/in/jacob-linson/details/skills?profileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOHjQBIqBslN3N5OYbN2wcHwGm78k79yU"
  //           >
  //             <span className="pvs-navigation__text">Show all 23 skills</span>
  //             <div className="pvs-navigation__icon">
  //               <li-icon aria-hidden="true" type="arrow-right" size="small">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   viewBox="0 0 16 16"
  //                   className="mercado-match"
  //                   data-supported-dps="16x16"
  //                   fill="currentColor"
  //                   width="16"
  //                   height="16"
  //                   focusable="false"
  //                 >
  //                   <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
  //                 </svg>
  //               </li-icon>
  //             </div>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section className="entire-component margin-top-8">
      <div
        id="skills"
        className="pv-profile-card-anchor padding-top-right-left-12"
      >
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
          <a className="display-flex align-items-center justify-center">
            <div>
              <span>Show all 23 skills</span>
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
  // console.log(isLoading ? "loading..." : companies);
  // console.log(company[skill.company_id].name);
  // console.log(companies);
  return (
    <li key={id} className="skill-item-container">
      <div className="padding-top-bottom-12-left-right-24">
        {/*  skill title */}
        <div>
          <a>
            <span className="skill-title">{skill.name}</span>
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
                  {/* <span>{company}</span> */}
                  {/* <span>fetch company</span> */}
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
                <div className="display-flex align-items-center">
                  <span>
                    Endorsed by Dany Briceno and 1 other mutual connection
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a target="_self" href="">
              {/* <div class="mr2 mv1">
                        <ul class="ivm-entity-pile display-flex align-items-center t-black">
                          <li class="ivm-entity-pile__img-item--stacked">
                            <div class="ivm-view-attr__img-wrapper ivm-view-attr__img-wrapper--use-img-tag display-flex"> */}
              <div className="display-flex">
                <div className="right-margin-8">
                  <li-icon
                  // aria-hidden="true"
                  // type="people"
                  // class="ivm-view-attr__icon--icon "
                  // size="medium"
                  >
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
                <div className="display-flex align-items-center">
                  <span>3 endorsements</span>
                </div>
                {/* </div>
                          </li>
                          </ul>
                        </div> */}
              </div>
            </a>
          </li>
          <li>
            <div className="padding-top-bottom-8">
              <button
                id="ember3240"
                // className="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
                type="button"
              >
                {" "}
                <li-icon
                  aria-hidden="true"
                  type="check"
                  className="artdeco-button__icon"
                  size="small"
                >
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
                </li-icon>
                <span className="artdeco-button__text">Endorsed</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
}
export default Skills;
