# ListApiPurchaseOrdersResponse

## Example Usage

```typescript
import { ListApiPurchaseOrdersResponse } from "lapyme/models/operations";

let value: ListApiPurchaseOrdersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
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
          id: "73701df9-cc25-4f39-89d3-0ecc1c8cf71d",
          name: "<value>",
        },
        createdAt: new Date("2024-11-30T09:48:04.263Z"),
        tags: [
          {
            object: "tag",
            id: "b4c64393-84ca-458c-8f3b-39718b070484",
            scope: "transfer",
            name: "<value>",
            slug: "<value>",
            color: "pink",
            description: "delectable astride downright",
            archivedAt: new Date("2024-08-12T06:34:32.349Z"),
            createdAt: new Date("2024-10-25T15:17:34.484Z"),
            updatedAt: new Date("2024-11-10T16:15:42.311Z"),
          },
        ],
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