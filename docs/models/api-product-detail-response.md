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
      id: 9545.45,
      value: 8570.91,
    },
    defaultSupplier: {
      id: "e2939b22-6734-418f-802e-69ca6e74fd88",
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
      totalQuantity: 1075.96,
      warehouseCount: 917717,
      byWarehouse: [
        {
          warehouseId: "355b424e-8f1b-4194-8242-2b1798decfe8",
          warehouseName: "<value>",
          quantity: 2292.22,
          onHand: 4791.26,
          reservedQuantity: 4053.93,
          incomingQuantity: 732.18,
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