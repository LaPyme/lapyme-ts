# ApiSharedObject8314097d1f

## Example Usage

```typescript
import { ApiSharedObject8314097d1f } from "lapyme/models";

let value: ApiSharedObject8314097d1f = {
  id: "997c42b5-056a-45c9-81a0-4273c27689cb",
  name: "<value>",
  description: "commonly positively veg regarding dreamily",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  imageUrl: "https://funny-decryption.name",
  currency: "Mauritius Rupee",
  cost: 4955.2,
  price: 4439.72,
  taxRate: {
    id: 6496.5,
    value: 3957.79,
  },
  defaultSupplier: {
    id: "9431a085-9f3d-46fb-8826-91199d393547",
    name: "<value>",
  },
  productType: "combo",
  visibility: "both",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2024-07-19T18:22:25.841Z"),
  updatedAt: new Date("2025-03-25T10:18:18.856Z"),
  components: [],
  object: "product",
  tags: [
    {
      object: "tag",
      id: "b4c64393-84ca-458c-8f3b-39718b070484",
      scope: "transfer",
      name: "<value>",
      slug: "<value>",
      color: "pink",
      description: "delectable astride downright",
      archivedAt: new Date("2024-08-12T06:34:32.349Z"),
      createdAt: new Date("2024-10-25T15:17:34.484Z"),
      updatedAt: new Date("2024-11-10T16:15:42.311Z"),
    },
  ],
  variantGroupId: "1dc3e411-2bc8-493e-953c-0ea6f0c17866",
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
    totalQuantity: 789.6,
    warehouseCount: 760917,
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
| `stockSummary`                                                                                                      | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |