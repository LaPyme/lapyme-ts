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
    "key2": [
      "<value 1>",
      "<value 2>",
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
        externalOrderReference: "<value>",
        orderDate: new Date("2024-12-10T22:21:49.351Z"),
        customerId: "f20d4e9c-4db8-4fba-b236-5f1c8021df91",
        customerName: "<value>",
        customerTaxId: "<id>",
        itemsCount: 370516,
        totalUnits: 8384.66,
        discountAmount: 674053,
        discountPercentage: 6711.36,
        subtotal: 208792,
        taxAmount: 172967,
        total: 383169,
        currency: "USD",
        orderStatus: "completed",
        preparationStatus: "in_progress",
        invoicingStatus: "pending",
        notes: "<value>",
        createdAt: new Date("2025-10-15T08:48:16.037Z"),
        updatedAt: new Date("2025-04-20T22:51:43.726Z"),
        createdByName: "<value>",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://exhausted-tenement.net",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiOrderListResponse](../../models/api-order-list-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |