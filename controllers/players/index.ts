import { Request, Response } from "express";

import Player from "../../models/Player";
import { statsModel } from "../../models/PlayerStats";
import { IPlayer } from "../../types/Player";

export const getPlayerById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const playerId: string = req.params.playerId;
        const playerData: IPlayer | null = await Player.findOne(
            { playerId: playerId },
            { _id: 0 }
        ).lean();

        if (playerData === null) {
            res.status(404).json({
                error: `No player found with playerId ${playerId}`,
            });
        } else {
            const { playerStats, ...playerObject } = playerData;
            const playerStatsObject = await statsModel
                .findOne({ _id: playerStats }, { _id: 0 })
                .lean();

            res.status(200).json({
                playerObject,
                playerStats: playerStatsObject,
            });
        }
    } catch (error) {
        res.status(400).json({ error: `Error ocurred for /players/:playerId` });
    }
};
