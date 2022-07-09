import { getRepository, Repository } from "typeorm";

import { ICreateStatementDTO } from "../../../../dtos/ICreateStatementDTO";
import { IFindStatementsByDateDTO } from "../../../../dtos/IFindStatamentsByDateDTO";
import { Statement } from "../../entities/Statement";
import { IStatementsRepository } from "../IStatementsRepository";

class StatementsRepository implements IStatementsRepository {
  private statements: Repository<Statement>;

  constructor() {
    this.statements = getRepository(Statement);
  }

  async create({
    amount,
    description,
    type,
  }: ICreateStatementDTO): Promise<Statement> {
    const newStatement = this.statements.create({
      amount,
      description,
      type,
    });

    await this.statements.save(newStatement);

    return newStatement;
  }

  async findByDate(data: IFindStatementsByDateDTO): Promise<Statement[]> {
    throw new Error("Method not implemented.");
  }
}

export { StatementsRepository };
