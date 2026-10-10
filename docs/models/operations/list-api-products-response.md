# ListApiProductsResponse

## Example Usage

```typescript
import { ListApiProductsResponse } from "lapyme/models/operations";

let value: ListApiProductsResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        id: "64927157-5c43-4c4f-994a-ca205b8e6354",
        name: "<value>",
        description: null,
        category: {
          id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
          name: "<value>",
        },
        sku: "<value>",
        barcode: "<value>",
        imageUrl: null,
        currency: "Jordanian Dinar",
        cost: null,
        price: 9545.45,
        taxRate: {
          id: 6496.5,
          value: 3957.79,
        },
        defaultSupplier: {
          id: "9431a085-9f3d-46fb-8826-91199d393547",
          name: "<value>",
        },
        productType: "kit",
        visibility: "system",
        isActive: true,
        organizationSlug: "<value>",
        createdAt: new Date("2025-10-10T09:48:40.601Z"),
        updatedAt: new Date("2024-09-29T01:23:20.724Z"),
        object: "product",
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
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://hurtful-issue.biz/",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |