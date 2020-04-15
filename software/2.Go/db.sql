CREATE TABLE Users (
	ID SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL
);

CREATE TABLE Posts (
	id INT NOT NULL,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	author VARCHAR(50) NOT NULL
);


INSERT INTO Users (ID, first_name) VALUES (1, 'Taddeo');
INSERT INTO Users (ID, first_name) VALUES (2, 'Dael');
INSERT INTO Users (ID, first_name) VALUES (3, 'Damara');
INSERT INTO Users (ID, first_name) VALUES (4, 'Even');
INSERT INTO Users (ID, first_name) VALUES (5, 'Nady');
INSERT INTO Users (ID, first_name) VALUES (6, 'Ezra');
INSERT INTO Users (ID, first_name) VALUES (7, 'Tony');
INSERT INTO Users (ID, first_name) VALUES (8, 'Nancee');
INSERT INTO Users (ID, first_name) VALUES (9, 'Odessa');
INSERT INTO Users (ID, first_name) VALUES (10, 'Ajay');


INSERT INTO Posts (id, title, content, author) VALUES (1, 'platea dictumst etiam faucibus', 'eleifend donec ut fringilla rhoncus convallis tortor risus dapibus augue vel accumsan tellus', 1);
INSERT INTO Posts (id, title, content, author) VALUES (2, 'lobortis ligula sit', 'blandit nam nulla integer pede est in tempus sit amet sem fusce consequat nulla nisl', 1);
INSERT INTO Posts (id, title, content, author) VALUES (3, 'sed vestibulum sit amet', 'scelerisque mauris sit amet convallis nulla neque libero convallis eget eleifend luctus ultricies', 1);
INSERT INTO Posts (id, title, content, author) VALUES (4, 'faucibus cursus urna', 'nulla facilisi cras non velit eros viverra eget congue eget semper rutrum', 2);
INSERT INTO Posts (id, title, content, author) VALUES (5, 'nisl duis ac', 'ante vestibulum ante ipsum primis in cubilia dolor morbi vel lectus in quam fringilla rhoncus', 2);
INSERT INTO Posts (id, title, content, author) VALUES (6, 'semper porta', 'in faucibus orci luctus et ultrices vel ac tristique fusce congue diam id ornare imperdiet sapien urna pretium', 2);
INSERT INTO Posts (id, title, content, author) VALUES (7, 'leo rhoncus', 'sollicitudin vitae consectetuer eget vel praesent pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem', 3);
INSERT INTO Posts (id, title, content, author) VALUES (8, 'ac est lacinia', 'faucibus cursus urna ut tellus nulla nullam vel nulla eget eros elementum pellentesque quisque porta volutpat erat', 3);
INSERT INTO Posts (id, title, content, author) VALUES (9, 'suscipit a feugiat', 'duis bibendum felis sed interdum porttitor platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo', 3);
INSERT INTO Posts (id, title, content, author) VALUES (10, 'nullam porttitor lacus', 'nonummy integer non velit et donec pharetra magna vestibulum aliquet ultrices erat tortor', 4);
INSERT INTO Posts (id, title, content, author) VALUES (11, 'tristique est et', 'lectus vestibulum quam sapien ante vestibulum curabitur convallis duis consequat', 4);
INSERT INTO Posts (id, title, content, author) VALUES (12, 'sollicitudin ut suscipit', 'augue quam sollicitudin integer blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus', 4);
INSERT INTO Posts (id, title, content, author) VALUES (13, 'sollicitudin', 'purus aliquet at feugiat non pretium augue molestie lorem quisque ut erat curabitur', 5);
INSERT INTO Posts (id, title, content, author) VALUES (14, 'sit amet', 'eleifend donec ut dolor morbi vel lectus leo lobortis augue vel accumsan tellus nisi', 5);
INSERT INTO Posts (id, title, content, author) VALUES (15, 'sed magna', 'massa id nisl venenatis lacinia aenean cras mi pede ipsum adipiscing elit proin interdum mauris', 5);
INSERT INTO Posts (id, title, content, author) VALUES (16, 'adipiscing molestie hendrerit at', 'ligula pellentesque aenean donec quis orci eget orci vehicula condimentum curabitur in', 6);
INSERT INTO Posts (id, title, content, author) VALUES (17, 'sapien placerat ante', 'dis parturient montes nascetur rutrum rutrum neque aenean auctor gravida', 6);
INSERT INTO Posts (id, title, content, author) VALUES (18, 'congue risus', 'in eleifend quam a odio in hac habitasse nisi at nibh in hac habitasse', 6);
INSERT INTO Posts (id, title, content, author) VALUES (19, 'et commodo vulputate', 'non pretium quis lectus suspendisse in mollis molestie lorem quisque ut erat curabitur gravida', 7);
INSERT INTO Posts (id, title, content, author) VALUES (20, 'cras', 'libero quis orci nullam molestie nibh in lectus cum sociis natoque penatibus', 7);
INSERT INTO Posts (id, title, content, author) VALUES (21, 'leo pellentesque ultrices', 'condimentum neque sapien turpis turpis sed ante mauris eget massa tempor convallis', 7);
INSERT INTO Posts (id, title, content, author) VALUES (22, 'amet justo', 'amet diam in magna bibendum imperdiet sed ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem', 8);
INSERT INTO Posts (id, title, content, author) VALUES (23, 'dolor morbi vel', 'odio odio elementum eu interdum lobortis cursus vestibulum proin eu mi nulla ac', 8);
INSERT INTO Posts (id, title, content, author) VALUES (24, 'nisi', 'dictumst etiam faucibus cursus urna ut tellus elementum tincidunt lacus at velit vivamus', 8);
INSERT INTO Posts (id, title, content, author) VALUES (25, 'nulla facilisi', 'ultricies eu nibh quisque id justo nulla dapibus dolor a feugiat et', 9);
INSERT INTO Posts (id, title, content, author) VALUES (26, 'leo', 'ultrices libero non mattis pulvinar nulla pede ligula in lacus curabitur at ipsum', 9);
INSERT INTO Posts (id, title, content, author) VALUES (27, 'non velit nec nisi', 'duis aliquam convallis nunc nonummy integer vestibulum ante ipsum primis in pharetra', 9);
INSERT INTO Posts (id, title, content, author) VALUES (28, 'elementum nullam', 'tempus vivamus in felis eu sapien ac enim nibh ligula nec sem duis', 10);
INSERT INTO Posts (id, title, content, author) VALUES (29, 'pede libero quis', 'mi in porttitor pede justo eu eu est congue diam erat fermentum justo nec condimentum neque', 10);
INSERT INTO Posts (id, title, content, author) VALUES (30, 'quam pede lobortis ligula', 'eu orci mauris lacinia turpis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla', 10);
