CREATE TABLE IF NOT EXISTS users
(
  id text PRIMARY KEY,
  username text NOT NULL,
  passwd text NOT NULL,
  notes text NOT NULL
);
