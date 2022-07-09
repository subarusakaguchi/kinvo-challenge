import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export enum STATEMENT_TYPE {
  INCOME = "income",
  EXPENSE = "expense",
}

@Entity("statements")
class Statement {
  @PrimaryColumn()
  id?: string;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  type: STATEMENT_TYPE;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Statement };
