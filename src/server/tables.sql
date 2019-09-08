-- create users table
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

-- create journals table
CREATE TABLE IF NOT EXISTS journals (
	id SERIAL PRIMARY KEY,
	journal_name TEXT,
	cover_img TEXT,
  	user_id INT,
	created_date DATE
);

-- create entries table
CREATE TABLE IF NOT EXISTS entries (
	id SERIAL PRIMARY KEY,
	user_id INT,
	journal_id INT,
	title TEXT,
	media TEXT,
	entry_content TEXT,
	entry_location TEXT,
	entry_date DATE,
	entry_update_date DATE
);