SET SERVEROUTPUT ON;

/* Dropping database objects */
DROP TYPE AddressType FORCE;
DROP TYPE LocationType FORCE;
DROP TYPE PassengerType FORCE;
DROP TYPE DriverType FORCE;
DROP TYPE RideType FORCE;
DROP TYPE PaymentType FORCE;
DROP TYPE CreditCard FORCE;
DROP TYPE DebitCard FORCE;
DROP TYPE EFT FORCE;
DROP TYPE VehicleType FORCE;

DROP TABLE passenger CASCADE CONSTRAINTS;
DROP TABLE driver CASCADE CONSTRAINTS;
DROP TABLE vehicle CASCADE CONSTRAINTS;
DROP TABLE ride CASCADE CONSTRAINTS;
DROP TABLE payment CASCADE CONSTRAINTS;


/* Creating user-defined types */


/* Address Type */
CREATE TYPE AddressType AS OBJECT 
(
    street VARCHAR2(20),
    city VARCHAR2(20)
);
/

/* Vehicle Type */
CREATE TYPE VehicleType AS OBJECT 
(
    vehicle_id NUMBER(5),
    driver_id NUMBER(5),
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
    vehicle_id NUMBER(5),
    MEMBER FUNCTION calculate_total_earnings RETURN NUMBER
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
    location_name VARCHAR2(30),
    address AddressType,
    latitude NUMBER,
    longitude NUMBER
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

/* Credit Card sub-type */
CREATE TYPE CreditCard UNDER PaymentType
(
    card_no VARCHAR2(20),
    cardholder_name VARCHAR2(50),
    expiration_date DATE,
    CVV NUMBER(3)
);
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
    account_number VARCHAR2(20),
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
    status NUMBER(1),
    MEMBER FUNCTION calculate_ride_duration RETURN INTERVAL DAY TO SECOND
);
/

/* Creating Tables */

/* Passenger Table */
CREATE TABLE passenger OF PassengerType
(
    passenger_id PRIMARY KEY
);
/

/* Driver Table */
CREATE TABLE driver OF DriverType
(
    driver_id PRIMARY KEY
);
/

/* Vehicle Table */
CREATE TABLE vehicle OF VehicleType
(
    vehicle_id PRIMARY KEY
);
/

/* Ride Table */
CREATE TABLE ride OF RideType
(
    ride_id PRIMARY KEY
);
/

/* Inserting Data */