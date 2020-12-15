CREATE TABLE helo_users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) not null, 
    password VARCHAR(30) not null, 
    profile_pic text)

CREATE TABLE helo_posts (
    id SERIAL PRIMARY KEY, 
    title VARCHAR(45) not null, 
    content text, img text, 
    author_id integer, 
    date_created timestamp)