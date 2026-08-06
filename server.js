const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const Tier = require('./models/tier.model.js');
const User = require('./models/user.model.js');
const tierroutes = require('./routes/tier.routes.js');
const userroutes = require('./routes/user.routes.js');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/tiers', tierroutes);
app.use('/users', userroutes);

//API 1 Incomplete
// app.post('/tiers', async (req, res) => {
//     try {
//         const tier = await Tier.create(req.body);
//         res.status(200).json(tier);
//     }
//     catch(error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
});