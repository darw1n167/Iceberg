DROP TABLE IF EXISTS users, company, skill, experience, poss_connections, people_viewed;

CREATE TABLE users (
    id SERIAL,
    first_name TEXT,
    last_name TEXT,
    headline TEXT,
    about TEXT,
    location TEXT,
    profile_img TEXT,
    background_img TEXT
);

CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    name TEXT,
    logo_img TEXT
);

CREATE TABLE skill (
    id SERIAL,
    name TEXT,
    endorsements INTEGER,
    company_id INTEGER,
    FOREIGN KEY (company_id)
    REFERENCES company (id)
);

CREATE TABLE experience (
    id SERIAL,
    title TEXT,
    description TEXT,
    date_started TEXT,
    date_ended TEXT,
    company_id INTEGER,
    FOREIGN KEY (company_id)
    REFERENCES company(id)
);

CREATE TABLE poss_connections (
    id SERIAL,
    name TEXT,
    headline TEXT,
    pic_url TEXT
);

CREATE TABLE people_viewed (
    id SERIAL,
    name TEXT,
    headline TEXT,
    pic_url TEXT
);

INSERT INTO users (first_name, last_name, headline, about, location, profile_img, background_img)
VALUES('Jacob','Linson','Software Engineer | Full Stack Developer | JavaScript | Security Clearance',
'Personnel management leader with 7 years of experience in managerial positions that have proven my capabilities to lead a strong team. Quickly to adapt to a changing work environment while continuing my software engineering skills in JavaScript (Common JS and ES6), HTML5, CSS3, NodeJS, RESTful APIs with CRUD functionality, relational databases using PostgreSQL, and many other technologies. Looking to pursue a career in software engineering to continue to expand my education and knowledge.

Please feel free to contact me at jlinson16@gmail.com',
'Killeen-Temple Area','profile_img','background_img');

INSERT INTO company (name,logo_img)
VALUES('Galvanize Inc','logo_img'),
('United States Department of Defense','logo_img');

INSERT INTO skill (name, endorsements,company_id)
VALUES('JavaScript',3, 1),
('Front-End Development',3,1),
('Back-End Web Development',3,1);

INSERT INTO experience (company_id,title,date_started,date_ended, description)
VALUES(2,'Jul 2018','Jan 2023','Infantry Squad Leader','Responsible for the discipline, training, control, conduct and welfare of 10
soldiers at all times.
Signed for and responsible for the condition, care, and effective use of the squads equipment.Responsible for the discipline, training, control, conduct and welfare of 10 soldiers at all times. Signed for and responsible for the condition, care, and effective use of the squads equipment.'
,'Team Leadership · Veterans · Supervisory Skills · Personnel Management');

INSERT INTO poss_connections (name, headline, pic_url)
    VALUES
    ('Bain Obermark', '| US Army Veteran | Full Stack Software Engineer | Secret Clearance |', 'https://media.licdn.com/dms/image/D5635AQEiyNs34E1KOg/profile-framedphoto-shrink_100_100/0/1669216900239?e=1678816800&v=beta&t=_qsyvoAJCeby3TyBvzu00k17uiTxkkQ3hSuDDtOuj6w'), 
    ('Simon Solomon', 'Full Stack Web Developer | US Army Veteran | JavaScript - HTML5 - CSS3 | React - Next.JS - P/MERN', 'https://media.licdn.com/dms/image/D5635AQHzSD63LnvVJw/profile-framedphoto-shrink_100_100/0/1673927756448?e=1678816800&v=beta&t=JsSF3p9fV2jELIJEVgFd3mxn7L8TznDykLhtF1ukIkI'),
    ('Fernando Castro', 'Full Stack Developer | USMC Vet | Secret clearance', 'https://media.licdn.com/dms/image/D5603AQEpR6tMe2HJBA/profile-displayphoto-shrink_100_100/0/1673969407084?e=1683763200&v=beta&t=NdpE6ywAgeSKEa765JL2-w6ELcx61ueCTmKKwJy-FiU'),
    ('Paul Devlin', 'Veteran | Father | Software Engineer at Booz Allen Hamilton', 'https://media.licdn.com/dms/image/C5603AQGG7EKP3nBajA/profile-displayphoto-shrink_100_100/0/1635520992526?e=1683763200&v=beta&t=kFuFDbVJbGgm6zFXqmtlxluAtDJocF_LnfHvB773iXE'),
    ('Ryan Lonergan', 'Placing the right people and resources needed to meet internal and external requirements | Project Manager | Comprehensive process improvement', 'https://media.licdn.com/dms/image/D4D03AQG6aC2dT2XQ5Q/profile-displayphoto-shrink_100_100/0/1675010061985?e=1683763200&v=beta&t=Q-w0lSyiL1-GlxfvreiNrDxFVhAqgfpkNkjM9Hf8QvM'),
    ('Lucas Tousignant', 'Full-Stack Software Engineer', 'https://media.licdn.com/dms/image/D5635AQEI-jpAiD3cWQ/profile-framedphoto-shrink_100_100/0/1677026172764?e=1678816800&v=beta&t=HuKagFgKrAaF7UZ4i_6QEVBkpnCgI3sVoASkOpiPpCs'),
    ('Stephen Netzley, MSW', 'Military Career Transition Strategist', 'https://media.licdn.com/dms/image/C5603AQEywuL-5xEpkw/profile-displayphoto-shrink_100_100/0/1660187552114?e=1683763200&v=beta&t=ZBJqlMi26Et1AdkWmq4LG7l1JVa_0Hfn3l6Hvl7Pb4Q'),
    ('Brandon White', 'Transitioning Veteran, Full-Stack Software Engineer', 'https://media.licdn.com/dms/image/D4D35AQEPAMWmMeVzXA/profile-framedphoto-shrink_100_100/0/1676425599559?e=1678816800&v=beta&t=fJxxT3aw3BI9C9FW9nXQgemZrJ6f4ptYNRmQiqJPhcs'),
    ('Jacquon Nicholson', 'US Air Force Veteran ||  Certified Front End and Back End Developer || Full Stack Software Engineer || Project Management | JavaScript | Front End Engineer | Back End Engineer  Actively Looking for new Opportunities', 'https://media.licdn.com/dms/image/D5603AQG2n8U1sFeClg/profile-displayphoto-shrink_100_100/0/1666818772831?e=1683763200&v=beta&t=9Ao00Nm-JSZm732Pb6On8Wkf0l0Li2lW51iU4kRyMVA'),
    ('Magdiel R.', 'Software Engineer | PERN/MERN | US Air Force Vet | Motorsport Enthusiast', 'https://media.licdn.com/dms/image/D4D35AQExjWmU4tjvlA/profile-framedphoto-shrink_100_100/0/1657908314496?e=1678816800&v=beta&t=rQXS56u0L0BHAsnW8N6OASPVXrdYTIayZP2Xc8LOP3c');


INSERT INTO people_viewed (name, headline, pic_url)
    VALUES
    ('Davis Harper', '35N signals intelligence analysts coming to the end of my U.S Army contract. TS/SCI w/Full Scope poly. Tactical and strategic training.', 'https://media.licdn.com/dms/image/D5603AQHOXvuA2jiJJw/profile-displayphoto-shrink_100_100/0/1672620314522?e=1683763200&v=beta&t=PLjBQGEKifITpW_7Jxm3yrDvKPIsXNMvQZQfgt-h9Eg'), 
    ('Hunter Melgren', 'Bachelors in Mechanical Engineering.', 'https://media.licdn.com/dms/image/C5603AQFu_2heBxILfw/profile-displayphoto-shrink_100_100/0/1605648817291?e=1683763200&v=beta&t=MI_tH_IVt3eFRh9YcghSdG5XD6KnZ807pB8dJ3WGGbs'),
    ('Dwayne Holman Jr.', 'USN Veteran | Active Clearance | Team Builder and Leader', 'https://media.licdn.com/dms/image/D4E03AQG5a-34r5zhGg/profile-displayphoto-shrink_100_100/0/1674851265923?e=1683763200&v=beta&t=RFVwPVbz5A7YVA_HrjZW13E0Hs1BeR0VjZMemB0IeB8'),
    ('Darryl Giron', 'Highly motivated transitioning Veteran | Secret Clearance | Currently seeking entry-level opportunities as a Cloud Application Developer, Software Engineer or similar position | WaV2T Student', 'https://media.licdn.com/dms/image/D4D03AQF08txeP1JsMg/profile-displayphoto-shrink_100_100/0/1676397157798?e=1683763200&v=beta&t=kLKO6JV2eG692RkdQouZ1XYIjaoEoUqZCHrad5UfVDs'),
    ('Travis French', 'Veteran; active security clearance;', 'https://media.licdn.com/dms/image/D5603AQG9gPchB1wvCQ/profile-displayphoto-shrink_100_100/0/1669835821045?e=1683763200&v=beta&t=oWanfiSexmWyuCq5M_ydKICeSFHzWb1LrVHvU1WXBck'),
    ('Juan Acevedo ', 'DoD Secret | Veteran | ITF+ | Aspiring to be a Cloud Engineer | US Army Signal System Support Specialist | Communication Security Manager | ADDS | Microsoft Azure | Python | Linux', 'https://media.licdn.com/dms/image/D5603AQEXCziilkWepQ/profile-displayphoto-shrink_100_100/0/1673811998279?e=1683763200&v=beta&t=CHKlCnuEmRt1NdxL3W-98UpgS5y6AKWp0O428vDS4xg'),
    ('Grace Lawrence ', 'Aspiring Software Engineer | WA Vets2Tech (WAV2T) Student | Secret Clearance | Transitioning US Army HR Officer', 'https://media.licdn.com/dms/image/D5603AQFGbaWId_67CQ/profile-displayphoto-shrink_100_100/0/1676415794598?e=1683763200&v=beta&t=9cbFyo3xcd9-Un-dWY6VeLlAmAa35qP77R0Ou9kSQHk'),
    ('Toryan Washington ', 'Open to new opportunities as I transition out of the military.', 'https://media.licdn.com/dms/image/D5603AQH6Adhldd9iYg/profile-displayphoto-shrink_100_100/0/1674849139157?e=1683763200&v=beta&t=59MzJXLkTdBAuHK-vJW3pDz8iFEAdCXSkjdD-ydVuew'),
    ('Jacob Lester', 'Combat Specialist', 'https://media.licdn.com/dms/image/C4E03AQEzjYIGVHxBDw/profile-displayphoto-shrink_100_100/0/1662785475206?e=1683763200&v=beta&t=WlSN0XrJDReSt7vVFdcCvQtP5RIuKQjnulun_T_qm4w'),
    ('Brandon Hamlyn ', 'Software Development Engineering Student│WAVets2Tech Student at St. Martins University│Retired Military Veteran', 'https://media.licdn.com/dms/image/D5603AQE7x5bgh3FRkA/profile-displayphoto-shrink_100_100/0/1675285025247?e=1683763200&v=beta&t=ZLQxvubMFYEiOkBjpIXgAAzn2NnvMYJ__pPJV4b6q1g');
