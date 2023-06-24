import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "personnal-management-system",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"))
    .catch((err) => console.log(`DB connection error: ${err}`));
};

export default conn;
