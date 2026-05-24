import dotenv from "dotenv";
import { Lapyme } from "lapyme";

dotenv.config();

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

async function main() {
  const warehouses = await lapyme.warehouses.list({ limit: 1 });

  console.log({
    requestId: warehouses.result.requestId,
    warehouses: warehouses.result.data,
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
