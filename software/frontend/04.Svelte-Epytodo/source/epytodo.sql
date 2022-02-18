create TABLE user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    primary key (id)
);

CREATE TABLE todo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    due_time DATETIME NOT NULL,
    status VARCHAR(100) DEFAULT 'not started',

    user_id INT UNSIGNED NOT NULL,
    primary key (id),
    foreign key (user_id) REFERENCES user(id),
    constraint CHK_status CHECK(status='todo' OR status='in progress' OR status='done' OR status='not started')
);