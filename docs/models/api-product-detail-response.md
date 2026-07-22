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
    currency: "Trinidad and Tobago Dollar",
    cost: 5023.57,
    price: 9776.7,
    taxRate: {
      id: 6059.87,
      value: 8886.91,
    },
    defaultSupplier: {
      id: "37ba6994-31a0-4859-8f3d-6fb82691199d",
      name: "<value>",
    },
    productType: "service",
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2026-12-14T18:31:18.269Z"),
    updatedAt: new Date("2025-07-12T03:29:39.613Z"),
    object: "product",
    variantGroupId: "80c4ea2a-2181-4f02-a8ad-2c884928ee3f",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    isExempt: true,
    metafields: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    stockSummary: {
      totalQuantity: 5243.39,
      warehouseCount: 382132,
      byWarehouse: [
        {
          warehouseId: "999b4c64-3938-44ca-958c-f3b39718b070",
          warehouseName: "<value>",
          quantity: 5028.12,
          onHand: 2731.26,
          reservedQuantity: 855.99,
          incomingQuantity: 9009.11,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectc99e480838](../models/api-shared-objectc99e480838.md) | :heavy_check_mark:                                                           | N/A                                                                          |