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
    fulfillmentStatus: "cancelled",
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
    pendingFulfillmentLocationId: "9a3998fe-a4a0-4b44-a943-36fea01a3326",
    fulfillmentOrders: [
      {
        object: "fulfillment_order",
        id: "f6908528-73ce-4abd-91b3-5d7ead30af7c",
        status: "closed",
        assignedWarehouseId: "0f724554-1971-489a-b745-089ddd55756f",
        assignedWarehouseName: "<value>",
        deliveryMethod: "shipping",
        requestedAt: new Date("2025-09-10T11:50:07.932Z"),
        startedAt: new Date("2026-06-29T05:35:21.598Z"),
        closedAt: new Date("2026-07-09T21:43:10.411Z"),
        cancelledAt: new Date("2025-12-20T12:23:22.646Z"),
        notes: "<value>",
        lines: [],
      },
    ],
    fulfillments: [
      "<value 1>",
      "<value 2>",
    ],
    generatedInvoices: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiOrderDetailResponseData](../models/api-order-detail-response-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |