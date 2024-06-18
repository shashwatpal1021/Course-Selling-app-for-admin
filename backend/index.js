const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/admin", adminRouter)
app.use("/user", userRouter)

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://shashwat:shashwatpal@cluster0.raimqqs.mongodb.net/courses')
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

connectDB()
    .then(() => {
        app.listen(3000 || 8000, () => {
            console.log(`⚙️ Server is running at port : ${3000}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
