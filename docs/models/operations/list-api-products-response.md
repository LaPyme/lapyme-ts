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
        variantGroupId: "9b226734-18f0-42e6-99ca-6e74fd883d45",
        tags: [],
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://antique-bog.com/",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |