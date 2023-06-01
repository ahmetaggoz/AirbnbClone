const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ahmetaggoz1388:Yasam1388*@ilkcluster.64jkf9z.mongodb.net/"

const client = new MongoClient(uri)
const database = client.db('sample_airbnb')
const listings = database.collection('listingsAndReviews')
const regions = database.collection('regions')

module.exports = {listings, regions}