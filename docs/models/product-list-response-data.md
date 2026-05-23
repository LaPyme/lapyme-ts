# ProductListResponseData

## Example Usage

```typescript
import { ProductListResponseData } from "lapyme/models";

let value: ProductListResponseData = {
  id: "29493c60-1d7d-4822-b78a-f58766205d49",
  name: "<value>",
  description: "known frightfully vacantly throughout ack",
  category: {
    id: "11aebbd1-a097-4781-a192-c1eead8f2d67",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  oemCode: "<value>",
  currency: "Yen",
  cost: 7566.38,
  price: 9216.36,
  taxRate: {
    id: 2209.08,
    value: 3644.97,
  },
  stockMinimum: 7234.52,
  defaultSupplier: null,
  productType: "combo",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2024-02-12T11:39:44.410Z"),
  updatedAt: new Date("2024-05-21T12:23:08.199Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `category`                                                                                          | [models.ProductListResponseCategory](../models/product-list-response-category.md)                   | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `sku`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `barcode`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `oemCode`                                                                                           | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `currency`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `cost`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `price`                                                                                             | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `taxRate`                                                                                           | [models.ProductListResponseTaxRate](../models/product-list-response-tax-rate.md)                    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `stockMinimum`                                                                                      | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `defaultSupplier`                                                                                   | [models.ProductListResponseDefaultSupplier](../models/product-list-response-default-supplier.md)    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `productType`                                                                                       | [models.ProductListResponseProductType](../models/product-list-response-product-type.md)            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `isActive`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `organizationSlug`                                                                                  | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `effectivePrice`                                                                                    | *number*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `priceSource`                                                                                       | [models.ProductListResponsePriceSource](../models/product-list-response-price-source.md)            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `appliedPriceList`                                                                                  | [models.ProductListResponseAppliedPriceList](../models/product-list-response-applied-price-list.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |