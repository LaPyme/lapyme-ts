import dotenv from "dotenv";
import { Lapyme } from "lapyme";

dotenv.config();

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_API_KEY"] ?? "",
});

async function main() {
  const supplierId = process.env["LAPYME_SUPPLIER_ID"];
  const productId = process.env["LAPYME_PRODUCT_ID"];
  const warehouseId = process.env["LAPYME_WAREHOUSE_ID"];

  if (!supplierId || !productId || !warehouseId) {
    throw new Error(
      "Set LAPYME_SUPPLIER_ID, LAPYME_PRODUCT_ID, and LAPYME_WAREHOUSE_ID.",
    );
  }

  const externalPurchaseOrderId = "vendor-order-0001";

  const purchaseOrder = await lapyme.purchaseOrders.createPurchaseOrder({
    idempotencyKey: `purchase-order:${externalPurchaseOrderId}`,
    body: {
      supplierId,
      warehouseId,
      orderDate: new Date(),
      notes: `External purchase order ${externalPurchaseOrderId}`,
      items: [
        {
          productId,
          orderedQuantity: 5,
          expectedUnitCost: 80000,
        },
      ],
    },
  });

  await lapyme.purchaseOrders.confirm({
    purchaseOrderId: purchaseOrder.result.data.purchaseOrder.id,
  });

  const firstItem = purchaseOrder.result.data.purchaseOrder.items[0];

  const receipt = await lapyme.purchaseOrders.receipts.receive({
    purchaseOrderId: purchaseOrder.result.data.purchaseOrder.id,
    idempotencyKey: `purchase-order-receipt:${externalPurchaseOrderId}:1`,
    body: {
      items: [
        {
          purchaseOrderItemId: firstItem.id,
          productId,
          receivedQuantity: 5,
        },
      ],
    },
  });

  console.log({
    purchaseOrder: purchaseOrder.result.data.purchaseOrder,
    receipt: receipt.result.data.receipt,
  });
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
