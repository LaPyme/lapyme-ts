# PatchApiOrderResponse

## Example Usage

```typescript
import { PatchApiOrderResponse } from "lapyme/models/operations";

let value: PatchApiOrderResponse = {
  headers: {},
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
        totalUnits: 5456.1,
        discountAmount: 510678,
        discountPercentage: null,
        subtotal: 930248,
        taxAmount: 719427,
        total: 779409,
        currency: "ARS",
        orderStatus: "completed",
        preparationStatus: "in_progress",
        invoicingStatus: "pending",
        notes: "<value>",
        createdAt: new Date("2024-10-11T20:15:13.844Z"),
        updatedAt: new Date("2025-09-30T21:00:51.635Z"),
        createdByName: "<value>",
        createdBy: "aa9f0371-59d9-4920-9891-9aafd6665cf2",
        voucherType: 90,
        lineItems: [
          {
            id: "f701d204-c699-4362-88cf-63c56a0607fc",
            lineNumber: 839554,
            productId: null,
            productName: "<value>",
            sku: "<value>",
            orderedQuantity: 1205.52,
            allocatedQuantity: 4349.26,
            fulfilledQuantity: 667.78,
            invoicedQuantity: 6895.99,
            cancelledQuantity: 3114.18,
            unitPrice: 352136,
            taxRateId: 557307,
            discountAmount: 374041,
            discountPercentage: 4248.97,
            subtotal: 557021,
          },
        ],
        activeWarehouses: [
          {
            id: "06cee8a8-35d0-4be4-8c60-c143f3dcbe40",
            name: "<value>",
            isDefault: true,
          },
        ],
        pendingPreparationWarehouseId: "c3be36ec-45ec-4df8-a40e-6f8271abc0d9",
        preparationGroups: [],
        preparations: [],
        invoices: [],
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