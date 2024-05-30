use abc_driver;


// dropping collections
db.vehicle.drop();
db.driver.drop();
db.passenger.drop();
db.ride.drop();


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
    pickup_time: new ISODate("2024-02-12T12:50:40Z"),
    dropoff_time: new ISODate("2024-02-12T13:02:20Z"), 
    payment: {
        type: "EFT",
        payment_id: 5001, 
        payment_time: new ISODate("2024-02-12T13:04:20Z"), 
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
    pickup_time: new ISODate("2024-02-12T15:30:20Z"),
    dropoff_time: new ISODate("2024-02-12T15:45:10Z"),
    payment: {
        type: "Debit Card",
        payment_id: 5002,
        payment_time: new ISODate("2024-02-12T15:47:10Z"),
        amount: 15,
        card_no: "9867-1242-4356-2544", 
        cardholder_name: "Daniel James", 
        expiration_date: new ISODate("2026-08-31"),
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
    pickup_time: new ISODate("2024-02-14T09:10:20Z"),
    dropoff_time: new ISODate("2024-02-14T09:45:10Z"),
    payment: {
        type: "EFT",
        payment_id: 5003,
        payment_time: new ISODate("2024-02-14T09:47:10"),
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
    pickup_time: new ISODate("2024-02-14T14:20:20Z"),
    dropoff_time: new ISODate("2024-02-14T14:50:10Z"),
    payment: {
        type: "Debit Card",
        payment_id: 5004,
        payment_time: new ISODate("2024-02-14T14:52:10Z"),
        amount: 35,
        card_no: "9867-1242-4356-2544", 
        cardholder_name: "Daniel James", 
        expiration_date: new ISODate("2026-08-31"),
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
    pickup_time: new ISODate("2024-02-12T11:05:20Z"),
    dropoff_time: new ISODate("2024-02-12T11:35:10Z"),
    payment: {
        type: "EFT",
        payment_id: 5005,
        payment_time: new ISODate("2024-02-12T11:37:10Z"),
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
    pickup_time: new ISODate("2024-02-12T16:30:20Z"),
    dropoff_time: new ISODate("2024-02-12T17:15:10Z"),
    payment : {
        type: "Debit Card",
        payment_id: 5006,
        payment_time: new ISODate("2024-02-12T17:17:10Z"),
        amount: 35,
        card_no: "2345-8477-9764-2321",
        cardholder_name: "Pearl Adams",
        expiration_date: new ISODate("2027-11-30"),
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
    pickup_time: new ISODate("2024-02-14T13:20:20Z"),
    dropoff_time: new ISODate("2024-02-14T13:55:10Z"),
    payment: {
        type: "EFT",
        payment_id: 5007,
        payment_time: new ISODate("2024-02-14T13:58:10Z"),
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
    pickup_time: new ISODate("2024-02-14T16:15:20Z"),
    dropoff_time: new ISODate("2024-02-14T16:55:10Z"),
    payment: {
        type: "Debit Card",
        payment_id: 5008,
        payment_time: new ISODate("2024-02-14T16:58:10Z"),
        amount: 40,
        card_no: "2345-8477-9764-2321",
        cardholder_name: "Pearl Adams",
        expiration_date: new ISODate("2027-11-30"),
        CVV: 456
    },
    passenger_rating: 4
});


// Queries

// Query a: A join of three or more tables and the query must include a restriction on the rows selected
db.ride.aggregate([
   {
        $match: {
            $and: [
                    {"pickup_location.address.city": "Gaborone"}, 
                    {pickup_time: {$gte: ISODate("2024-02-12T00:00:00Z"), $lte: ISODate("2024-02-14T23:59:59Z")}}
                ]
        }
    },
    {
        $lookup: {
            from: "passenger",
            localField: "passenger_id",
            foreignField: "passenger_id",
            as: "passenger_info"
        }
    },
    {
        $unwind: "$passenger_info"
    },
    {
        $lookup: {
            from: "driver",
            localField: "driver_id",
            foreignField: "driver_id",
            as: "driver_info"
        }
    },
    {
        $unwind: {
            path: "$driver_info"
        }
    },
    {
        $lookup: {
            from: "vehicle",
            localField: "driver_info.vehicle_id",
            foreignField: "vehicle_id",
            as: "vehicle_info"
        }
    },
    {
        $unwind: {
            path: "$vehicle_info"
        }
    },
    {
        $project: {
            _id: 0,
            ride_id: 1,
            passenger_name: "$passenger_info.name",
            driver_name: "$driver_info.name",
            pickup_location: "$pickup_location.location_name",
            city: "$pickup_location.address.city",
            vehicle_name: {
                $concat: ["$vehicle_info.make", " ", "$vehicle_info.model"]
            },
            license_plate_no: "$vehicle_info.license_plate_no"
        }
    }
]);

// Query b: A query which uses one (or more) of the UNION, DIFFERENCE or INTERSECT operators
db.driver.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            driver_license_no: "$driver_license_no",
            city: "$address.city",
        }
    },
    {
        $unionWith: {
            coll: "passenger",
            pipeline: [
                {
                    $project: {
                        _id: 0, 
                        name: 1, 
                        driver_license_no: {$literal: null}, 
                        city: "$address.city"}
                    }
            ]
        }
    },
    {
        $sort: {
            name: 1
        }
    }
]);

// Query c: A query which requires use of either a nested table or subtypes
db.ride.aggregate([
    {
        $match: {
            "payment.type": "Debit Card"
        }
    },
    {
        $lookup: {
            from: "passenger",
            localField: "passenger_id",
            foreignField: "passenger_id",
            as: "passenger_info"
        }
    },
    {
        $unwind: {
            path: "$passenger_info"
        }
    },
    {
        $project: {
            _id: 0,
            ride_id: 1,
            passenger_id: "$passenger_info.passenger_id",
            passenger_name: "$passenger_info.name",
            card_number: "$payment.card_no",
            amount_paid: "$payment.amount"
        }
    }
]);

// Query d: A query using temporal features 
db.ride.aggregate([
    {
        $addFields: {
            ride_duration: {
                $subtract: ["$dropoff_time", "$pickup_time"]
            }
        }
    },
    {
        $match: {
            ride_duration: {$gt: 30 * 60 * 1000} // 30 minutes in milliseconds
        }
    },
    {
        $project: {
            _id: 0,
            ride_id: 1,
            pickup_location: "$pickup_location.location_name",
            dropoff_location: "$dropoff_location.location_name",
            "ride_duration (minutes)": {
                $divide: ["$ride_duration", 60 * 1000] // convert milliseconds to minutes
            }
        }   
    }
]);

// Query e: A query replicating Oracle SQL OLAP (e.g., ROLLUP, CUBE, PARTITION) features 
db.driver.aggregate([
    {
        $lookup: {
            from: "ride",
            localField: "driver_id",
            foreignField: "driver_id",
            as: "rides"
        }
    },
    {
        $unwind: "$rides"
    },
    {
        $addFields: {
            "rides.ride_duration": {
                $divide: [{ $subtract: ["$rides.dropoff_time", "$rides.pickup_time"]}, 60 * 1000] 
            },
            "rides.ride_earnings": "$rides.payment.amount" 
        }
    },
    {
        $group: {
            _id: "$driver_id",
            driver_name: {$first: "$name"},
            total_earnings: {$sum: "$rides.ride_earnings"},
            number_of_rides: {$sum: 1},
            avg_ride_duration: {$avg: "$rides.ride_duration"},
            lowest_rating: {$min: "$rides.passenger_rating"},
            highest_rating: {$max: "$rides.passenger_rating"}
        }
    },
    {
        $facet: {
            drivers: [
                {$sort: { total_earnings: -1 }},
                {$group: {
                    _id: null,
                    drivers: { $push: "$$ROOT" }
                }
            },
        {
            $unwind: {
                path: "$drivers",
                includeArrayIndex: "earnings_ranking"
            }
        },
        { 
            $project: {
                
                _id: "$drivers._id",
                driver_name: "$drivers.driver_name",
                total_earnings: "$drivers.total_earnings",
                earnings_ranking: { $add: ["$earnings_ranking", 1] },
                number_of_rides: "$drivers.number_of_rides",
                avg_ride_duration: "$drivers.avg_ride_duration",
                lowest_rating: "$drivers.lowest_rating",
                highest_rating: "$drivers.highest_rating"
            }
        }
      ]}
    },
    {
        $unwind: "$drivers"
    },
    {
        $project: {
            _id: 0,
            driver_name: "$drivers.driver_name",
            total_earnings: "$drivers.total_earnings",
            earnings_ranking: "$drivers.earnings_ranking",
            number_of_rides: "$drivers.number_of_rides",
            "average_ride_duration (minutes)": "$drivers.avg_ride_duration",
            lowest_rating: "$drivers.lowest_rating",
            highest_rating: "$drivers.highest_rating"
        }
    }
]);
