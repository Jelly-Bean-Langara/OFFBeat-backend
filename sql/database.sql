CREATE TABLE IF NOT EXISTS posts (
	post_id INT NOT NULL AUTO_INCREMENT,
	post_title varchar(255) NOT NULL,
	post_created_at TIMESTAMP NOT NULL,
  post_visibility BOOLEAN DEFAULT '0',
	category_id INT NOT NULL,
	user_id INT NOT NULL,
	PRIMARY KEY (post_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS categories (
	category_id INT NOT NULL AUTO_INCREMENT,
	category_title varchar(255) NOT NULL,
	category_cover TEXT NOT NULL,
	PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS moments (
	moment_id INT NOT NULL AUTO_INCREMENT,
	moment_date DATETIME NOT NULL,
	moment_description TEXT NOT NULL,
	moment_latitude varchar(255) NOT NULL,
	moment_longitude varchar(255) NOT NULL,
	moment_location_name TEXT NOT NULL,
	post_id INT NOT NULL,
	PRIMARY KEY (moment_id),
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS moments_pictures (
	moment_picture_id INT NOT NULL AUTO_INCREMENT,
	moment_picture_file_name varchar(255) NOT NULL,
	moment_id INT NOT NULL,
	PRIMARY KEY (moment_picture_id),
  FOREIGN KEY (moment_id) REFERENCES moments(moment_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	user_middle_name varchar(255),
	user_last_name varchar(255),
	user_email varchar(255) NOT NULL,
	user_created_at TIMESTAMP NOT NULL,
	user_allow BOOLEAN NOT NULL DEFAULT '1',
	user_last_login TIMESTAMP,
	PRIMARY KEY (user_id)
);