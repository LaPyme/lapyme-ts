# ListApiOrdersResponse

## Example Usage

```typescript
import { ListApiOrdersResponse } from "lapyme/models/operations";

let value: ListApiOrdersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "order",
        id: "837ab5bc-b4da-4812-8bca-0f1166fc1aad",
        orderNumber: "<value>",
        rawOrderNumber: 973125,
        orderDate: new Date("2026-08-23T22:29:26.838Z"),
        customerId: "5f20d4e9-c4db-48fb-8a23-65f1c8021df9",
        customerName: "<value>",
        customerTaxId: "<id>",
        itemsCount: 395182,
        totalUnits: 3705.16,
        discountAmount: 838466,
        discountPercentage: 1812.72,
        subtotal: 671136,
        taxAmount: 208792,
        total: 172967,
        currency: "ARS",
        orderStatus: "completed",
        preparationStatus: "partially_fulfilled",
        invoicingStatus: "partially_invoiced",
        notes: "<value>",
        createdAt: new Date("2024-12-28T04:51:46.253Z"),
        updatedAt: new Date("2025-10-15T08:48:16.037Z"),
        createdByName: "<value>",
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://vague-developing.org",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiOrderListResponse](../../models/api-order-list-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |