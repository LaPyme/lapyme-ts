# ListApiProductsResponse

## Example Usage

```typescript
import { ListApiProductsResponse } from "lapyme/models/operations";

let value: ListApiProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
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
        supplierSku: "<value>",
        barcode: null,
        imageUrl: "https://well-made-story.net/",
        currency: "Uzbekistan Sum",
        cost: 5916.14,
        price: 2482.28,
        markupPercentage: 7190.07,
        taxRate: {
          id: 5953.74,
          value: 2985.8,
        },
        defaultSupplier: {
          id: "1a0859f3-d6fb-4826-b911-99d39354733b",
          name: "<value>",
        },
        productType: "product",
        visibility: "sales",
        availableInPos: true,
        isActive: true,
        organizationSlug: "<value>",
        createdAt: new Date("2024-10-27T14:21:11.876Z"),
        updatedAt: new Date("2024-04-19T13:58:04.110Z"),
        object: "product",
        variantGroupId: "8f02e69c-a6e7-44fd-8883-d4560ac20113",
        tags: [],
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://blaring-asset.org",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |