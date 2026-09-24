# ApiSharedObject43abd4a8a1

## Example Usage

```typescript
import { ApiSharedObject43abd4a8a1 } from "lapyme/models";

let value: ApiSharedObject43abd4a8a1 = {
  id: "5cafd15d-21ae-413d-9263-91e124436449",
  name: "<value>",
  description: "after shakily upon brook",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  imageUrl: "https://steep-mythology.net/",
  currency: "Taka",
  cost: 2899.63,
  price: 2965.65,
  taxRate: {
    id: 7340.09,
    value: 6496.5,
  },
  defaultSupplier: {
    id: "99431a08-59f3-4d6f-9b82-691199d39354",
    name: "<value>",
  },
  productType: "kit",
  visibility: "system",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2026-03-19T12:51:54.653Z"),
  updatedAt: new Date("2024-03-16T18:57:33.944Z"),
  components: [],
  object: "product",
  tags: [],
  variantGroupId: "8ac7a835-b0ce-41b1-9dcb-ee2a1d41785e",
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  isExempt: true,
  metafields: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  stockSummary: {
    totalQuantity: 3621.97,
    warehouseCount: 126283,
    byWarehouse: [
      {
        warehouseId: "348138b3-1e7a-452b-90e8-cdda124dcd42",
        warehouseName: "<value>",
        quantity: 5709.87,
        onHand: 3236.79,
        reservedQuantity: 9655.66,
        incomingQuantity: 8773.04,
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
| `visibility`                                                                                                        | [models.ApiSharedEnuma7f3605118](../models/api-shared-enuma7f3605118.md)                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isActive`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `organizationSlug`                                                                                                  | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `createdAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `updatedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `components`                                                                                                        | [models.ApiSharedObject564df4258f](../models/api-shared-object564df4258f.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `effectivePrice`                                                                                                    | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `priceSource`                                                                                                       | [models.ApiSharedEnumfe93f70a59](../models/api-shared-enumfe93f70a59.md)                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `appliedPriceList`                                                                                                  | [models.ApiSharedObject3b83f74923](../models/api-shared-object3b83f74923.md)                                        | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `object`                                                                                                            | *"product"*                                                                                                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `tags`                                                                                                              | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `variantGroupId`                                                                                                    | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `variantOptions`                                                                                                    | Record<string, *string*>                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isExempt`                                                                                                          | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `metafields`                                                                                                        | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `stockSummary`                                                                                                      | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |