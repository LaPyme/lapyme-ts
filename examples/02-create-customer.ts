import dotenv from "dotenv";
import { Lapyme } from "lapyme";

dotenv.config();

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

async function main() {
  const externalCustomerId = "demo-customer-001";

  const customer = await lapyme.customers.create({
    idempotencyKey: `customer:${externalCustomerId}`,
    body: {
      name: "Cliente Demo SDK",
      email: "cliente-sdk@example.com",
      taxId: "20111111112",
      taxIdType: "CUIL/CUIT",
      taxCategory: "final_consumer",
    },
  });

  console.log({
    requestId: customer.result.requestId,
    customer: customer.result.data.customer,
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
