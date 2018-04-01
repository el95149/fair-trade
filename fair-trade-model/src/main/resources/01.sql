/* Insert initial data-set */
INSERT INTO User_Tbl (id, createDate, createUser, isActive, updateDate, updateUser, comments, email, firstName, gender, isExpired, lastName, password, role)
VALUES
  (1, '2018-03-31 00:00:00', 0, TRUE, '2018-03-31 00:00:00', 0, NULL, 'johnwick@syndicate.com', 'John', 'MALE', FALSE,
   'Wick', 'johnie123', 'USER');
INSERT INTO User_Tbl (id, createDate, createUser, isActive, updateDate, updateUser, comments, email, firstName, gender, isExpired, lastName, password, role)
VALUES
  (2, '2018-03-31 00:00:00', 0, TRUE, '2018-03-31 00:00:00', 0, NULL, 'admin@fairtrade.com', 'Super', 'MALE', FALSE,
   'User',
   'admin123', 'ADMIN');
