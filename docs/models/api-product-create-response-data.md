# ApiProductCreateResponseData

## Example Usage

```typescript
import { ApiProductCreateResponseData } from "lapyme/models";

let value: ApiProductCreateResponseData = {
  product: {
    id: "466902fc-c58e-4e6b-8002-706e5660907a",
    name: "<value>",
    description: "construe discourse similar jogging onset",
    category: {
      id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
      name: "<value>",
    },
    sku: "<value>",
    barcode: "<value>",
    currency: "Venezuelan bolívar",
    cost: 2129.23,
    price: 8568.58,
    taxRate: {
      id: 9545.45,
      value: 8570.91,
    },
    defaultSupplier: {
      id: "e2939b22-6734-418f-802e-69ca6e74fd88",
      name: "<value>",
    },
    productType: "combo",
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2024-07-31T07:25:38.915Z"),
    updatedAt: new Date("2025-07-23T22:16:38.063Z"),
    object: "product",
    variantGroupId: "bf32ac26-3e27-4830-aa84-bdd32992e378",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
    },
    isExempt: false,
    metafields: [],
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
  idempotentReplay: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `product`                                                                    | [models.ApiSharedObjectc99e480838](../models/api-shared-objectc99e480838.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |