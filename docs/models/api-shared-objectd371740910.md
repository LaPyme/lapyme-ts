# ApiSharedObjectd371740910

## Example Usage

```typescript
import { ApiSharedObjectd371740910 } from "lapyme/models";

let value: ApiSharedObjectd371740910 = {
  id: "8b1e7832-2880-454f-87fd-8091bc335162",
  name: "<value>",
  description: "absent windy solemnly brr",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  currency: "Somoni",
  cost: 1095.18,
  price: 2905.9,
  taxRate: {
    id: 9545.45,
    value: 8570.91,
  },
  defaultSupplier: {
    id: "e2939b22-6734-418f-802e-69ca6e74fd88",
    name: "<value>",
  },
  productType: "kit",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2026-02-07T15:16:48.641Z"),
  updatedAt: new Date("2026-07-11T06:42:19.945Z"),
  object: "product",
  variantGroupId: "b0b22f7f-d3c9-4568-80d3-df2507f1e11f",
  variantOptions: {
    "key": "<value>",
  },
  isExempt: false,
  stockSummary: {
    totalQuantity: 3450.16,
    warehouseCount: 107596,
    byWarehouse: [
      {
        warehouseId: "8355b424-e8f1-4b19-a424-22b1798decfe",
        warehouseName: "<value>",
        quantity: 1678.21,
        onHand: 2292.22,
        reservedQuantity: 4791.26,
        incomingQuantity: 4053.93,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `category`                                                                                    | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sku`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `barcode`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cost`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxRate`                                                                                     | [models.ApiSharedObjectee5eae48b0](../models/api-shared-objectee5eae48b0.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `defaultSupplier`                                                                             | [models.ApiSharedObject8aeeceaf0f](../models/api-shared-object8aeeceaf0f.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productType`                                                                                 | [models.ApiSharedEnumff49232140](../models/api-shared-enumff49232140.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationSlug`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `effectivePrice`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `priceSource`                                                                                 | [models.ApiSharedEnumfe93f70a59](../models/api-shared-enumfe93f70a59.md)                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appliedPriceList`                                                                            | [models.ApiSharedObjectfc277c542a](../models/api-shared-objectfc277c542a.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `object`                                                                                      | *"product"*                                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `variantGroupId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `variantOptions`                                                                              | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isExempt`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stockSummary`                                                                                | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |