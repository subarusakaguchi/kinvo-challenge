import { ICreateStatementDTO } from "../../../dtos/ICreateStatementDTO";
import { IFindStatementsByDateDTO } from "../../../dtos/IFindStatamentsByDateDTO";
import { Statement } from "../entities/Statement";

interface IStatementsRepository {
  create(data: ICreateStatementDTO): Promise<Statement>;
  findByDate(data: IFindStatementsByDateDTO): Promise<Statement[]>;
}

export { IStatementsRepository };
