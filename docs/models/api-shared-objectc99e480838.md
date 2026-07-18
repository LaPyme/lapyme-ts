# ApiSharedObjectc99e480838

## Example Usage

```typescript
import { ApiSharedObjectc99e480838 } from "lapyme/models";

let value: ApiSharedObjectc99e480838 = {
  id: "5206ef4e-fcc3-44e7-9cb8-5662e1176ace",
  name: "<value>",
  description: "lovingly microchip devise ethical prohibition always clone",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  currency: "Netherlands Antillian Guilder",
  cost: 1001.78,
  price: 7446.97,
  taxRate: {
    id: 9545.45,
    value: 8570.91,
  },
  defaultSupplier: {
    id: "e2939b22-6734-418f-802e-69ca6e74fd88",
    name: "<value>",
  },
  productType: "service",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2024-05-15T16:45:27.308Z"),
  updatedAt: new Date("2024-12-09T23:54:18.913Z"),
  object: "product",
  variantGroupId: "8fdd7149-ad2e-48cc-ad38-392847803a4d",
  variantOptions: {},
  isExempt: false,
  metafields: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  stockSummary: {
    totalQuantity: 1075.96,
    warehouseCount: 917717,
    byWarehouse: [
      {
        warehouseId: "355b424e-8f1b-4194-8242-2b1798decfe8",
        warehouseName: "<value>",
        quantity: 2292.22,
        onHand: 4791.26,
        reservedQuantity: 4053.93,
        incomingQuantity: 732.18,
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
| `metafields`                                                                                  | [models.ApiSharedObject0347948139](../models/api-shared-object0347948139.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stockSummary`                                                                                | [models.ApiSharedObjecta9f7340006](../models/api-shared-objecta9f7340006.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |