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
    updatedAt: new Date("2024-03-02T20:27:48.789Z"),
    createdByName: "<value>",
    createdBy: "2e4277b8-ccbb-4fb6-95f9-78eda866a6a6",
    lineItems: [
      {
        id: "34e909ec-68c3-4541-acb5-119ac04243bc",
        lineNumber: 241081,
        productId: "9a3998fe-a4a0-4b44-a943-36fea01a3326",
        productName: "<value>",
        sku: "<value>",
        orderedQuantity: 605196,
        allocatedQuantity: 952223,
        fulfilledQuantity: 429357,
        invoicedQuantity: 618022,
        cancelledQuantity: 9976,
        unitPrice: 545812,
        taxRateId: 331362,
        discountAmount: 509268,
        discountPercentage: 2208.38,
        subtotal: 809637,
      },
    ],
    activeWarehouses: [
      {
        id: "f701d204-c699-4362-88cf-63c56a0607fc",
        name: "<value>",
        isDefault: false,
      },
    ],
    pendingPreparationWarehouseId: "bd1b35d7-ead3-40af-87c4-b0f724554197",
    preparationGroups: [
      {
        id: "9a745089-ddd5-4575-b6ff-2494d9d9a409",
        status: "cancelled",
        warehouseId: "f5228807-6441-4e3a-bca3-969a519bfd32",
        warehouseName: "<value>",
        deliveryMethod: "local_delivery",
        requestedAt: new Date("2025-05-01T15:45:45.663Z"),
        startedAt: new Date("2024-11-20T01:44:19.535Z"),
        closedAt: null,
        cancelledAt: new Date("2024-03-19T21:33:09.502Z"),
        notes: "<value>",
        lines: [],
      },
    ],
    preparations: [],
    invoices: [],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject7ae43a0cb2](../models/api-shared-object7ae43a0cb2.md) | :heavy_check_mark:                                                           | N/A                                                                          |