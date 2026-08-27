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
    visibility: "both",
    isActive: false,
    organizationSlug: "<value>",
    createdAt: new Date("2026-07-20T09:29:09.875Z"),
    updatedAt: new Date("2024-03-03T10:59:33.677Z"),
    object: "product",
    tags: [
      {
        object: "tag",
        id: "c4a0b478-b0e9-40aa-a06f-be28f0ddf586",
        scope: "purchase",
        name: "<value>",
        slug: "<value>",
        color: "teal",
        description: "norm youthful ugh drive victoriously",
        archivedAt: new Date("2026-10-03T04:47:37.645Z"),
        createdAt: new Date("2026-03-15T05:11:35.797Z"),
        updatedAt: new Date("2025-02-21T13:32:00.515Z"),
      },
    ],
    variantGroupId: "e290396b-35a8-4ca8-9353-449182ecbb3b",
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
      totalQuantity: 5756.46,
      warehouseCount: 166111,
      byWarehouse: [],
    },
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `product`                                                                    | [models.ApiSharedObjectfc4c402ca1](../models/api-shared-objectfc4c402ca1.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |