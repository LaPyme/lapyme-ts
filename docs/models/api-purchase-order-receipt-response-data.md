# ApiPurchaseOrderReceiptResponseData

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptResponseData } from "lapyme/models";

let value: ApiPurchaseOrderReceiptResponseData = {
  receipt: {
    object: "receipt",
    id: "<id>",
    purchaseOrderWarehouseId: null,
    affectedProducts: [],
  },
  purchaseOrder: {
    object: "purchase_order",
    id: "41d9088a-bdee-4956-87bb-8233fcf15924",
    orderNumber: 901721,
    formattedOrderNumber: "<value>",
    status: "draft",
    orderDate: new Date("2025-06-20"),
    expectedDate: new Date("2025-06-12"),
    currency: "Kyat",
    supplier: {
      id: "a45a7fd5-160a-41a7-baa2-5367b011b0b2",
      name: "<value>",
      description:
        "cod stable snow our famously switchboard as from likewise stiff",
      email: null,
      phone: "802.394.0907",
      taxIdType: "<value>",
      taxId: "<id>",
      taxCategory: null,
      paymentTermId: "<id>",
      paymentTermDays: 198666,
      address: null,
      apartment: "<value>",
      city: "Port Werner",
      province: "<value>",
      postalCode: "65289",
    },
    warehouse: null,
    createdAt: new Date("2026-06-08T14:02:09.205Z"),
    tags: [],
    warehouseId: "cdddc7f1-dd90-4769-b5b8-f9fc6bce3d03",
    notes: "<value>",
    items: [
      {
        id: "eb4c1681-4e2a-40e9-9dc5-2f10a367aa68",
        orderedQuantity: 8275.54,
        receivedQuantity: 2939.45,
        expectedUnitCost: 517221,
        product: {
          id: "af6c2da5-90f0-459c-a84f-b366f78187f1",
          name: "<value>",
          sku: "<value>",
          productType: null,
          variantOptions: {
            "key": "<value>",
          },
          optionNames: [
            "<value 1>",
          ],
        },
      },
    ],
  },
  idempotentReplay: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `receipt`                                                                    | [models.Receipt](../models/receipt.md)                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchaseOrder`                                                              | [models.ApiSharedObject3ebe26c85a](../models/api-shared-object3ebe26c85a.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |