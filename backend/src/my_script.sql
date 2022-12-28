USE moviesDB;

CREATE TABLE users(  
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(80) NOT NULL,
    token VARCHAR(50) NOT NULL
);

CREATE TABLE movies(  
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(500) NOT NULL,
    rating INT NOT NULL,
    description VARCHAR(800) NOT NULL,
    image_url VARCHAR(1000) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);