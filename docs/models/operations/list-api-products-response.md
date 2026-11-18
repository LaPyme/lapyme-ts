# ListApiProductsResponse

## Example Usage

```typescript
import { ListApiProductsResponse } from "lapyme/models/operations";

let value: ListApiProductsResponse = {
  headers: {},
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
        taxRate: {
          id: 3957.79,
          value: 5859.18,
        },
        defaultSupplier: {
          id: "431a0859-f3d6-4fb8-8269-1199d3935473",
          name: "<value>",
        },
        productType: "combo",
        visibility: "both",
        availableInPos: true,
        isActive: true,
        organizationSlug: "<value>",
        createdAt: new Date("2025-06-11T05:24:07.816Z"),
        updatedAt: new Date("2024-09-22T14:03:08.281Z"),
        object: "product",
        variantGroupId: "418f02e6-9ca6-4e74-8fd8-83d4560ac201",
        tags: [],
      },
    ],
    hasMore: true,
    nextCursor: null,
    object: "list",
    url: "https://helpful-wasabi.com",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |