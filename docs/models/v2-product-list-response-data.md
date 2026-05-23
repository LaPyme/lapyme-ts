# V2ProductListResponseData

## Example Usage

```typescript
import { V2ProductListResponseData } from "lapyme/models";

let value: V2ProductListResponseData = {
  id: "85ff8ab0-9483-46ac-a7e0-b2fb5eafa326",
  name: "<value>",
  description: "phooey very tomorrow wildly at",
  category: {
    id: "da19cbc3-3177-4314-a2bb-d4326e13563d",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  oemCode: "<value>",
  currency: "Pa'anga",
  cost: 48.43,
  price: 2143.72,
  taxRate: {
    id: 9499.53,
    value: 4524.37,
  },
  stockMinimum: 4851.17,
  defaultSupplier: {
    id: "7acfbb5f-d04c-465b-958d-a0100d8438a5",
    name: "<value>",
  },
  productType: "combo",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2024-11-02T09:32:47.598Z"),
  updatedAt: new Date("2024-10-29T16:19:51.352Z"),
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `description`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `category`                                                                                               | [models.V2ProductListResponseCategory](../models/v2-product-list-response-category.md)                   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sku`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `barcode`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `oemCode`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `currency`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `cost`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `price`                                                                                                  | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `taxRate`                                                                                                | [models.V2ProductListResponseTaxRate](../models/v2-product-list-response-tax-rate.md)                    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `stockMinimum`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `defaultSupplier`                                                                                        | [models.V2ProductListResponseDefaultSupplier](../models/v2-product-list-response-default-supplier.md)    | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `productType`                                                                                            | [models.V2ProductListResponseProductType](../models/v2-product-list-response-product-type.md)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `isActive`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `organizationSlug`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `effectivePrice`                                                                                         | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `priceSource`                                                                                            | [models.V2ProductListResponsePriceSource](../models/v2-product-list-response-price-source.md)            | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `appliedPriceList`                                                                                       | [models.V2ProductListResponseAppliedPriceList](../models/v2-product-list-response-applied-price-list.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |