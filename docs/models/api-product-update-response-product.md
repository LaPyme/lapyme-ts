# ApiProductUpdateResponseProduct

## Example Usage

```typescript
import { ApiProductUpdateResponseProduct } from "lapyme/models";

let value: ApiProductUpdateResponseProduct = {
  id: "38cf3262-032b-40f6-85f1-89829a3560b0",
  name: "<value>",
  description:
    "yowza for ravel following object different plus pronoun loosely",
  category: {
    id: "0ca2b4ee-8226-4d71-9e03-3756803e332d",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  currency: "Aruban Guilder",
  cost: 3707.32,
  price: 2130.05,
  taxRate: {
    id: 8856.52,
    value: 3437.78,
  },
  defaultSupplier: {
    id: "e6d657b6-b8d3-431e-a376-5f367d4428a4",
    name: "<value>",
  },
  productType: "kit",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2024-04-21T08:27:03.958Z"),
  updatedAt: new Date("2026-04-10T12:32:53.755Z"),
  object: "product",
  variantGroupId: "e01f7962-a11d-4b6d-990e-77b99f2b8f5b",
  variantOptions: {},
  isExempt: true,
  stockSummary: {
    totalQuantity: 7699.6,
    warehouseCount: 907628,
    byWarehouse: [],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `category`                                                                                                     | [models.ApiProductUpdateResponseCategory](../models/api-product-update-response-category.md)                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sku`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `barcode`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `currency`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `cost`                                                                                                         | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `price`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `taxRate`                                                                                                      | [models.ApiProductUpdateResponseTaxRate](../models/api-product-update-response-tax-rate.md)                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultSupplier`                                                                                              | [models.ApiProductUpdateResponseDefaultSupplier](../models/api-product-update-response-default-supplier.md)    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `productType`                                                                                                  | [models.ApiProductUpdateResponseProductType](../models/api-product-update-response-product-type.md)            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isActive`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organizationSlug`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `effectivePrice`                                                                                               | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `priceSource`                                                                                                  | [models.ApiProductUpdateResponsePriceSource](../models/api-product-update-response-price-source.md)            | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `appliedPriceList`                                                                                             | [models.ApiProductUpdateResponseAppliedPriceList](../models/api-product-update-response-applied-price-list.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `object`                                                                                                       | *"product"*                                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantGroupId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantOptions`                                                                                               | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isExempt`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `stockSummary`                                                                                                 | [models.ApiProductUpdateResponseStockSummary](../models/api-product-update-response-stock-summary.md)          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |