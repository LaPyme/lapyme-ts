import dotenv from "dotenv";
import { Lapyme } from "lapyme";
import * as errors from "lapyme/models/errors";

dotenv.config();

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

async function main() {
  const idempotencyKey = "sale:shopify:1001";

  try {
    await lapyme.sales.create({
      idempotencyKey,
      body: {
        customerId: process.env["LAPYME_CUSTOMER_ID"],
        pointOfSaleId: process.env["LAPYME_POINT_OF_SALE_ID"] ?? "",
        voucherType: 6,
        invoiceDate: new Date(),
        currency: "PES",
        items: [
          {
            productId: process.env["LAPYME_PRODUCT_ID"],
            quantity: 1,
            unitPrice: 125000,
          },
        ],
      },
    });
  } catch (error) {
    if (error instanceof errors.ApiErrorEnvelope) {
      console.error({
        requestId: error.requestId,
        code: error.error.code,
        message: error.error.message,
        retryable: error.error.retryable,
        details: error.error.details,
      });

      if (error.error.retryable) {
        console.error(
          `Retry the same operation with the same idempotency key: ${idempotencyKey}`,
        );
      }
    } else {
      throw error;
    }
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
