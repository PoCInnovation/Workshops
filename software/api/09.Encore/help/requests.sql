-------------
-- Packets --
-------------

-- Read all
SELECT * FROM packet

-- Read one
SELECT * FROM packet WHERE id=$1

-- Create
INSERT INTO packet (owner, receiver, destination) VALUES ($1, $2, $3)

-- Update
-- You'll need a custom go function that will set data for you
-- See buildUpdateArgs
UPDATE packet SET <key>=<value> WHERE id=$1

-- Delete
DELETE FROM packet WHERE id=$1

-----------------
-- Deliverymen --
-----------------

-- Read all
SELECT * FROM deliveryman

-- Read one
SELECT * FROM deliveryman WHERE id=$1

-- Create
INSERT INTO deliveryman (name) VALUES($1)

-- Update
-- You'll need a custom go function that will set data for you
-- See buildUpdateArgs
UPDATE deliveryman SET <key>=<value> WHERE id=$1

-- Delete
DELETE FROM deliveryman WHERE id=$1

--------------
-- Delivery --
--------------

-- Send
UPDATE packet SET status = 'Traveling', deliveryman_id = $1 WHERE id = $2
UPDATE deliveryman SET status = 'Working' WHERE id = $1

-- Receive
UPDATE packet SET status = 'Received', deliveryman_id = $1 WHERE id = $2
UPDATE deliveryman SET status = 'Available' WHERE id = $1