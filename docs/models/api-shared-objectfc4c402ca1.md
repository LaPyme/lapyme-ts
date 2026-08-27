# ApiSharedObjectfc4c402ca1

## Example Usage

```typescript
import { ApiSharedObjectfc4c402ca1 } from "lapyme/models";

let value: ApiSharedObjectfc4c402ca1 = {
  id: "36b149eb-f100-492f-93b0-4d4c14b7241f",
  name: "<value>",
  description: "siege stuff pish tank besides plus outdo lively",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  imageUrl: "https://imaginative-detective.org/",
  currency: "Armenian Dram",
  cost: 5841.77,
  price: 8761.28,
  taxRate: {
    id: 7340.09,
    value: 6496.5,
  },
  defaultSupplier: {
    id: "99431a08-59f3-4d6f-9b82-691199d39354",
    name: "<value>",
  },
  productType: "product",
  visibility: "sales",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2026-09-02T06:15:14.433Z"),
  updatedAt: new Date("2026-05-02T01:23:17.815Z"),
  object: "product",
  tags: [],
  variantGroupId: "8a538d89-62aa-44ea-b244-98aaf955f889",
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
  },
  isExempt: true,
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
| `visibility`                                                                                                        | [models.ApiSharedEnuma7f3605118](../models/api-shared-enuma7f3605118.md)                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isActive`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `organizationSlug`                                                                                                  | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `createdAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `updatedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `effectivePrice`                                                                                                    | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `priceSource`                                                                                                       | [models.ApiSharedEnumfe93f70a59](../models/api-shared-enumfe93f70a59.md)                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `appliedPriceList`                                                                                                  | [models.ApiSharedObjectc1ee297650](../models/api-shared-objectc1ee297650.md)                                        | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `object`                                                                                                            | *"product"*                                                                                                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `tags`                                                                                                              | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `variantGroupId`                                                                                                    | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `variantOptions`                                                                                                    | Record<string, *string*>                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isExempt`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `metafields`                                                                                                        | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `stockSummary`                                                                                                      | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |