import { Document, ObjectId } from "mongoose";

interface IBirthData {
    country: string,
    city: string
}

interface IDraftDetails {
    year: number,
    round: number,
    pickInRound: number 
}

interface IPhotoDetails {
    teamLogo: string,
    headShotUrl: string,
    imageUrl: string
}

interface IPlayerDetails {
    playerName: string,
    playerNumber: number,
    position: string,
    age: number,
    height: number,
    weight: number,
}

export interface IPlayer extends Document {
    playerId: string,
    playerDetails: IPlayerDetails,
    birthInformation: IBirthData,
    historicalData: IDraftDetails,
    photoDetails: IPhotoDetails,
    playerStats: ObjectId
}