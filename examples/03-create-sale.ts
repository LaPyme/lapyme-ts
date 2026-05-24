import dotenv from "dotenv";
import { Lapyme } from "lapyme";

dotenv.config();

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

async function main() {
  const externalOrderId = "shopify-1001";
  const customerId = process.env["LAPYME_CUSTOMER_ID"];
  const productId = process.env["LAPYME_PRODUCT_ID"];
  const pointOfSaleId = process.env["LAPYME_POINT_OF_SALE_ID"];

  if (!customerId || !productId || !pointOfSaleId) {
    throw new Error(
      "Set LAPYME_CUSTOMER_ID, LAPYME_PRODUCT_ID, and LAPYME_POINT_OF_SALE_ID.",
    );
  }

  const sale = await lapyme.sales.create({
    idempotencyKey: `sale:shopify:${externalOrderId}`,
    body: {
      customerId,
      pointOfSaleId,
      voucherType: 6,
      invoiceDate: new Date(),
      currency: "PES",
      notes: `External order ${externalOrderId}`,
      items: [
        {
          productId,
          quantity: 1,
          unitPrice: 125000,
        },
      ],
    },
  });

  console.log({
    requestId: sale.result.requestId,
    sale: sale.result.data.sale,
    effects: sale.result.data.projectedEffects,
    warnings: sale.result.warnings,
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
