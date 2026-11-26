# ApiPurchaseOrderDetailResponse

## Example Usage

```typescript
import { ApiPurchaseOrderDetailResponse } from "lapyme/models";

let value: ApiPurchaseOrderDetailResponse = {
  requestId: "<id>",
  data: {
    object: "purchase_order",
    id: "b211e0c9-f6c2-4f91-aca1-b72138c7b900",
    orderNumber: 169124,
    formattedOrderNumber: "<value>",
    status: "sent",
    orderDate: new Date("2025-01-23"),
    expectedDate: null,
    currency: "Pataca",
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
      id: "f48bba46-ec85-46c3-b2d7-bd1637ffd411",
      name: "<value>",
    },
    createdAt: new Date("2026-03-27T15:33:20.950Z"),
    tags: [
      {
        object: "tag",
        id: "0e6eb6e2-9039-46b3-b5a8-ca8353449182",
        scope: "purchase_order",
        name: "<value>",
        slug: "<value>",
        color: "blue",
        description:
          "dazzling ack gee inasmuch sheepishly who lowball deliberately",
        archivedAt: new Date("2026-07-18T06:36:50.529Z"),
        createdAt: new Date("2024-07-04T20:30:22.631Z"),
        updatedAt: new Date("2026-01-11T05:59:34.900Z"),
      },
    ],
    warehouseId: "db2a1c5e-eee3-40f5-a983-b0f8c0848ac9",
    notes: "<value>",
    items: [
      {
        id: "043432f7-1dfa-4400-93b0-b2207e252c94",
        orderedQuantity: 4295.35,
        receivedQuantity: 3130.2,
        expectedUnitCost: 484659,
        product: {
          id: "bd322476-c496-49b7-a68b-a81e5a8b078c",
          name: "<value>",
          sku: "<value>",
          supplierSku: "<value>",
          productType: "kit",
          variantOptions: {},
          optionNames: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject5f7a7d7ad7](../models/api-shared-object5f7a7d7ad7.md) | :heavy_check_mark:                                                           | N/A                                                                          |