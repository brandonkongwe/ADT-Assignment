use abc_driver;


// create 'vehicle' collection 
db.createCollection("vehicle");

// inserting data into the 'vehicle' collection 
db.vehicle.insertOne({
    vehicle_id: 4001,
    make: "Audi",
    model: "A4",
    year: 2015,
    license_plate_no: "B 234 BBR"
});

db.vehicle.insertOne({
    vehicle_id: 4002,
    make: "Honda",
    model: "Civic",
    year: 2013,
    license_plate_no: "B 566 AUZ"
});

db.vehicle.insertOne({
    vehicle_id: 4003,
    make: "BMW",
    model: "M4",
    year: 2015,
    license_plate_no: "B 900 BEA"
});

db.vehicle.insertOne({
    vehicle_id: 4004,
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2014,
    license_plate_no: "B 789 BAV"
});

db.vehicle.find();

// create 'driver' collection
db.createCollection("driver");

// inserting data into the 'driver' collection 
db.driver.insertOne({
    driver_id: 1001, 
    name: "John Doe", 
    address: {
        street: "Block 10",
        city: "Francistown"
    }, 
    email: "johndoe@example.com", 
    phone: "71234567", 
    driver_license_no: 123654, 
    vehicle_id: 4001, 
});

db.driver.insertOne({
    driver_id: 1002,
    name: "Mark Jackson",
    address: {
        street: "Selepa",
        city: "Francistown"
    },
    email: "mjackson@example.com",
    phone: "72345678", 
    driver_license_no: 987608, 
    vehicle_id: 4002
});

db.driver.insertOne({
    driver_id: 1003,
    name: "Susan Johnson",
    address: {
        street: "Block 8",
        city: "Gaborone"
    },
    email: "sjohnson@example.com",
    phone: "75098856", 
    driver_license_no: 566345, 
    vehicle_id: 4003
});

db.driver.insertOne({
    driver_id: 1004,
    name: "Andrew Button",
    address: {
        street: "Tlokweng",
        city: "Gaborone"
    },
    email: "abutton@example.com",
    phone: "74755423", 
    driver_license_no: 345229, 
    vehicle_id: 4004
});

db.driver.find();


// create 'passenger' collection
db.createCollection("passenger");

// inserting data into the 'passenger' collection 
db.passenger.insertOne({
    passenger_id: 3001, 
    name: "Lee Jones",
    address: {
        street: "Extension",
        city: "Francistown"
    },
    email: "ljones@example.com",
    phone: "77654458"
});

db.passenger.insertOne({
    passenger_id: 3002,
    name: "Daniel James",
    address: {
        street: "Block 4",
        city: "Francistown"
    },
    email: "djames@example.com",
    phone: "73144662"
});

db.passenger.insertOne({
    passenger_id: 3003,
    name: "Alice Smith",
    address: {
        street: "Block 10",
        city: "Gaborone"
    },
    email: "asmith@example.com",
    phone: "72887635"
});

db.passenger.insertOne({
    passenger_id: 3004,
    name: "Pearl Adams",
    address: {
        street: "Block 8",
        city: "Gaborone"
    },
    email: "padams@example.com",
    phone: "71005612"
});

db.passenger.find();

// create 'ride' collection
db.createCollection("ride");

// inserting data into the 'ride' collection 
db.ride.insertOne({
    ride_id: 2001,
    driver_id: 1001,
    passenger_id: 3001,
    pickup_location: {
        location_name: "Toro Junction",
        address: {
            street: "Block 10",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    dropoff_location: {
        location_name: "Botswana Accountancy College",
        address: {
            street: "Minestone",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    pickup_time: ISODate("2024-02-12T12:50:40Z"),
    dropoff_time: ISODate("2024-02-12T13:02:20Z"), 
    payment: {
        type: "EFT",
        payment_id: 5001, 
        payment_time: ISODate("2024-02-12T13:04:20Z"), 
        amount: 20,
        account_number: "644421359902", 
        account_owner: "Lee Jones"
    },
    passenger_rating: 4
});

db.ride.insertOne({
    ride_id: 2002,
    driver_id: 1001,
    passenger_id: 3002,
    pickup_location: {
        location_name: "Home",
        address: {
            street: "Block 4",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    dropoff_location: {
        location_name: "Nyangabwe Hospital",
        address: {
            street: "Extension",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    pickup_time: ISODate("2024-02-12T15:30:20Z"),
    dropoff_time: ISODate("2024-02-12T15:45:10Z"),
    payment: {
        type: "Debit Card",
        payment_id: 5002,
        payment_time: ISODate("2024-02-12T15:47:10Z"),
        amount: 15,
        card_no: "9867-1242-4356-2544", 
        cardholder_name: "Daniel James", 
        expiration_date: ISODate("2026-08-31"),
        CVV: 872
    },
    passenger_rating: 3
});

db.ride.insertOne({
    ride_id: 2003,
    driver_id: 1002,
    passenger_id: 3001,
    pickup_location: {
        location_name: "Galo Mall",
        address: {
            street: "Minestone",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    dropoff_location: {
        location_name: "Francistown Technical College",
        address: {
            street: "Gerald",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    pickup_time: ISODate("2024-02-14T09:10:20Z"),
    dropoff_time: ISODate("2024-02-14T09:45:10Z"),
    payment: {
        type: "EFT",
        payment_id: 5003,
        payment_time: ISODate("2024-02-14T09:47:10"),
        amount: 35,
        account_number: "644421359902", 
        account_owner: "Lee Jones"
    },
    passenger_rating: 4
});

db.ride.insertOne({
    ride_id: 2004,
    driver_id: 1002,
    passenger_id: 3002,
    pickup_location: {
        location_name: "Church",
        address: {
            street: "Phase 5",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    dropoff_location: {
        location_name: "Sunshine Plaza",
        address: {
            street: "Satellite",
            city: "Francistown"
        },
        latitude: 21.1661, 
        longitude: 27.5144
    },
    pickup_time: ISODate("2024-02-14T14:20:20Z"),
    dropoff_time: ISODate("2024-02-14T14:50:10Z"),
    payment: {
        type: "Debit Card",
        payment_id: 5004,
        payment_time: ISODate("2024-02-14T14:52:10Z"),
        amount: 35,
        card_no: "9867-1242-4356-2544", 
        cardholder_name: "Daniel James", 
        expiration_date: ISODate("2026-08-31"),
        CVV: 872
    },
    passenger_rating: 3
});

db.ride.insertOne({
    ride_id: 2005,
    driver_id: 1004,
    passenger_id: 3003,
    pickup_location: {
        location_name: "Home",
        address: {
            street: "Block 10",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    dropoff_location: {
        location_name: "Game City",
        address: {
            street: "Gaborone West",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    pickup_time: ISODate("2024-02-12T11:05:20Z"),
    dropoff_time: ISODate("2024-02-12T11:35:10Z"),
    payment: {
        type: "EFT",
        payment_id: 5005,
        payment_time: ISODate("2024-02-12T11:37:10Z"),
        amount: 30,
        account_number: "673392438573",
        account_owner: "Alice Smith"
    },
    passenger_rating: 5
});

db.ride.insertOne({
    ride_id: 2006,
    driver_id: 1004,
    passenger_id: 3004,
    pickup_location: {
        location_name: "University of Botswana",
        address: {
            street: "Notwane Road",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    dropoff_location: {
        location_name: "The Fields Mall",
        address: {
            street: "Central Business District",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    pickup_time: ISODate("2024-02-12T16:30:20Z"),
    dropoff_time: ISODate("2024-02-12T17:15:10Z"),
    payment : {
        type: "Debit Card",
        payment_id: 5006,
        payment_time: ISODate("2024-02-12T17:17:10Z"),
        amount: 35,
        card_no: "2345-8477-9764-2321",
        cardholder_name: "Pearl Adams",
        expiration_date: ISODate("2027-11-30"),
        CVV: 456
    },
    passenger_rating: 3
});

db.ride.insertOne({
    ride_id: 2007,
    driver_id: 1003,
    passenger_id: 3003,
    pickup_location: {
        location_name: "Princess Marina Hospital",
        address: {
            street: "Notwane Road",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    dropoff_location: {
        location_name: "Home",
        address: {
            street: "Block 10",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    pickup_time: ISODate("2024-02-14T13:20:20Z"),
    dropoff_time: ISODate("2024-02-14T13:55:10Z"),
    payment: {
        type: "EFT",
        payment_id: 5007,
        payment_time: ISODate("2024-02-14T13:58:10Z"),
        amount: 40,
        account_number: "673392438573",
        account_owner: "Alice Smith"
    },
    passenger_rating: 4
});

db.ride.insertOne({
    ride_id: 2008,
    driver_id: 1003,
    passenger_id: 3004,
    pickup_location: {
        location_name: "Riverwalk Mall",
        address: {
            street: "Tlokweng Road",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    dropoff_location: {
        location_name: "Sir Seretse Khama International Airport",
        address: {
            street: "Airport Road",
            city: "Gaborone"
        },
        latitude: 24.6580,  
        longitude: 25.9077
    },
    pickup_time: ISODate("2024-02-14T16:15:20Z"),
    dropoff_time: ISODate("2024-02-14T16:55:10Z"),
    payment: {
        type: "Debit Card",
        payment_id: 5008,
        payment_time: ISODate("2024-02-14T16:58:10Z"),
        amount: 40,
        card_no: "2345-8477-9764-2321",
        cardholder_name: "Pearl Adams",
        expiration_date: ISODate("2027-11-30"),
        CVV: 456
    },
    passenger_rating: 4
});

db.ride.find();