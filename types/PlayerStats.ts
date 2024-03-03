import { Document } from "mongoose";

interface IStatsData extends Document {
    gamesPlayed: number
}

export interface ISkaterStatsData extends IStatsData {
    goalsPer60: number,
    assistsPer60: number,
    PlusMinusPer60: number,
    PenaltyMinutesPer60: number,
    ShotsPer60: number,
    ShootingPercentage: number,
    PowerPlayPer60: number,
    ShortHandedPer60: number,
    EvenStrengthPer60: number,
    FaceOffPercentage: number,
    TimeOnIce: number
}

export interface IGoalieStatsData extends IStatsData {
    goalsAgainstAverage: number,
    savePercentage: number,
    winPercentage: number
}
