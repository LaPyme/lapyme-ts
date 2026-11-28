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
    markupPercentage: 5859.18,
    taxRate: {
      id: 5953.74,
      value: 2985.8,
    },
    defaultSupplier: {
      id: "1a0859f3-d6fb-4826-b911-99d39354733b",
      name: "<value>",
    },
    productType: "product",
    visibility: "system",
    availableInPos: false,
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2025-11-25T01:49:48.226Z"),
    updatedAt: new Date("2024-01-26T22:08:44.823Z"),
    components: [
      {
        productId: "478b0e90-aa06-4fbe-928f-0ddf5869999b",
        name: "<value>",
        sku: "<value>",
        quantity: 7539.54,
      },
    ],
    tracking: "lot",
    object: "product",
    variantGroupId: "439384ca-58cf-43b3-b971-8b0704841ecf",
    tags: [],
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
    variantMetafields: [],
    stockSummary: {
      totalQuantity: 9063.09,
      warehouseCount: 179046,
      byWarehouse: [
        {
          warehouseId: "0396b35a-8ca8-4353-a449-182ecbb3b4eb",
          warehouseName: "<value>",
          quantity: 8086.01,
          onHand: 5756.46,
          reservedQuantity: 1661.11,
          incomingQuantity: 1759.28,
        },
      ],
    },
  },
  idempotentReplay: false,
  costConversions: [
    {
      productId: "2703cfd7-8979-4991-931c-51bc026bb223",
      functionalCost: 218881,
      exchangeRate: 2443.39,
      rateSource: "explicit",
      rateDate: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `product`                                                                                                                                  | [models.ApiSharedObject52054e588b](../models/api-shared-object52054e588b.md)                                                               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `idempotentReplay`                                                                                                                         | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `costConversions`                                                                                                                          | [models.ApiSharedObjectcbcdbf3dfa](../models/api-shared-objectcbcdbf3dfa.md)[]                                                             | :heavy_check_mark:                                                                                                                         | USD conversions used by this save. Empty when no conversion was resolved or costs are hidden. Create replay returns the original evidence. |