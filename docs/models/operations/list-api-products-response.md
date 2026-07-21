# ListApiProductsResponse

## Example Usage

```typescript
import { ListApiProductsResponse } from "lapyme/models/operations";

let value: ListApiProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
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
        currency: "Lek",
        cost: 4169.96,
        price: 11.65,
        taxRate: {
          id: 6059.87,
          value: 8886.91,
        },
        defaultSupplier: {
          id: "37ba6994-31a0-4859-8f3d-6fb82691199d",
          name: "<value>",
        },
        productType: "kit",
        isActive: false,
        organizationSlug: "<value>",
        createdAt: new Date("2026-09-19T21:54:34.572Z"),
        updatedAt: new Date("2024-06-17T15:51:10.779Z"),
        object: "product",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://self-assured-contrail.com",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |