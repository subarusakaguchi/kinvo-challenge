import {
  getRepository,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from "typeorm";

import { ICreateStatementDTO } from "../../../../dtos/ICreateStatementDTO";
import { IFindStatementsDTO } from "../../../../dtos/IFindStatementsDTO";
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

  async list({ date, by }: IFindStatementsDTO): Promise<Statement[]> {
    const statements = await this.statements.find({
      where: {
        created_at:
          by === "start_date" ? MoreThanOrEqual(date) : LessThanOrEqual(date),
      },
      order: {
        created_at: by === "start_date" ? "ASC" : "DESC",
      },
    });

    return statements;
  }
}

export { StatementsRepository };
