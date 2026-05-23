# CreateProductResponseData

## Example Usage

```typescript
import { CreateProductResponseData } from "lapyme/models";

let value: CreateProductResponseData = {
  id: "234ee309-ef98-4201-871e-07929f9c2418",
  name: "<value>",
  description: "freely during cruel swing justly fooey whether solemnly",
  category: {
    id: "aadb12e0-6dbb-45a7-9d1a-5cc6ca86699f",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  oemCode: "<value>",
  currency: "Kenyan Shilling",
  cost: 5374.12,
  price: 3010.29,
  taxRate: {
    id: 4683.96,
    value: 8847.4,
  },
  stockMinimum: 3632.08,
  defaultSupplier: {
    id: "c2b863a4-5110-4cd3-8f6a-9ba8dd5142f8",
    name: "<value>",
  },
  productType: "product",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2026-04-09T02:58:03.372Z"),
  updatedAt: new Date("2024-03-30T04:09:13.743Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `description`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `category`                                                                                              | [models.CreateProductResponseCategory](../models/create-product-response-category.md)                   | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `sku`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `barcode`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `oemCode`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `currency`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `cost`                                                                                                  | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `price`                                                                                                 | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `taxRate`                                                                                               | [models.CreateProductResponseTaxRate](../models/create-product-response-tax-rate.md)                    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `stockMinimum`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `defaultSupplier`                                                                                       | [models.CreateProductResponseDefaultSupplier](../models/create-product-response-default-supplier.md)    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `productType`                                                                                           | [models.CreateProductResponseProductType](../models/create-product-response-product-type.md)            | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `isActive`                                                                                              | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `organizationSlug`                                                                                      | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `updatedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `effectivePrice`                                                                                        | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `priceSource`                                                                                           | [models.CreateProductResponsePriceSource](../models/create-product-response-price-source.md)            | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `appliedPriceList`                                                                                      | [models.CreateProductResponseAppliedPriceList](../models/create-product-response-applied-price-list.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |