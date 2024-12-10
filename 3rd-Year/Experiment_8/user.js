const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"; const dbName = "userDB";
const collectionName = "users";

async function aggregateUserData() { const client = new MongoClient(uri); try {
await client.connect(); console.log("Connected to MongoDB"); const db = client.db(dbName);
const	collection	= db.collection(collectionName);
const pipeline = [
{
$group: {
_id: "$city",
averageAge: { $avg: "$age" }, userCount: { $sum: 1 }
}
},
{
$sort: { averageAge: -1 }
}
];
const	result	=	await collection.aggregate(pipeline).toArray();
console.log("Aggregation Result:"); console.log(result);
} catch (error) {
console.error("Error	performing aggregation:", error);
} finally {
await client.close();
}
}
aggregateUserData();
