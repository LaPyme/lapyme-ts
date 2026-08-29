# CreateApiOrderInvoiceResponse

## Example Usage

```typescript
import { CreateApiOrderInvoiceResponse } from "lapyme/models/operations";

let value: CreateApiOrderInvoiceResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      order: {
        object: "order",
        id: "59658c39-c825-4e87-8eb5-c84b1313295f",
        orderNumber: "<value>",
        rawOrderNumber: 771118,
        orderDate: new Date("2024-11-27T02:27:40.414Z"),
        customerId: "13d149c5-ebe2-40dc-9c5d-07d40c750917",
        customerName: "<value>",
        customerTaxId: "<id>",
        itemsCount: 321882,
        totalUnits: 545610,
        discountAmount: 510678,
        subtotal: 8487,
        taxAmount: 930248,
        total: 719427,
        currency: "DOL",
        orderStatus: "completed",
        preparationStatus: "partially_fulfilled",
        invoicingStatus: "pending",
        notes: "<value>",
        createdAt: new Date("2025-05-04T07:38:52.370Z"),
        createdByName: "<value>",
        createdBy: "49aa9f03-7159-4d99-b208-919aafd6665c",
        lineItems: [],
        activeWarehouses: [],
        pendingPreparationWarehouseId: "f701d204-c699-4362-88cf-63c56a0607fc",
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
        preparations: [],
        invoices: [
          {
            object: "order_invoice",
            id: "676fb5f3-03ab-4cd6-83ab-b65cfc553258",
            formattedInvoiceNumber: "<value>",
            invoiceDate: "<value>",
            createdAt: new Date("2024-09-01T07:51:52.005Z"),
            invoiceStatus: "pending",
            itemsCount: 828293,
            totalUnits: 190029,
            total: 808166,
          },
        ],
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiOrderWriteResponse](../../models/api-order-write-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |