DROP TABLE IF EXISTS users, company, skill, experience, poss_connections;

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
    skills TEXT,
    FOREIGN KEY (company_id)
    REFERENCES company(id)
);

CREATE TABLE poss_connections (
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

INSERT INTO experience (company_id,title,date_ended,date_started, description, skills)
VALUES(2,'Infantry Squad Leader','Jan 2023','Jul 2018','Responsible for the discipline, training, control, conduct and welfare of 10
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
