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
            id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
            scope: "customer",
            name: "<value>",
            slug: "<value>",
            color: "indigo",
            description:
              "vacantly unless nautical alongside around optimistic for lasting sometimes",
            archivedAt: new Date("2024-05-13T14:06:09.243Z"),
            createdAt: new Date("2026-03-04T18:15:09.469Z"),
            updatedAt: new Date("2026-05-06T00:20:31.712Z"),
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