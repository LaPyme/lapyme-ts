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
    markupPercentage: 2998.14,
    taxRate: {
      id: 5953.74,
      value: 2985.8,
    },
    defaultSupplier: {
      id: "1a0859f3-d6fb-4826-b911-99d39354733b",
      name: "<value>",
    },
    productType: "combo",
    visibility: "both",
    availableInPos: false,
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2024-03-14T02:45:29.460Z"),
    updatedAt: new Date("2025-08-28T21:40:44.607Z"),
    components: [],
    tracking: "serial",
    object: "product",
    variantGroupId: "028ad2c8-8492-48ee-a3fb-fd2b186778eb",
    tags: [
      {
        object: "tag",
        id: "75a399b6-0212-4a82-9b75-ca998fb65f13",
        scope: "purchase_order",
        name: "<value>",
        slug: "<value>",
        color: "teal",
        description: "huzzah heavenly until by t-shirt geez however",
        archivedAt: new Date("2026-12-06T07:31:36.084Z"),
        createdAt: new Date("2026-08-04T02:33:18.776Z"),
        updatedAt: new Date("2026-03-09T19:55:25.442Z"),
      },
    ],
    variantOptions: null,
    isExempt: true,
    metafields: [],
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject52054e588b](../models/api-shared-object52054e588b.md) | :heavy_check_mark:                                                           | N/A                                                                          |