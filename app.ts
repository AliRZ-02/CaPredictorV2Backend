import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";

import CaPredictorRoutes from "./routes";
import {
    MONGO_APP,
    MONGO_PASSWORD,
    MONGO_URI,
    MONGO_USERNAME,
    PORT,
} from "./settings";

const app: Express = express();

app.use(cors());
app.use(CaPredictorRoutes);

const uri: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URI}/?retryWrites=true&w=majority&appName=${MONGO_APP}`;

mongoose
    .connect(uri)
    .then(() => app.listen(PORT))
    .catch((error) => {
        throw error;
    });
