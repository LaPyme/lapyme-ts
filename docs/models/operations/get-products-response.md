# GetProductsResponse

## Example Usage

```typescript
import { GetProductsResponse } from "lapyme/models/operations";

let value: GetProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: false,
    data: [
      {
        id: "4cc6492a-b691-49fd-a0c7-221d2814e06e",
        name: "<value>",
        description: "stir-fry testimonial boo chairperson",
        category: {
          id: "11aebbd1-a097-4781-a192-c1eead8f2d67",
          name: "<value>",
        },
        sku: "<value>",
        barcode: "<value>",
        oemCode: "<value>",
        currency: "Iraqi Dinar",
        cost: 6179.64,
        price: 6783.82,
        taxRate: {
          id: 2209.08,
          value: 3644.97,
        },
        stockMinimum: 1270.1,
        defaultSupplier: {
          id: "617c875b-fbdd-4b56-88f9-c71c15252632",
          name: "<value>",
        },
        productType: "service",
        isActive: true,
        organizationSlug: "<value>",
        createdAt: new Date("2024-01-17T16:55:58.120Z"),
        updatedAt: new Date("2026-11-19T19:37:54.515Z"),
      },
    ],
    pagination: {
      page: 6539.47,
      limit: 8435.46,
      total: 4814.26,
      totalPages: 9297.22,
    },
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `headers`                                                           | Record<string, *string*[]>                                          | :heavy_check_mark:                                                  | N/A                                                                 |
| `result`                                                            | [models.ProductListResponse](../../models/product-list-response.md) | :heavy_check_mark:                                                  | N/A                                                                 |