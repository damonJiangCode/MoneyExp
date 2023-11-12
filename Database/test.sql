-- DROP TABLE PROVINCE;
-- DROP TABLE eyeColor;
-- DROP TABLE hairColor;

-- CREATE TABLE HAIRCOLOR (
--     id INTEGER PRIMARY KEY,
--     color TEXT
-- );
-- INSERT INTO HAIRCOLOR (color) VALUES
--     ('Auburn'),
--     ('Bald'),
--     ('Black'),
--     ('Blonde'),
--     ('Brown'),
--     ('Dark Brown'),
--     ('Dyed'),
--     ('Gray'),
--     ('Graying'),
--     ('Light Brown'),
--     ('Red'),
--     ('Sandy'),
--     ('UNKNOWN');


-- CREATE TABLE EYECOLOR (
--     id INTEGER PRIMARY KEY,
--     color TEXT
-- );
-- INSERT INTO EYECOLOR (color) VALUES
--     ('Black'),
--     ('Blue'),
--     ('Brown'),
--     ('Green'),
--     ('Grey'),
--     ('Hazel'),
--     ('OTHER');


-- CREATE TABLE PROVINCE (
--     ID INTEGER PRIMARY KEY,
--     provinceCode TEXT,
--     provinceName TEXT
-- );
-- INSERT INTO PROVINCE (provinceCode, provinceName) VALUES
--     ('AB', 'Alberta'),
--     ('BC', 'British Columbia'),
--     ('MB', 'Manitoba'),
--     ('NB', 'New Brunswick'),
--     ('NL', 'Newfoundland and Labrador'),
--     ('NS', 'Nova Scotia'),
--     ('ON', 'Ontario'),
--     ('PE', 'Prince Edward Island'),
--     ('QC', 'Quebec'),
--     ('SK', 'Saskatchewan'),
--     ('NT', 'Northwest Territories'),
--     ('NU', 'Nunavut'),
--     ('YT', 'Yukon');


-- CREATE TABLE CITY (
--     ID INTEGER PRIMARY KEY,
--     cityName TEXT,
--     provinceName TEXT,
--     provinceCode TEXT
-- );



-- CREATE TABLE IDTYPE (
--     ID INTEGER PRIMARY KEY,
--     idType TEXT
-- );
-- INSERT INTO IDTYPE (idType) VALUES
--     ('Birth Certificate'),
--     ('Citizenship'),
--     ('Driver License'),
--     ('Firearms License'),
--     ('Health Card'),
--     ('Passport'),
--     ('SIN'),
--     ('Other');