# ApiProductListResponseData

## Example Usage

```typescript
import { ApiProductListResponseData } from "lapyme/models";

let value: ApiProductListResponseData = {
  id: "c818941c-2ece-4f3f-b2ee-a6a8bf3733bc",
  name: "<value>",
  description: "diversity throughout along confiscate",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  imageUrl: "https://strong-forgery.com",
  currency: "Manat",
  cost: 5507.85,
  price: 1280.82,
  taxRate: {
    id: 7340.09,
    value: 6496.5,
  },
  defaultSupplier: {
    id: "99431a08-59f3-4d6f-9b82-691199d39354",
    name: "<value>",
  },
  productType: "service",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2026-02-22T20:18:12.426Z"),
  updatedAt: new Date("2026-10-29T11:10:58.135Z"),
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
| `appliedPriceList`                                                                                                  | [models.ApiSharedObjectc1ee297650](../models/api-shared-objectc1ee297650.md)                                        | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `object`                                                                                                            | *"product"*                                                                                                         | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `tags`                                                                                                              | [models.ApiSharedObject8a94344083](../models/api-shared-object8a94344083.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |