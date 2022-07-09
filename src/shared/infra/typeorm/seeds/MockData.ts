import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const mockDataQt = 30;

  const ids = [];
  const amounts = [];
  const types = [];

  for (let i = 0; i <= mockDataQt; i += 1) {
    ids.push(uuidv4());
    amounts.push((Math.random() * 1000).toFixed(2));
    types.push(
      Math.floor(Math.random() * 100) % 2 === 0 ? "income" : "expense"
    );
  }

  await Promise.all(
    ids.map(async (id, index) => {
      await connection.query(
        `INSERT INTO STATEMENTS(id, amount, description, type, created_at, updated_at) values('${id}', ${amounts[index]}, 'Test', '${types[index]}', 'now()', 'now()')`
      );
    })
  );

  await connection.close();
}

create().then(() => console.log(`Info added`));
