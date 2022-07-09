import { STATEMENT_TYPE } from "../infra/typeorm/entities/Statement";

interface ICreateStatementDTO {
  amount: number;
  description: string;
  type: STATEMENT_TYPE;
}

export { ICreateStatementDTO };
