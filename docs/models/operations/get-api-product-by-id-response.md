# GetApiProductByIdResponse

## Example Usage

```typescript
import { GetApiProductByIdResponse } from "lapyme/models/operations";

let value: GetApiProductByIdResponse = {
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
  },
  result: {
    requestId: "<id>",
    data: {
      id: "faccbb36-87b8-4e86-9767-38b5da1cacbd",
      name: "<value>",
      description: "fruitful fervently ramp meh",
      category: {
        id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
        name: "<value>",
      },
      sku: "<value>",
      barcode: "<value>",
      imageUrl: "https://woeful-jogging.biz",
      currency: "Won",
      cost: 9842.81,
      price: 5092.57,
      taxRate: {
        id: 7340.09,
        value: 6496.5,
      },
      defaultSupplier: {
        id: "99431a08-59f3-4d6f-9b82-691199d39354",
        name: "<value>",
      },
      productType: "product",
      visibility: "system",
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2026-10-15T20:28:07.734Z"),
      updatedAt: new Date("2026-01-16T09:33:12.917Z"),
      object: "product",
      tags: [],
      variantGroupId: "a2181f02-8ad2-4c88-9492-8ee3fbfd2b18",
      variantOptions: {
        "key": "<value>",
      },
      isExempt: false,
      metafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      stockSummary: {
        totalQuantity: 5756.46,
        warehouseCount: 166111,
        byWarehouse: [],
      },
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductDetailResponse](../../models/api-product-detail-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |