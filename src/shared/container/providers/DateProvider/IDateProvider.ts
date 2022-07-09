interface IManipulateDaysDTO {
  days: number;
  type: "add" | "subtract";
}

interface IDateProvider {
  dateNow(): Date;
  manipulateDays(data: IManipulateDaysDTO): Date;
}

export { IDateProvider, IManipulateDaysDTO };
