-- SQLite

DROP TABLE user;
DROP TABLE assessment;

CREATE TABLE user (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    hash TEXT NOT NULL,
    teacher INTEGER NOT NULL,
    admin INTEGER NOT NULL,
    profile TEXT
);

CREATE TABLE assessment (
    id INTEGER PRIMARY KEY,
    pupil TEXT NOT NULL,
    cdap INTEGER,
    english INTEGER,
    markup INTEGER NOT NULL,
    stories INTEGER NOT NULL,
    concepts INTEGER NOT NULL,
    cdapComments TEXT,
    diversity INTEGER NOT NULL,
    texts INTEGER NOT NULL,
    learning INTEGER NOT NULL,
    digital INTEGER NOT NULL,
    terminology INTEGER NOT NULL,
    expression INTEGER NOT NULL,
    grammar INTEGER NOT NULL,
    read INTEGER NOT NULL,
    sources INTEGER NOT NULL,
    englishComments TEXT
);
