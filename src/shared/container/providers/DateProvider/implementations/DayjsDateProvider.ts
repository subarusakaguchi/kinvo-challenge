import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider, IManipulateDaysDTO } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  dateNow(): Date {
    console.log(dayjs().toDate());
    return dayjs().toDate();
  }

  manipulateDays({ days, type }: IManipulateDaysDTO): Date {
    if (type === "add") {
      return dayjs().add(days, "days").toDate();
    }

    return dayjs().subtract(days, "days").toDate();
  }
}

export { DayjsDateProvider };
