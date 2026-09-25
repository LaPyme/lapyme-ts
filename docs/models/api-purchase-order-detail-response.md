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
      id: "73701df9-cc25-4f39-89d3-0ecc1c8cf71d",
      name: "<value>",
    },
    createdAt: new Date("2026-03-27T15:33:20.950Z"),
    tags: [
      {
        object: "tag",
        id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
        scope: "customer",
        name: "<value>",
        slug: "<value>",
        color: "indigo",
        description:
          "vacantly unless nautical alongside around optimistic for lasting sometimes",
        archivedAt: new Date("2024-05-13T14:06:09.243Z"),
        createdAt: new Date("2026-03-04T18:15:09.469Z"),
        updatedAt: new Date("2026-05-06T00:20:31.712Z"),
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