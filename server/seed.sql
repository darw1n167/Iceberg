DROP TABLE IF EXISTS users, company, skill, experience;

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