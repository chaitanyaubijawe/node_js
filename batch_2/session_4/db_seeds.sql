
-- Step 1- Creat schema/ create database
-- Step-2 create table

CREATE TABLE `soaps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(505) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `url` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Step-3 insert data to table
  INSERT INTO `vatsalya`.`soaps`
  (
  `name`,
  `description`,
  `price`)
  VALUES
  (
  'Aloe',
  'alopevira soap...',
  20);

  -- INSERT INTO soaps(`name`, `description`, `price`) values ( 'aloe-post-api', 'Aloeviera soap....', '5' )

-- INSERT INTO soaps(`name`, `description`, `price`) values (\'aloe-post-api\',  \'Aloeviera soap....\',  \'5\'')
-- Step-4 select data from table
  SELECT * FROM vatsalya.soaps;
  -- with where clause...
  SELECT * FROM vatsalya.soaps where name='Aloevira...';

-- Step-5 UPDATE data in  table
  UPDATE soaps set name='Aloevira...';
