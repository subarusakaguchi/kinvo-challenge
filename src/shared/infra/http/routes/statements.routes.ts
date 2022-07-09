import Router from "express";

import { CreateStatementController } from "../../../../modules/statements/useCases/createStatement/CreateStatementController";

const statementsRoutes = Router();

const createStatementController = new CreateStatementController();

statementsRoutes.post("/income", createStatementController.handle);
statementsRoutes.post("/expense", createStatementController.handle);

export { statementsRoutes };
