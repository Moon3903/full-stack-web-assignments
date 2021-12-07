CREATE DATABASE streaming;

USE streaming;

CREATE TABLE singer(
	singer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE album(
	album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    singer_id INT,
    FOREIGN KEY (singer_id) REFERENCES singer(singer_id)
);

CREATE TABLE track(
	track_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    singer_id INT,
    FOREIGN KEY (singer_id) REFERENCES singer(singer_id),
    album_id INT,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
);

CREATE TABLE `user`(
	user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE playlist(
	playlist_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE playlist_track(
	track_id INT,
    FOREIGN KEY (track_id) REFERENCES track(track_id),
    playlist_id INT,
    FOREIGN KEY (playlist_id) REFERENCES playlist(playlist_id)
);