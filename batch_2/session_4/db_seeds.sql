
-- Step 1- Creat schema/ create database
-- Step-2 create table
CREATE TABLE `vatsalya`.`soaps` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `description` VARCHAR(505) NULL,
  `price` INT NULL,
  PRIMARY KEY (`id`));

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

-- Step-4 select data from table
  SELECT * FROM vatsalya.soaps;
  -- with where clause...
  SELECT * FROM vatsalya.soaps where name='Aloevira...';

-- Step-5 UPDATE data in  table
  UPDATE soaps set name='Aloevira...';
