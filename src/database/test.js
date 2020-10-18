const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");
const fakeOrphanages = require("./fakedata.js");

async function test(db) {
  // inserir dados na tableLayout
  // await saveOrphanage(db, fakeOrphanages[0]);
  // await saveOrphanage(db, fakeOrphanages[1]);

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT *  FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orfanato, pelo id
  // const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "1"`);
  // console.log(orphanage);

  // deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
}

Database.then(test);

// PAREI EM 42MIN
