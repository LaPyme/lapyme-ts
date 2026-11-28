# ApiPurchaseOrderReceiptResponseData

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptResponseData } from "lapyme/models";

let value: ApiPurchaseOrderReceiptResponseData = {
  receipt: {
    object: "receipt",
    id: "<id>",
    items: [],
    purchaseOrderWarehouseId: "22d4c969-5447-4260-a1ab-187df703276a",
    affectedProducts: [
      {
        sku: "<value>",
        warehouseId: "<id>",
      },
    ],
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
      paymentTermDays: 187571,
      address: "47379 Keeling Courts",
      apartment: "<value>",
      city: "Port Vincenza",
      province: null,
      postalCode: "78887",
    },
    warehouse: {
      id: "fa73eef2-2e9d-414f-a84d-18f683cead94",
      name: "<value>",
    },
    createdAt: new Date("2026-11-27T10:31:29.742Z"),
    tags: [],
    warehouseId: "d907695b-8f9f-4c6b-ace3-d03f6deb4c16",
    notes: null,
    items: [],
  },
  idempotentReplay: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `receipt`                                                                    | [models.Receipt](../models/receipt.md)                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchaseOrder`                                                              | [models.ApiSharedObject5f7a7d7ad7](../models/api-shared-object5f7a7d7ad7.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |