# ApiPurchaseOrderWriteResponse

## Example Usage

```typescript
import { ApiPurchaseOrderWriteResponse } from "lapyme/models";

let value: ApiPurchaseOrderWriteResponse = {
  requestId: "<id>",
  data: {
    purchaseOrder: {
      object: "purchase_order",
      id: "2da75755-cca1-4c32-a03e-de0e3c5e56d1",
      orderNumber: 831139,
      formattedOrderNumber: "<value>",
      status: "sent",
      orderDate: new Date("2026-10-21"),
      expectedDate: new Date("2025-11-04"),
      currency: "Quetzal",
      supplier: null,
      warehouse: {
        id: "cf9b148b-a551-4922-a341-01eeac0aecd5",
        name: "<value>",
      },
      createdAt: new Date("2024-03-21T22:00:55.985Z"),
      warehouseId: "daea2bdd-f0b5-410b-bbbd-72f7ddd3f88a",
      notes: "<value>",
      items: [
        {
          id: "49bdd461-c768-4a69-a014-452a3d8d4113",
          orderedQuantity: 4007.4,
          receivedQuantity: 7550.27,
          expectedUnitCost: 443787,
          product: {
            id: "9e733944-f785-4ec8-95a8-abcc0d5ddc1d",
            name: "<value>",
            sku: "<value>",
            productType: "kit",
            variantOptions: {
              "key": "<value>",
              "key1": "<value>",
            },
            optionNames: [
              "<value 1>",
            ],
          },
        },
      ],
    },
    idempotentReplay: true,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `requestId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `data`                                                                                          | [models.ApiPurchaseOrderWriteResponseData](../models/api-purchase-order-write-response-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `warnings`                                                                                      | *any*[]                                                                                         | :heavy_check_mark:                                                                              | N/A                                                                                             |