// Searching for data in mongo db
//use harryKart

// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
//gte == greater than and equal to
db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gt: 3.5}})
// And operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})//check the and condition

db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] //check the or condition
})

db.items.find({rating: {$gt: 3.5}}, {rating: 1}) //only return rating as rating is defined as 1 and other are automatically defined to 0

// show dbs 
// use harryKart
// show collections

db.items.find()
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})
