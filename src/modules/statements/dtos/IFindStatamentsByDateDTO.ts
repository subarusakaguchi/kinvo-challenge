interface IFindStatementsByDateDTO {
  date: Date;
  by: "start_date" | "final_date";
}

export { IFindStatementsByDateDTO };
