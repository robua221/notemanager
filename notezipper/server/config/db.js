//Connection file to mongo db
const mongoose = require("mongoose");

const connectDB = async () => {
  // const MONGO_URI =
  //   "mongodb+srv://robin:12345@cluster0.wog44.mongodb.net/NoteBro?retryWrites=true&w=majority";
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
