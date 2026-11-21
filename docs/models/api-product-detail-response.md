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
    supplierSku: "<value>",
    barcode: "<value>",
    imageUrl: "https://low-finer.info",
    currency: "Namibia Dollar",
    cost: 5475.87,
    price: 401.51,
    taxRate: {
      id: 3957.79,
      value: 5859.18,
    },
    defaultSupplier: {
      id: "431a0859-f3d6-4fb8-8269-1199d3935473",
      name: "<value>",
    },
    productType: "service",
    visibility: "system",
    availableInPos: false,
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2025-12-22T09:52:01.303Z"),
    updatedAt: new Date("2024-05-17T21:23:18.809Z"),
    components: [],
    object: "product",
    variantGroupId: "81f028ad-2c88-4492-a8ee-3fbfd2b18677",
    tags: [
      {
        object: "tag",
        id: "fd0e6eb6-e290-4396-ab35-a8ca83534491",
        scope: "customer",
        name: "<value>",
        slug: "<value>",
        color: "blue",
        description:
          "striking angrily oily brightly commandeer justly where unto",
        archivedAt: new Date("2024-07-02T07:10:54.132Z"),
        createdAt: new Date("2025-08-08T00:49:49.551Z"),
        updatedAt: new Date("2026-07-18T06:36:50.529Z"),
      },
    ],
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
    },
    isExempt: false,
    metafields: [],
    variantMetafields: [],
    stockSummary: {
      totalQuantity: 9835.19,
      warehouseCount: 859979,
      byWarehouse: [],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectf175881c66](../models/api-shared-objectf175881c66.md) | :heavy_check_mark:                                                           | N/A                                                                          |