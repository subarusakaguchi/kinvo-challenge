import { ICreateStatementDTO } from "../../../../dtos/ICreateStatementDTO";
import { IFindStatementsByDateDTO } from "../../../../dtos/IFindStatamentsByDateDTO";
import { Statement } from "../../entities/Statement";
import { IStatementsRepository } from "../IStatementsRepository";

class StatementsRepositoryInMemory implements IStatementsRepository {
  private repository: Statement[];

  constructor() {
    this.repository = [];
  }

  async create({
    amount,
    description,
    type,
  }: ICreateStatementDTO): Promise<Statement> {
    const newStatement = new Statement();

    Object.assign(newStatement, {
      amount,
      description,
      type,
    });

    this.repository.push(newStatement);

    return newStatement;
  }

  async findByDate({
    date,
    by,
  }: IFindStatementsByDateDTO): Promise<Statement[]> {
    let statements: Statement[];
    if (by === "start_date") {
      statements = this.repository.filter(
        (statement) => statement.created_at >= date
      );
    } else {
      statements = this.repository.filter(
        (statement) => statement.created_at <= date
      );
    }

    return statements;
  }
}

export { StatementsRepositoryInMemory };
