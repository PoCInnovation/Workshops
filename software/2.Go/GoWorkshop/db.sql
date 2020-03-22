create table Users (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	gender VARCHAR(50) NOT NULL
);

create table Posts (
	id INT NOT NULL,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	author VARCHAR(50) NOT NULL
);


insert into Users (id, first_name, last_name, email, gender) values (1, 'Taddeo', 'Hatwell', 'thatwell0@goo.gl', 'Male');
insert into Users (id, first_name, last_name, email, gender) values (2, 'Dael', 'Bessell', 'dbessell1@i2i.jp', 'Male');
insert into Users (id, first_name, last_name, email, gender) values (3, 'Damara', 'Bloy', 'dbloy2@answers.com', 'Female');
insert into Users (id, first_name, last_name, email, gender) values (4, 'Even', 'Scown', 'escown3@google.com.hk', 'Male');
insert into Users (id, first_name, last_name, email, gender) values (5, 'Nady', 'O''Hagirtie', 'nohagirtie4@huffingtonpost.com', 'Female');
insert into Users (id, first_name, last_name, email, gender) values (6, 'Ezra', 'Hammarberg', 'ehammarberg5@ovh.net', 'Male');
insert into Users (id, first_name, last_name, email, gender) values (7, 'Tony', 'Rigbye', 'trigbye6@theatlantic.com', 'Male');
insert into Users (id, first_name, last_name, email, gender) values (8, 'Nancee', 'Bravington', 'nbravington7@imageshack.us', 'Female');
insert into Users (id, first_name, last_name, email, gender) values (9, 'Odessa', 'Shearstone', 'oshearstone8@bandcamp.com', 'Female');
insert into Users (id, first_name, last_name, email, gender) values (10, 'Ajay', 'Adam', 'aadam9@storify.com', 'Female');


insert into Posts (id, title, content, author) values (1, 'platea dictumst etiam faucibus', 'eleifend donec ut fringilla rhoncus convallis tortor risus dapibus augue vel accumsan tellus', null);
insert into Posts (id, title, content, author) values (2, 'lobortis ligula sit', 'blandit nam nulla integer pede est in tempus sit amet sem fusce consequat nulla nisl', null);
insert into Posts (id, title, content, author) values (3, 'sed vestibulum sit amet', 'scelerisque mauris sit amet convallis nulla neque libero convallis eget eleifend luctus ultricies', null);
insert into Posts (id, title, content, author) values (4, 'faucibus cursus urna', 'nulla facilisi cras non velit eros viverra eget congue eget semper rutrum', null);
insert into Posts (id, title, content, author) values (5, 'nisl duis ac', 'ante vestibulum ante ipsum primis in cubilia dolor morbi vel lectus in quam fringilla rhoncus', null);
insert into Posts (id, title, content, author) values (6, 'semper porta', 'in faucibus orci luctus et ultrices vel ac tristique fusce congue diam id ornare imperdiet sapien urna pretium', null);
insert into Posts (id, title, content, author) values (7, 'leo rhoncus', 'sollicitudin vitae consectetuer eget vel praesent pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem', null);
insert into Posts (id, title, content, author) values (8, 'ac est lacinia', 'faucibus cursus urna ut tellus nulla nullam vel nulla eget eros elementum pellentesque quisque porta volutpat erat', null);
insert into Posts (id, title, content, author) values (9, 'suscipit a feugiat', 'duis bibendum felis sed interdum porttitor platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo', null);
insert into Posts (id, title, content, author) values (10, 'nullam porttitor lacus', 'nonummy integer non velit et donec pharetra magna vestibulum aliquet ultrices erat tortor', null);
insert into Posts (id, title, content, author) values (11, 'tristique est et', 'lectus vestibulum quam sapien ante vestibulum curabitur convallis duis consequat', null);
insert into Posts (id, title, content, author) values (12, 'sollicitudin ut suscipit', 'augue quam sollicitudin integer blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus', null);
insert into Posts (id, title, content, author) values (13, 'sollicitudin', 'purus aliquet at feugiat non pretium augue molestie lorem quisque ut erat curabitur', null);
insert into Posts (id, title, content, author) values (14, 'sit amet', 'eleifend donec ut dolor morbi vel lectus leo lobortis augue vel accumsan tellus nisi', null);
insert into Posts (id, title, content, author) values (15, 'sed magna', 'massa id nisl venenatis lacinia aenean cras mi pede ipsum adipiscing elit proin interdum mauris', null);
insert into Posts (id, title, content, author) values (16, 'adipiscing molestie hendrerit at', 'ligula pellentesque aenean donec quis orci eget orci vehicula condimentum curabitur in', null);
insert into Posts (id, title, content, author) values (17, 'sapien placerat ante', 'dis parturient montes nascetur rutrum rutrum neque aenean auctor gravida', null);
insert into Posts (id, title, content, author) values (18, 'congue risus', 'in eleifend quam a odio in hac habitasse nisi at nibh in hac habitasse', null);
insert into Posts (id, title, content, author) values (19, 'et commodo vulputate', 'non pretium quis lectus suspendisse in mollis molestie lorem quisque ut erat curabitur gravida', null);
insert into Posts (id, title, content, author) values (20, 'cras', 'libero quis orci nullam molestie nibh in lectus cum sociis natoque penatibus', null);
insert into Posts (id, title, content, author) values (21, 'leo pellentesque ultrices', 'condimentum neque sapien turpis turpis sed ante mauris eget massa tempor convallis', null);
insert into Posts (id, title, content, author) values (22, 'amet justo', 'amet diam in magna bibendum imperdiet sed ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem', null);
insert into Posts (id, title, content, author) values (23, 'dolor morbi vel', 'odio odio elementum eu interdum lobortis cursus vestibulum proin eu mi nulla ac', null);
insert into Posts (id, title, content, author) values (24, 'nisi', 'dictumst etiam faucibus cursus urna ut tellus elementum tincidunt lacus at velit vivamus', null);
insert into Posts (id, title, content, author) values (25, 'nulla facilisi', 'ultricies eu nibh quisque id justo nulla dapibus dolor a feugiat et', null);
insert into Posts (id, title, content, author) values (26, 'leo', 'ultrices libero non mattis pulvinar nulla pede ligula in lacus curabitur at ipsum', null);
insert into Posts (id, title, content, author) values (27, 'non velit nec nisi', 'duis aliquam convallis nunc nonummy integer vestibulum ante ipsum primis in pharetra', null);
insert into Posts (id, title, content, author) values (28, 'elementum nullam', 'tempus vivamus in felis eu sapien ac enim nibh ligula nec sem duis', null);
insert into Posts (id, title, content, author) values (29, 'pede libero quis', 'mi in porttitor pede justo eu eu est congue diam erat fermentum justo nec condimentum neque', null);
insert into Posts (id, title, content, author) values (30, 'quam pede lobortis ligula', 'eu orci mauris lacinia turpis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla', null);
