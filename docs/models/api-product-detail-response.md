# ApiProductDetailResponse

## Example Usage

```typescript
import { ApiProductDetailResponse } from "lapyme/models";

let value: ApiProductDetailResponse = {
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
    cost: 5092.57,
    price: 5475.87,
    taxRate: {
      id: 6496.5,
      value: 3957.79,
    },
    defaultSupplier: null,
    productType: "kit",
    visibility: "sales",
    isActive: false,
    organizationSlug: "<value>",
    createdAt: new Date("2026-01-16T09:33:12.917Z"),
    updatedAt: new Date("2024-06-11T06:47:04.747Z"),
    components: [
      {
        productId: "4a0b478b-0e90-4aa0-a6fb-e28f0ddf5869",
        name: "<value>",
        sku: "<value>",
        quantity: 5832.75,
      },
    ],
    object: "product",
    tags: [],
    variantGroupId: "181f028a-d2c8-4849-928e-e3fbfd2b1867",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    isExempt: false,
    metafields: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    stockSummary: {
      totalQuantity: 789.6,
      warehouseCount: 760917,
      byWarehouse: [],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject8314097d1f](../models/api-shared-object8314097d1f.md) | :heavy_check_mark:                                                           | N/A                                                                          |