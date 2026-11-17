# ApiSharedObject7d4ec0e875

## Example Usage

```typescript
import { ApiSharedObject7d4ec0e875 } from "lapyme/models";

let value: ApiSharedObject7d4ec0e875 = {
  id: "b28e8906-450b-4eb3-8d52-e9554cfa0b8f",
  name: "<value>",
  description: "while ick jury which thoughtfully judicious because",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  imageUrl: "https://mysterious-sonnet.org",
  currency: "Somali Shilling",
  cost: 70.48,
  price: 1880.71,
  taxRate: {
    id: 6496.5,
    value: 3957.79,
  },
  defaultSupplier: {
    id: "9431a085-9f3d-46fb-8826-91199d393547",
    name: "<value>",
  },
  productType: "product",
  visibility: "purchases",
  availableInPos: false,
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2025-09-26T23:05:16.857Z"),
  updatedAt: new Date("2024-12-12T08:35:50.213Z"),
  components: [
    {
      productId: "75e96a97-7602-4547-8b40-f25c5a1f8b9a",
      name: "<value>",
      sku: "<value>",
      quantity: 431.68,
    },
  ],
  object: "product",
  variantGroupId: "ed1afed0-15f9-42aa-a118-37f8717ed281",
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
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  isExempt: true,
  metafields: [],
  variantMetafields: [],
  stockSummary: {
    totalQuantity: 7641.45,
    warehouseCount: 722057,
    byWarehouse: [
      {
        warehouseId: "3b4ebac9-22e2-4703-8cfd-7897999131c5",
        warehouseName: "<value>",
        quantity: 7242.34,
        onHand: 7810.35,
        reservedQuantity: 190.75,
        incomingQuantity: 1501.68,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `name`                                                                                                                                              | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `description`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `category`                                                                                                                                          | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                                                                        | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `sku`                                                                                                                                               | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `barcode`                                                                                                                                           | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `imageUrl`                                                                                                                                          | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | External product image URL reference. La Pyme displays it best effort and does not copy, ingest, or host the image.                                 |
| `currency`                                                                                                                                          | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `cost`                                                                                                                                              | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | Product cost in cents. Null when the delegated user cannot view product costs.                                                                      |
| `price`                                                                                                                                             | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `taxRate`                                                                                                                                           | [models.ApiSharedObjectee5eae48b0](../models/api-shared-objectee5eae48b0.md)                                                                        | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `defaultSupplier`                                                                                                                                   | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                                                                        | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `productType`                                                                                                                                       | [models.ApiSharedEnumff49232140](../models/api-shared-enumff49232140.md)                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `visibility`                                                                                                                                        | [models.ApiSharedEnuma7f3605118](../models/api-shared-enuma7f3605118.md)                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `availableInPos`                                                                                                                                    | *boolean*                                                                                                                                           | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `isActive`                                                                                                                                          | *boolean*                                                                                                                                           | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `organizationSlug`                                                                                                                                  | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `createdAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `updatedAt`                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                       | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `components`                                                                                                                                        | [models.ApiSharedObject564df4258f](../models/api-shared-object564df4258f.md)[]                                                                      | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `effectivePrice`                                                                                                                                    | *number*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | N/A                                                                                                                                                 |
| `priceSource`                                                                                                                                       | [models.ApiSharedEnumfe93f70a59](../models/api-shared-enumfe93f70a59.md)                                                                            | :heavy_minus_sign:                                                                                                                                  | N/A                                                                                                                                                 |
| `appliedPriceList`                                                                                                                                  | [models.ApiSharedObject3b83f74923](../models/api-shared-object3b83f74923.md)                                                                        | :heavy_minus_sign:                                                                                                                                  | N/A                                                                                                                                                 |
| `object`                                                                                                                                            | *"product"*                                                                                                                                         | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `variantGroupId`                                                                                                                                    | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `skuReferenceAmbiguous`                                                                                                                             | *boolean*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                  | El SKU coincide exactamente con otra variante por nombre, SKU o código de barras. Para resolver texto sin tipo explícito, usá reference-candidates. |
| `tags`                                                                                                                                              | [models.ApiSharedObjected3905a55b](../models/api-shared-objected3905a55b.md)[]                                                                      | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `variantOptions`                                                                                                                                    | Record<string, *string*>                                                                                                                            | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `isExempt`                                                                                                                                          | *boolean*                                                                                                                                           | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `metafields`                                                                                                                                        | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                                                                      | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |
| `variantMetafields`                                                                                                                                 | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                                                                      | :heavy_check_mark:                                                                                                                                  | Campos personalizados de esta variante. metafields contiene los del producto.                                                                       |
| `stockSummary`                                                                                                                                      | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                                                                        | :heavy_check_mark:                                                                                                                                  | N/A                                                                                                                                                 |