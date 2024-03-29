import { model, Schema } from "mongoose";

import { IPlayer } from "../types/Player";

const birthDataSchema: Schema = new Schema({
    country: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },
});

const draftDetailsSchema: Schema = new Schema({
    year: {
        type: Number,
        required: true,
    },

    round: {
        type: Number,
        required: true,
    },

    pickInRound: {
        type: Number,
        required: true,
    },
});

const photoDetailsSchema: Schema = new Schema({
    teamLogo: {
        type: String,
        required: true,
    },

    headShotUrl: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },
});

const playerDetailsSchema: Schema = new Schema({
    playerName: {
        type: String,
        required: true,
    },

    playerNumber: {
        type: Number,
        required: true,
    },

    position: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    height: {
        type: Number,
        required: true,
    },

    weight: {
        type: Number,
        required: true,
    },
});

const playerSchema: Schema = new Schema(
    {
        playerId: {
            type: Number,
            required: true,
            index: true,
            unique: true,
        },

        playerDetails: {
            type: playerDetailsSchema,
            required: true,
        },

        birthInformation: {
            type: birthDataSchema,
            required: true,
        },

        historicalData: {
            type: draftDetailsSchema,
            required: false,
        },

        photoDetails: {
            type: photoDetailsSchema,
            required: false,
        },

    },
    { timestamps: true }
);

export default model<IPlayer>("Player", playerSchema);
