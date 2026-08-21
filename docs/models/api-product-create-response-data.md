# ApiProductCreateResponseData

## Example Usage

```typescript
import { ApiProductCreateResponseData } from "lapyme/models";

let value: ApiProductCreateResponseData = {
  product: {
    id: "4be7e44d-e025-41cb-a98f-12d48698b5e5",
    name: "<value>",
    description: "vice junior scoff zowie scoff powerfully psst",
    category: null,
    sku: "<value>",
    barcode: "<value>",
    imageUrl: "https://sunny-nightlife.org/",
    currency: "Denar",
    cost: 2104.67,
    price: 4639.09,
    taxRate: {
      id: 7340.09,
      value: 6496.5,
    },
    defaultSupplier: {
      id: "99431a08-59f3-4d6f-9b82-691199d39354",
      name: "<value>",
    },
    productType: "product",
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2026-03-27T12:10:15.453Z"),
    updatedAt: new Date("2026-07-20T09:29:09.875Z"),
    object: "product",
    tags: [],
    variantGroupId: "ec4a0b47-8b0e-490a-9a06-fbe28f0ddf58",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
    },
    isExempt: false,
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
  idempotentReplay: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `product`                                                                    | [models.ApiSharedObject2ca3c1ad56](../models/api-shared-object2ca3c1ad56.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |