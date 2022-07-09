import {
  Statement,
  STATEMENT_TYPE,
} from "../../infra/typeorm/entities/Statement";
import { StatementsRepositoryInMemory } from "../../infra/typeorm/repositories/In-memory/StatementsRepositoryInMemory";
import { CreateStatementUseCase } from "./CreateStatementUseCase";

let statementsRepository: StatementsRepositoryInMemory;
let createStatementUseCase: CreateStatementUseCase;

describe("Create Statement", () => {
  beforeEach(() => {
    statementsRepository = new StatementsRepositoryInMemory();
    createStatementUseCase = new CreateStatementUseCase(statementsRepository);
  });
  it("Should be able to create a new income type statement", async () => {
    const createdStatement = await createStatementUseCase.execute({
      amount: 100.0,
      description: "Test description",
      type: STATEMENT_TYPE.INCOME,
    });

    expect(createdStatement).toHaveProperty("id");
    expect(createdStatement.type).toEqual("income");
    expect(createdStatement).toBeInstanceOf(Statement);
  });
  it("Should be able to create a new expense type statement", async () => {
    const createdStatement = await createStatementUseCase.execute({
      amount: 100.0,
      description: "Test description",
      type: STATEMENT_TYPE.EXPENSE,
    });

    expect(createdStatement).toHaveProperty("id");
    expect(createdStatement.type).toEqual("expense");
    expect(createdStatement).toBeInstanceOf(Statement);
  });
});
