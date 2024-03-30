import { Request, Response } from "express";

import Player from "../../models/Player";
import { statsModel } from "../../models/PlayerStats";
import { IPlayer } from "../../types/Player";
import { IGoalieStatsData,ISkaterStatsData } from "../../types/PlayerStats";

export const getAllPlayers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const allPlayers: IPlayer[] | null = await Player.find({});
        res.status(200).json(allPlayers.map(
            (val) => {
                return {
                    name: val?.playerDetails?.playerName,
                    playerId: val?.playerId.toString()
                };
            }
        ));
    } catch (error) {
        res.status(400).json({ error: `Error ocurred for /players/:playerId` });
    }
};

export const getPlayerById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const playerId: number = parseInt(req.params.playerId);
        const playerData: IPlayer | null = await Player.findOne(
            { playerId: playerId },
            { _id: 0 }
        ).lean();
        const playerStatsData: ISkaterStatsData | IGoalieStatsData | null = await statsModel.findOne(
            { playerId: playerId }, 
            { _id: 0 }
        ).lean();

        if (playerData === null) {
            res.status(404).json({
                error: `No player found with playerId ${playerId}`,
            });
        } else {
            res.status(200).json({
                playerObject: playerData,
                playerStats: playerStatsData,
            });
        }
    } catch (error) {
        res.status(400).json({ error: `Error ocurred for /players/:playerId` });
    }
};
