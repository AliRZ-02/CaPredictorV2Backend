import { Router } from "express";

import { getPlayerById } from "./../controllers/players/index";

const router: Router = Router();

router.get("/player/:playerId", getPlayerById);

export default router;