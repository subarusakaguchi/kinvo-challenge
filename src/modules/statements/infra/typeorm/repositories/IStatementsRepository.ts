import { ICreateStatementDTO } from "../../../dtos/ICreateStatementDTO";
import { IFindStatementsDTO } from "../../../dtos/IFindStatementsDTO";
import { Statement } from "../entities/Statement";

interface IStatementsRepository {
  create(data: ICreateStatementDTO): Promise<Statement>;
  list(data: IFindStatementsDTO): Promise<Statement[]>;
}

export { IStatementsRepository };
