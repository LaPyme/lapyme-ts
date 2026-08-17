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
        cost: 11.65,
        price: 9545.45,
        taxRate: {
          id: 7340.09,
          value: 6496.5,
        },
        defaultSupplier: {
          id: "99431a08-59f3-4d6f-9b82-691199d39354",
          name: "<value>",
        },
        productType: "kit",
        isActive: false,
        organizationSlug: "<value>",
        createdAt: new Date("2024-06-17T15:51:10.779Z"),
        updatedAt: new Date("2025-10-10T09:48:40.601Z"),
        object: "product",
        tags: [],
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://cooperative-gloom.info/",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiProductListResponse](../../models/api-product-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |