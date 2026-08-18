# ApiSharedObject36dfdd5b32

## Example Usage

```typescript
import { ApiSharedObject36dfdd5b32 } from "lapyme/models";

let value: ApiSharedObject36dfdd5b32 = {
  id: "4215e94d-032d-4195-8c10-ff6f7a9fd11b",
  name: "<value>",
  description:
    "terraform in vivaciously ah unkempt drat athwart unblinking consequently",
  category: null,
  sku: "<value>",
  barcode: "<value>",
  imageUrl: "https://charming-doing.com/",
  currency: "Rwanda Franc",
  cost: 3263.15,
  price: 7843.64,
  taxRate: {
    id: 7340.09,
    value: 6496.5,
  },
  defaultSupplier: {
    id: "99431a08-59f3-4d6f-9b82-691199d39354",
    name: "<value>",
  },
  productType: "service",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2026-05-24T07:52:59.130Z"),
  updatedAt: new Date("2024-09-07T08:31:57.933Z"),
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
  variantGroupId: "105bb59b-7a2c-4135-a3f3-4cbbb8504672",
  variantOptions: {
    "key": "<value>",
  },
  isExempt: false,
  metafields: [],
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
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `description`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `category`                                                                                                          | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `sku`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `barcode`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `imageUrl`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | External product image URL reference. La Pyme displays it best effort and does not copy, ingest, or host the image. |
| `currency`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `cost`                                                                                                              | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `price`                                                                                                             | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `taxRate`                                                                                                           | [models.ApiSharedObjectee5eae48b0](../models/api-shared-objectee5eae48b0.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `defaultSupplier`                                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `productType`                                                                                                       | [models.ApiSharedEnumff49232140](../models/api-shared-enumff49232140.md)                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isActive`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `organizationSlug`                                                                                                  | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `createdAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `updatedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `effectivePrice`                                                                                                    | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `priceSource`                                                                                                       | [models.ApiSharedEnumfe93f70a59](../models/api-shared-enumfe93f70a59.md)                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `appliedPriceList`                                                                                                  | [models.ApiSharedObjectfc277c542a](../models/api-shared-objectfc277c542a.md)                                        | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `object`                                                                                                            | *"product"*                                                                                                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `tags`                                                                                                              | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `variantGroupId`                                                                                                    | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `variantOptions`                                                                                                    | Record<string, *string*>                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isExempt`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `metafields`                                                                                                        | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `stockSummary`                                                                                                      | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |