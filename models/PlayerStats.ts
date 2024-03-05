import { model,Schema } from "mongoose";

const statsOptions = {
    discriminatorKey: 'position'
};

const statsSchema: Schema = new Schema (
    {
        gamesPlayed: {
            type: Number,
            required: true,
        }
    },
    statsOptions
);

const skaterStatsSchema: Schema = new Schema({
    goalsPer60: {
        type: Number,
        required: true,
    },

    assistsPer60: {
        type: Number,
        required: true,
    },

    PlusMinusPer60: {
        type: Number,
        required: true,
    },

    PenaltyMinutesPer60: {
        type: Number,
        required: true,
    },

    ShotsPer60: {
        type: Number,
        required: true,
    },

    ShootingPercentage: {
        type: Number,
        required: true,
    },

    PowerPlayPer60: {
        type: Number,
        required: true,
    },

    ShortHandedPer60: {
        type: Number,
        required: true,
    },

    EvenStrengthPer60: {
        type: Number,
        required: true,
    },

    FaceOffPercentage: {
        type: Number,
        required: true,
    },

    TimeOnIce: {
        type: Number,
        required: true,
    },
});

const goalieStatsSchema: Schema = new Schema({
    goalsAgainstAverage: {
        type: Number,
        required: true,
    },

    savePercentage: {
        type: Number,
        required: true,
    },

    winPercentage: {
        type: Number,
        required: true,
    },
});

export const statsModel = model('stats', statsSchema);

export const SkaterStatsModel = statsModel.discriminator('SkaterStats', skaterStatsSchema);
export const GoalieStatsModel = statsModel.discriminator("GoalieStats", goalieStatsSchema);
