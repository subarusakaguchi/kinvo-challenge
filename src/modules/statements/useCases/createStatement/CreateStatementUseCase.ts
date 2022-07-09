import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import {
  Statement,
  STATEMENT_TYPE,
} from "../../infra/typeorm/entities/Statement";
import { IStatementsRepository } from "../../infra/typeorm/repositories/IStatementsRepository";

interface IRequest {
  amount: number;
  description: string;
  type: STATEMENT_TYPE;
}

@injectable()
class CreateStatementUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepository: IStatementsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}
  async execute({ amount, description, type }: IRequest): Promise<Statement> {
    const dateNow = this.dateProvider.dateNow();
    console.log(dateNow);

    const newStatement = await this.statementsRepository.create({
      amount,
      description,
      type,
    });

    return newStatement;
  }
}

export { CreateStatementUseCase };
