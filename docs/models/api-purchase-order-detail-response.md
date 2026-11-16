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
      paymentTermId: "<id>",
      paymentTermDays: 198666,
      address: null,
      apartment: "<value>",
      city: "Port Werner",
      province: "<value>",
      postalCode: "65289",
    },
    warehouse: {
      id: "1b104c18-8dce-4b2d-b9e2-60cfa73eef22",
      name: "<value>",
    },
    createdAt: new Date("2026-03-27T15:33:20.950Z"),
    tags: [
      {
        object: "tag",
        id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
        scope: "purchase_order",
        name: "<value>",
        slug: "<value>",
        color: "yellow",
        description: "natural huzzah heavenly",
        archivedAt: new Date("2024-12-06T02:21:59.305Z"),
        createdAt: new Date("2024-02-28T10:14:14.640Z"),
        updatedAt: new Date("2025-08-18T02:43:21.277Z"),
      },
    ],
    warehouseId: "db2a1c5e-eee3-40f5-a983-b0f8c0848ac9",
    notes: "<value>",
    items: [
      {
        id: "b4c16814-e2a0-4e9d-bc52-f10a367aa686",
        orderedQuantity: 7716.56,
        receivedQuantity: 5172.21,
        expectedUnitCost: 943658,
        product: {
          id: "6c2da590-f059-4c84-8fb3-66f78187f1b7",
          name: "<value>",
          sku: "<value>",
          productType: "combo",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjecteffe384a18](../models/api-shared-objecteffe384a18.md) | :heavy_check_mark:                                                           | N/A                                                                          |