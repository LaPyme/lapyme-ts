# ApiOrderDetailResponse

## Example Usage

```typescript
import { ApiOrderDetailResponse } from "lapyme/models";

let value: ApiOrderDetailResponse = {
  requestId: "<id>",
  data: {
    object: "order",
    id: "ecd88c10-d2c7-4079-ad43-8055af3ce45a",
    orderNumber: "<value>",
    rawOrderNumber: 333031,
    orderDate: new Date("2025-05-01T14:34:50.791Z"),
    customerId: "875a9a00-14f6-43b6-9ea5-a87a7cbd1b40",
    customerName: "<value>",
    customerTaxId: null,
    itemsCount: 100441,
    totalUnits: 574102,
    discountAmount: 287318,
    subtotal: 827815,
    taxAmount: 910296,
    total: 983409,
    currency: "PES",
    orderStatus: "open",
    preparationStatus: "cancelled",
    invoicingStatus: "invoiced",
    notes: "<value>",
    createdAt: new Date("2024-12-29T05:45:52.637Z"),
    createdByName: "<value>",
    createdBy: "02e4277b-8ccb-4bfb-965f-978eda866a6a",
    lineItems: [],
    activeWarehouses: [
      {
        id: "34e909ec-68c3-4541-acb5-119ac04243bc",
        name: "<value>",
        isDefault: true,
      },
    ],
    pendingPreparationWarehouseId: "9a3998fe-a4a0-4b44-a943-36fea01a3326",
    preparationGroups: [
      {
        id: "0161b458-7546-48e0-96ce-e8a835d0be4c",
        status: "open",
        warehouseId: "c143f3dc-be40-422e-9c3b-e36ec45ecdf8",
        warehouseName: null,
        deliveryMethod: "pickup",
        requestedAt: new Date("2025-04-17T04:45:48.986Z"),
        startedAt: new Date("2025-08-04T08:03:25.563Z"),
        closedAt: new Date("2025-05-02T05:51:43.538Z"),
        cancelledAt: new Date("2025-12-06T00:04:16.536Z"),
        notes: "<value>",
        lines: [
          {
            id: "0d9a5512-a86c-43a6-9f84-ae1caf124b49",
            orderLineId: "99f766d8-c073-4e9a-b7d4-4da26583e985",
            productId: "18ab144a-35f0-4dfa-858e-45ea0927e6d7",
            productName: "<value>",
            sku: "<value>",
            quantity: 579153,
            fulfilledQuantity: 475821,
            cancelledQuantity: 446755,
            pendingQuantity: 344893,
          },
        ],
      },
    ],
    preparations: [
      {
        object: "order_preparation",
        id: "69085287-3cea-4bd1-ab35-d7ead30af7c4",
        preparedAt: new Date("2024-01-27T00:37:52.127Z"),
        warehouseName: "<value>",
        deliveryMethod: "pickup",
        remitoDeliveryId: "24554197-189a-4745-a089-ddd55756ff24",
        formattedRemitoNumber: "<value>",
        lines: [
          {
            id: "9d9a409e-ff52-4288-a076-441e3aca3969",
            orderLineId: "519bfd32-d5a7-4f40-a51f-377ecebd9e93",
            productId: null,
            productName: "<value>",
            sku: "<value>",
            variantOptions: {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            optionNames: [
              "<value 1>",
            ],
            quantity: 623861,
            orderedQuantity: 354203,
            unitPrice: 256258,
            discountPercentage: 7238.05,
          },
        ],
      },
    ],
    invoices: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject711786f766](../models/api-shared-object711786f766.md) | :heavy_check_mark:                                                           | N/A                                                                          |