# ListApiPurchaseOrdersResponse

## Example Usage

```typescript
import { ListApiPurchaseOrdersResponse } from "lapyme/models/operations";

let value: ListApiPurchaseOrdersResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        object: "purchase_order",
        id: "9773fd12-0f31-4ef1-b61e-1b31c858888a",
        orderNumber: 583348,
        formattedOrderNumber: "<value>",
        status: "sent",
        orderDate: new Date("2024-07-01"),
        expectedDate: null,
        currency: "Trinidad and Tobago Dollar",
        supplier: {
          id: "f4e712e3-5eee-48c0-94d7-da0d0822a24a",
          name: "<value>",
        },
        warehouse: {
          id: "1d81895d-9d7f-44ea-9636-e0e6181dee4f",
          name: "<value>",
        },
        createdAt: new Date("2025-06-11T02:30:36.517Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [models.ApiPurchaseOrderListResponse](../../models/api-purchase-order-list-response.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |