const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://onlinesurvei:onlinesurvei123@ac-a4nz1xe-shard-00-00.70z6q65.mongodb.net:27017,ac-a4nz1xe-shard-00-01.70z6q65.mongodb.net:27017,ac-a4nz1xe-shard-00-02.70z6q65.mongodb.net:27017/?replicaSet=atlas-wn4rfe-shard-0&ssl=true&authSource=admin`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;