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
    supplierSku: "<value>",
    barcode: "<value>",
    imageUrl: "https://pessimistic-tabletop.name",
    currency: "Cape Verde Escudo",
    cost: 7340.09,
    price: 6496.5,
    taxRate: {
      id: 3957.79,
      value: 5859.18,
    },
    defaultSupplier: {
      id: "431a0859-f3d6-4fb8-8269-1199d3935473",
      name: "<value>",
    },
    productType: "combo",
    visibility: "system",
    availableInPos: true,
    isActive: false,
    organizationSlug: "<value>",
    createdAt: new Date("2026-05-03T11:39:49.038Z"),
    updatedAt: new Date("2024-11-15T13:45:18.239Z"),
    components: [
      {
        productId: "0b478b0e-90aa-406f-abe2-8f0ddf586999",
        name: "<value>",
        sku: "<value>",
        quantity: 7117.27,
      },
    ],
    object: "product",
    variantGroupId: "4c643938-4ca5-48cf-b3b3-9718b0704841",
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
  idempotentReplay: false,
  costConversions: [
    {
      productId: "bab572c9-cb63-4b09-b0b7-966528f6c7ed",
      functionalCost: 716774,
      exchangeRate: 2374.75,
      rateSource: "explicit",
      rateDate: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `product`                                                                                                                                  | [models.ApiSharedObjectf175881c66](../models/api-shared-objectf175881c66.md)                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `idempotentReplay`                                                                                                                         | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `costConversions`                                                                                                                          | [models.ApiSharedObjectcbcdbf3dfa](../models/api-shared-objectcbcdbf3dfa.md)[]                                                             | :heavy_check_mark:                                                                                                                         | USD conversions used by this save. Empty when no conversion was resolved or costs are hidden. Create replay returns the original evidence. |