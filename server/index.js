import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import Routes from './routes/route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({extended: true }));
app.use(cors());

app.use('/', Routes);


mongoose.connect(`mongodb+srv://crudapp:crudapp1234@PROJECT 0.2bwuu82.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
    console.log( err, "Error" )
})

app.listen(PORT, () => console.log(`Server is runing successfully on http://localhost:${PORT}`));





// Connection();

// const BASE_URI =` mongodb+srv://crudapp:crud1234@PROJECT 0.2bwuu82.mongodb.net/CRUD APP`;
// const BASE_URI =` mongodb+srv://crudapp:crudapp1234@PROJECT 0.2bwuu82.mongodb.net/?retryWrites=true&w=majority`;

// mongoose
//   .connect(BASE_URI)
//   .then(() => {
//       return console.log("mongoDb Connect")
//   })
//   .catch((err) => console.log(err, "error"))
