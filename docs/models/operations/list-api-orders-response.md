# ListApiOrdersResponse

## Example Usage

```typescript
import { ListApiOrdersResponse } from "lapyme/models/operations";

let value: ListApiOrdersResponse = {
  headers: {},
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
        totalUnits: 370516,
        discountAmount: 838466,
        subtotal: 674053,
        taxAmount: 181272,
        total: 671136,
        currency: "PES",
        orderStatus: "open",
        preparationStatus: "in_progress",
        invoicingStatus: "partially_invoiced",
        notes: "<value>",
        createdAt: new Date("2025-01-28T20:17:37.951Z"),
        updatedAt: new Date("2024-12-07T10:58:01.560Z"),
        createdByName: "<value>",
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://monstrous-promise.org/",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiOrderListResponse](../../models/api-order-list-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |