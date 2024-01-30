const mongoose = require("mongoose");

async function mongooseLoader() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "pieceoftube" });
    console.log("connected to database");
  } catch (error) {
    console.error(error);
  }
}

module.exports = mongooseLoader;
