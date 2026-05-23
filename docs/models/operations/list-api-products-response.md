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
        barcode: "<value>",
        currency: "Lek",
        cost: 4169.96,
        price: 11.65,
        taxRate: {
          id: 9545.45,
          value: 8570.91,
        },
        defaultSupplier: {
          id: "e2939b22-6734-418f-802e-69ca6e74fd88",
          name: "<value>",
        },
        productType: "kit",
        isActive: true,
        organizationSlug: "<value>",
        createdAt: new Date("2025-01-03T08:44:42.602Z"),
        updatedAt: new Date("2025-02-15T09:21:59.181Z"),
        object: "product",
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://descriptive-analogy.com",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |