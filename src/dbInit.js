const mongoose = require('mongoose');

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  const connection = await mongoose.connect(process.env.MONGO_URI, options);
  console.log(`Connected to MongoDB: ${connection.connection.host}`);
};

module.exports = connectDB;
