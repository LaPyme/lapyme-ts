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
    isActive: false,
    organizationSlug: "<value>",
    createdAt: new Date("2024-11-24T14:18:59.264Z"),
    updatedAt: new Date("2026-10-15T20:28:07.734Z"),
    object: "product",
    tags: [
      {
        object: "tag",
        id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
        scope: "purchase_order",
        name: "<value>",
        slug: "<value>",
        color: "yellow",
        description: "natural huzzah heavenly",
        archivedAt: new Date("2024-12-06T02:21:59.305Z"),
        createdAt: new Date("2024-02-28T10:14:14.640Z"),
        updatedAt: new Date("2025-08-18T02:43:21.277Z"),
      },
    ],
    variantGroupId: "2a2181f0-28ad-42c8-a849-28ee3fbfd2b1",
    variantOptions: {
      "key": "<value>",
    },
    isExempt: true,
    metafields: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
    stockSummary: {
      totalQuantity: 7117.27,
      warehouseCount: 298986,
      byWarehouse: [
        {
          warehouseId: "6439384c-a58c-4f3b-b397-18b0704841ec",
          warehouseName: "<value>",
          quantity: 8201.32,
          onHand: 20.59,
          reservedQuantity: 9296.94,
          incomingQuantity: 4063.81,
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
| `data`                                                                       | [models.ApiSharedObject2ca3c1ad56](../models/api-shared-object2ca3c1ad56.md) | :heavy_check_mark:                                                           | N/A                                                                          |