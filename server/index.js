import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://uncanickname:l6MN9bYwy4RTfSZh@nikowhit.9hcuu7n.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.connect(CONNECTION_URL, { 'useFindAndModify': false })