import { Request, Response } from "express";

import { IGoalieStatsData, ISkaterStatsData } from "../../types/PlayerStats";
import Player from "./../../models/Player";
import { GoalieStatsModel, SkaterStatsModel } from "./../../models/PlayerStats";
import { IPlayer } from "./../../types/Player";

export const getPlayerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const playerId: string = req.params.playerId;
        const playerData: IPlayer[] | null = await Player.findOne({"playerId": playerId}, {"_id": 0});

        if (playerData === null) {
            res.status(404).json({error: `No player found with playerId ${playerId}`});
        } else {
            const { playerStats, ...playerObject } = playerData[0];
            const playerPosition = playerObject.playerDetails?.position;
            const playerStatsArr: ISkaterStatsData[] | IGoalieStatsData[] | null = playerPosition === "G"
                ? await GoalieStatsModel.findById(playerStats)
                : await SkaterStatsModel.findById(playerStats);
            const playerStatsObject = playerStatsArr === null
                ? null
                : playerStatsArr[0];

            res.status(200).json({
                playerObject,
                playerStats: playerStatsObject
            });
        }
    } catch (error) {
        res.status(400).json({error: `Error ocurred for /players/:playerId`});
    }
};