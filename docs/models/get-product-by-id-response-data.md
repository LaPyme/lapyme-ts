# GetProductByIdResponseData

## Example Usage

```typescript
import { GetProductByIdResponseData } from "lapyme/models";

let value: GetProductByIdResponseData = {
  id: "07e674fe-651f-461a-a87e-2bd558951e0c",
  name: "<value>",
  description: "obedience bludgeon within outside punctually dishearten",
  category: {
    id: "9417009b-878c-4f27-a13b-c1c94d6de727",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  oemCode: "<value>",
  currency: "Cordoba Oro",
  cost: 6048.81,
  price: 1285.15,
  taxRate: {
    id: 9265.07,
    value: 4163.34,
  },
  stockMinimum: 7445.95,
  defaultSupplier: {
    id: "0ab8abd6-c0e8-47ad-abcd-fd359bc3a9e5",
    name: "<value>",
  },
  productType: "combo",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2024-12-01T19:25:41.903Z"),
  updatedAt: new Date("2026-04-22T20:15:57.907Z"),
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `description`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `category`                                                                                                  | [models.GetProductByIdResponseCategory](../models/get-product-by-id-response-category.md)                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `sku`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `barcode`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `oemCode`                                                                                                   | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `cost`                                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `price`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `taxRate`                                                                                                   | [models.GetProductByIdResponseTaxRate](../models/get-product-by-id-response-tax-rate.md)                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `stockMinimum`                                                                                              | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `defaultSupplier`                                                                                           | [models.GetProductByIdResponseDefaultSupplier](../models/get-product-by-id-response-default-supplier.md)    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `productType`                                                                                               | [models.GetProductByIdResponseProductType](../models/get-product-by-id-response-product-type.md)            | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `isActive`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `organizationSlug`                                                                                          | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `updatedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `effectivePrice`                                                                                            | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `priceSource`                                                                                               | [models.GetProductByIdResponsePriceSource](../models/get-product-by-id-response-price-source.md)            | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `appliedPriceList`                                                                                          | [models.GetProductByIdResponseAppliedPriceList](../models/get-product-by-id-response-applied-price-list.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |