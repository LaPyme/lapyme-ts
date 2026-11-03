# ApiSharedObject425dc8c092

## Example Usage

```typescript
import { ApiSharedObject425dc8c092 } from "lapyme/models";

let value: ApiSharedObject425dc8c092 = {
  id: "fb191428-dd96-42e1-9b0f-e3b6c46df2b0",
  name: "<value>",
  description: null,
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  imageUrl: "https://clear-cut-hepatitis.net",
  currency: "Malaysian Ringgit",
  cost: 6469.37,
  price: 9404.38,
  taxRate: {
    id: 6496.5,
    value: 3957.79,
  },
  defaultSupplier: {
    id: "9431a085-9f3d-46fb-8826-91199d393547",
    name: "<value>",
  },
  productType: "combo",
  visibility: "purchases",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2026-03-13T20:28:43.086Z"),
  updatedAt: new Date("2025-11-14T05:18:21.772Z"),
  components: [
    {
      productId: "4a0b478b-0e90-4aa0-a6fb-e28f0ddf5869",
      name: "<value>",
      sku: "<value>",
      quantity: 5832.75,
    },
  ],
  object: "product",
  tags: [],
  variantGroupId: "e1298008-e90d-4c06-8558-ceb80f87bf50",
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
  variantMetafields: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  stockSummary: {
    totalQuantity: 7609.17,
    warehouseCount: 314603,
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
| `cost`                                                                                                              | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | Product cost in cents. Null when the delegated user cannot view product costs.                                      |
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
| `variantMetafields`                                                                                                 | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                                      | :heavy_check_mark:                                                                                                  | Campos personalizados de esta variante. metafields contiene los del producto.                                       |
| `stockSummary`                                                                                                      | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |