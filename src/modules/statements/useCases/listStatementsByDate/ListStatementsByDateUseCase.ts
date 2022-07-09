import { IStatementsRepository } from "../../infra/typeorm/repositories/IStatementsRepository";

interface IRequest {
  date: Date;
  type: "start_date" | "final_date";
}

class ListStatementsByDateUseCase {
  constructor(private statementsRepository: IStatementsRepository) {}
  async execute({ date, type }: IRequest) {
    const statements = await this.statementsRepository.findByDate({
      date,
      by: type,
    });

    return statements;
  }
}

export { ListStatementsByDateUseCase };
