SET SERVEROUTPUT ON;

/* Dropping database objects */
DROP TYPE AddressType FORCE;
DROP TYPE LocationType FORCE;
DROP TYPE PassengerType FORCE;
DROP TYPE DriverType FORCE;
DROP TYPE RideType FORCE;
DROP TYPE PaymentType FORCE;
DROP TYPE DebitCard FORCE;
DROP TYPE EFT FORCE;
DROP TYPE VehicleType FORCE;

DROP TABLE passenger CASCADE CONSTRAINTS;
DROP TABLE driver CASCADE CONSTRAINTS;
DROP TABLE vehicle CASCADE CONSTRAINTS;
DROP TABLE ride CASCADE CONSTRAINTS;

/* Creating user-defined types */


/* Address Type */
CREATE TYPE AddressType AS OBJECT 
(
    street VARCHAR2(50),
    city VARCHAR2(20)
);
/

/* Vehicle Type */
CREATE TYPE VehicleType AS OBJECT 
(
    vehicle_id NUMBER(5),
    make VARCHAR2(20),
    model VARCHAR2(20),
    year NUMBER(4),
    license_plate_no VARCHAR2(15)
);
/

/* Driver Type */
CREATE TYPE DriverType AS OBJECT
(
    driver_id NUMBER(5),
    name VARCHAR2(50),
    address AddressType,
    email VARCHAR2(30),
    phone VARCHAR2(10),
    driver_license_no NUMBER(6),
    vehicle_id NUMBER(5)
);
/

/* Passenger type */
CREATE TYPE PassengerType AS OBJECT
(
    passenger_id NUMBER(5),
    name VARCHAR2(50),
    address AddressType,
    email VARCHAR2(30),
    phone VARCHAR2(10)
);
/

/* Location Type */
CREATE TYPE LocationType AS OBJECT
(
    location_name VARCHAR2(50),
    address AddressType,
    latitude FLOAT,
    longitude FLOAT
);
/

/* Payment Type */
CREATE TYPE PaymentType AS OBJECT 
(
    payment_id NUMBER(6),
    payment_time TIMESTAMP(2),
    amount NUMBER
) NOT FINAL;
/

/* Debit Card sub-type */
CREATE TYPE DebitCard UNDER PaymentType
(
    card_no VARCHAR2(20),
    cardholder_name VARCHAR2(50),
    expiration_date DATE,
    CVV NUMBER(3)
);
/

/* Electronic Fund Transfer (EFT) sub-type */
CREATE TYPE EFT UNDER PaymentType
(
    account_number VARCHAR2(12),
    account_owner VARCHAR2(50)
);
/

/* Ride Type */
CREATE TYPE RideType AS OBJECT
(
    ride_id NUMBER(6),
    driver_id NUMBER(5),
    passenger_id NUMBER(5),
    pickup_location LocationType,
    dropoff_location LocationType,
    pickup_time TIMESTAMP(2),
    dropoff_time TIMESTAMP(2),
    payment PaymentType,
    passenger_rating NUMBER(1),
    MEMBER FUNCTION calculate_ride_duration RETURN INTERVAL DAY TO SECOND
);
/

CREATE OR REPLACE TYPE BODY RideType AS
    MEMBER FUNCTION calculate_ride_duration RETURN INTERVAL DAY TO SECOND IS
    BEGIN
        RETURN dropoff_time - pickup_time;
    END;
END;
/

/* Creating Tables */

/* Passenger Table */
CREATE TABLE passenger OF PassengerType
(
    passenger_id PRIMARY KEY
);
/

/* Vehicle Table */
CREATE TABLE vehicle OF VehicleType
(
    vehicle_id PRIMARY KEY
);
/

/* Driver Table */
CREATE TABLE driver OF DriverType
(
    driver_id PRIMARY KEY,
    driver_license_no UNIQUE,
    vehicle_id REFERENCES vehicle(vehicle_id)
);
/

/* Ride Table */
CREATE TABLE ride OF RideType
(
    ride_id PRIMARY KEY,
    driver_id REFERENCES driver(driver_id),
    passenger_id REFERENCES passenger(passenger_id)
);
/

/* calculate_total_earnings() Stored Function */
CREATE OR REPLACE FUNCTION calculate_total_earnings (driver_no driver.driver_id%TYPE) RETURN NUMBER IS
    earnings NUMBER;
BEGIN
    SELECT SUM(r.payment.amount) AS amount
    INTO earnings
    FROM driver d, ride r
    WHERE d.driver_id = r.driver_id AND d.driver_id = driver_no
    GROUP BY d.driver_id;
    RETURN earnings;
END;
/

/* Inserting Data */
   
/* Inserting Vehicle Data */
INSERT INTO vehicle
VALUES (4001, 'Audi', 'A4', 2015, 'B 234 BBR');

INSERT INTO vehicle
VALUES (4002, 'Honda', 'Civic', 2013, 'B 566 AUZ');

INSERT INTO vehicle
VALUES (4003, 'BMW', 'M4', 2015, 'B 900 BEA');

INSERT INTO vehicle
VALUES (4004, 'Volkswagen', 'Golf GTI', 2014, 'B 789 BAV');

/* Inserting Driver Data */
INSERT INTO driver
VALUES (1001, 'John Doe', AddressType('Block 10', 'Francistown'), 'johndoe@example.com', '71234567', 123654, 4001);

INSERT INTO driver
VALUES (1002, 'Mark Jackson', AddressType('Selepa', 'Francistown'), 'mjackson@example.com', '72345678', 987608, 4002);

INSERT INTO driver
VALUES (1003, 'Susan Johnson', AddressType('Block 8', 'Gaborone'), 'sjohnson@example.com', '75098856', 566345, 4003);

INSERT INTO driver
VALUES (1004, 'Andrew Button', AddressType('Tlokweng', 'Gaborone'), 'abutton@example.com', '74755423', 345229, 4004);

/* Inserting Passenger Data */
INSERT INTO passenger 
VALUES (3001, 'Lee Jones', AddressType('Extension', 'Francistown'), 'ljones@example.com', '77654458');

INSERT INTO passenger 
VALUES (3002, 'Daniel James', AddressType('Block 4', 'Francistown'), 'djames@example.com', '73144662');

INSERT INTO passenger 
VALUES (3003, 'Alice Smith', AddressType('Block 10', 'Gaborone'), 'asmith@example.com', '72887635');

INSERT INTO passenger 
VALUES (3004, 'Pearl Adams', AddressType('Block 8', 'Gaborone'), 'padams@example.com', '71005612');

/* Inserting Ride Data */
INSERT INTO ride
VALUES (2001, 1001, 3001, LocationType('Toro Junction', AddressType('Block 10', 'Francistown'), 21.1661, 27.5144),
        LocationType('Botswana Accountancy College', AddressType('Minestone', 'Francistown'), 21.1661, 27.5144),
        '12-FEB-2024:12:50:40.00', '12-FEB-2024:13:02:20.00', EFT(5001, '12-FEB-2024:13:04:20.00', 20, 644421359902, 'Lee Jones'),
        4);

INSERT INTO ride
VALUES (2002, 1001, 3002, LocationType('Home', AddressType('Block 4', 'Francistown'), 21.1661, 27.5144),
        LocationType('Nyangabwe Hospital', AddressType('Extension', 'Francistown'), 21.1661, 27.5144),
        '12-FEB-2024:15:30:20.00', '12-FEB-2024:15:45:10.00', 
        DebitCard(5002, '12-FEB-2024:15:47:10.00', 15, '9867-1242-4356-2544', 'Daniel James', '31-AUG-2026', 872),
        3);

INSERT INTO ride
VALUES (2003, 1002, 3001, LocationType('Galo Mall', AddressType('Minestone', 'Francistown'), 21.1661, 27.5144),
        LocationType('Francistown Technical College', AddressType('Gerald', 'Francistown'), 21.1661, 27.5144),
        '14-FEB-2024:09:10:20.00', '14-FEB-2024:09:45:10.00', 
        EFT(5003, '14-FEB-2024:15:47:10.00', 35, 644421359902, 'Lee Jones'),
        4);

INSERT INTO ride
VALUES (2004, 1002, 3002, LocationType('Church', AddressType('Phase 5', 'Francistown'), 21.1661, 27.5144),
        LocationType('Sunshine Plaza', AddressType('Satellite', 'Francistown'), 21.1661, 27.5144),
        '14-FEB-2024:14:20:20.00', '14-FEB-2024:14:50:10.00', 
        DebitCard(5004, '14-FEB-2024:14:52:10.00', 30, '9867-1242-4356-2544', 'Daniel James', '31-AUG-2026', 872),
        3);

INSERT INTO ride
VALUES (2005, 1004, 3003, LocationType('Home', AddressType('Block 10', 'Gaborone'), 24.6580, 25.9077),
        LocationType('Game City', AddressType('Gaborone West', 'Gaborone'), 24.6580, 25.9077),
        '12-FEB-2024:11:05:20.00', '12-FEB-2024:11:35:10.00', 
        EFT(5005, '12-FEB-2024:11:37:10.00', 30, 673392438573, 'Alice Smith'),
        5);

INSERT INTO ride
VALUES (2006, 1004, 3004, LocationType('University of Botswana', AddressType('Notwane Road', 'Gaborone'), 24.6580, 25.9077),
        LocationType('The Fields Mall', AddressType('Central Business District', 'Gaborone'), 24.6580, 25.9077),
        '12-FEB-2024:16:30:20.00', '12-FEB-2024:17:15:10.00', 
        DebitCard(5006, '12-FEB-2024:17:17:10.00', 35, '2345-8477-9764-2321', 'Pearl Adams', '30-NOV-2027', 456),
        3);

INSERT INTO ride
VALUES (2007, 1003, 3003, LocationType('Princess Marina Hospital', AddressType('Notwane Road', 'Gaborone'), 24.6580, 25.9077),
        LocationType('Home', AddressType('Block 10', 'Gaborone'), 24.6580, 25.9077),
        '14-FEB-2024:13:20:20.00', '14-FEB-2024:13:55:10.00', 
        EFT(5007, '14-FEB-2024:13:58:10.00', 40, 673392438573, 'Alice Smith'),
        4);

INSERT INTO ride
VALUES (2008, 1003, 3004, LocationType('Riverwalk Mall', AddressType('Tlokweng Road', 'Gaborone'), 24.6580, 25.9077),
        LocationType('Sir Seretse Khama International Airport', AddressType('Airport Road', 'Gaborone'), 24.6580, 25.9077),
        '14-FEB-2024:16:15:20.00', '14-FEB-2024:16:55:10.00', 
        DebitCard(5006, '14-FEB-2024:16:58:10.00', 40, '2345-8477-9764-2321', 'Pearl Adams', '30-NOV-2027', 456),
        4);

/* Queries */

/* Task 5 (a) */

SELECT r.ride_id, p.name AS passenger_name, d.name AS driver_name, v.make || ' ' || v.model AS vehicle_name
FROM ride r
INNER JOIN passenger p ON r.passenger_id = p.passenger_id
LEFT JOIN driver d ON r.driver_id = d.driver_id
RIGHT JOIN vehicle v ON d.vehicle_id = v.vehicle_id
WHERE r.pickup_time BETWEEN TO_TIMESTAMP('14-FEB-2024:00:00:00.00', 'DD-MON-YYYY:HH24:MI:SS.FF') AND TO_TIMESTAMP('14-FEB-2024:23:59:59.99', 'DD-MON-YYYY:HH24:MI:SS.FF')
FETCH FIRST 3 ROWS ONLY;
