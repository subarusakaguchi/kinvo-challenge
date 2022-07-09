import Router from "express";

import { CreateStatementController } from "../../../../modules/statements/useCases/createStatement/CreateStatementController";
import { ListStatementsController } from "../../../../modules/statements/useCases/listStatements/ListStatementsController";

const statementsRoutes = Router();

const createStatementController = new CreateStatementController();
const listStatementsController = new ListStatementsController();

statementsRoutes.get("/", listStatementsController.handle);
statementsRoutes.post("/income", createStatementController.handle);
statementsRoutes.post("/expense", createStatementController.handle);

export { statementsRoutes };
