import { Router } from "express";

import { getAllPlayers,getPlayerById } from "../controllers/players/index";

const router: Router = Router();

router.get("/player/:playerId", getPlayerById);
router.get("/players", getAllPlayers);

export default router;
