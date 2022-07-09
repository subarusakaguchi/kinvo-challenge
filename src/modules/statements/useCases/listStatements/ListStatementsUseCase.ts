import { Dayjs } from "dayjs";
import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { IStatementsRepository } from "../../infra/typeorm/repositories/IStatementsRepository";

const numberOfItensOptions = [5, 10, 15, 20, 25, 30];

interface IRequest {
  date: Dayjs;
  by: "start_date" | "final_date";
  itensPerPageType: number;
  pageNumber: number;
}

@injectable()
class ListStatementsUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepository: IStatementsRepository // @inject("DayjsDatePovider") // private dateProvider: IDateProvider
  ) {}
  async execute({ date, by, itensPerPageType, pageNumber }: IRequest) {
    const statements = await this.statementsRepository.list({
      date,
      by,
    });

    const initIndex =
      pageNumber * numberOfItensOptions[itensPerPageType] -
      numberOfItensOptions[itensPerPageType];

    const finalIndex = initIndex + numberOfItensOptions[itensPerPageType];

    const statementsReturn = statements.slice(initIndex, finalIndex);

    return statementsReturn;
  }
}

export { ListStatementsUseCase };
