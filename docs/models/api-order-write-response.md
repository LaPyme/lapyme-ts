# ApiOrderWriteResponse

## Example Usage

```typescript
import { ApiOrderWriteResponse } from "lapyme/models";

let value: ApiOrderWriteResponse = {
  requestId: "<id>",
  data: {
    order: {
      object: "order",
      id: "81acef22-e9e2-4698-ad96-d152ee741945",
      orderNumber: "<value>",
      rawOrderNumber: 242811,
      orderDate: new Date("2026-06-29T10:32:19.053Z"),
      customerId: "d61a9655-7f8b-4cda-a395-b437c43a24a4",
      customerName: "<value>",
      customerTaxId: null,
      itemsCount: 536090,
      totalUnits: 789531,
      discountAmount: 865474,
      subtotal: 82325,
      taxAmount: 5330,
      total: 377906,
      currency: "PES",
      orderStatus: "completed",
      preparationStatus: "fulfilled",
      invoicingStatus: "partially_invoiced",
      notes: "<value>",
      createdAt: new Date("2026-11-24T16:57:34.205Z"),
      createdByName: "<value>",
      createdBy: "580b93a8-4df4-4b17-83c1-9a9712f75b19",
      lineItems: [
        {
          id: "01ac6f2c-64d3-40bb-bd85-2246c7b6071e",
          lineNumber: 863915,
          productId: "791d2cb8-b512-4291-b505-608c13cc9c4d",
          productName: "<value>",
          sku: "<value>",
          orderedQuantity: 968205,
          allocatedQuantity: 609680,
          fulfilledQuantity: 356287,
          invoicedQuantity: 665331,
          cancelledQuantity: 535483,
          unitPrice: 944750,
          taxRateId: 854621,
          discountAmount: 922421,
          discountPercentage: 2279.57,
          subtotal: 663458,
        },
      ],
      activeWarehouses: [],
      pendingPreparationWarehouseId: "73d3fbcf-c396-42e4-a3f0-d6891a37f27d",
      preparations: [],
      invoices: [],
    },
  },
  warnings: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `requestId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [models.ApiOrderWriteResponseData](../models/api-order-write-response-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `warnings`                                                                     | *any*[]                                                                        | :heavy_check_mark:                                                             | N/A                                                                            |