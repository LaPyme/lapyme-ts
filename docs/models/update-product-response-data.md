# UpdateProductResponseData

## Example Usage

```typescript
import { UpdateProductResponseData } from "lapyme/models";

let value: UpdateProductResponseData = {
  id: "80cfb4a9-9da3-4d13-b2d2-a9ed814f4184",
  name: "<value>",
  description: null,
  category: {
    id: "1b86fc91-7469-4d7f-aae2-2f02e86c0844",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  oemCode: "<value>",
  currency: "Forint",
  cost: 7847.36,
  price: 2279.43,
  taxRate: {
    id: 7169.65,
    value: 4269.2,
  },
  stockMinimum: 610.16,
  defaultSupplier: {
    id: "28063824-177e-4578-ab46-fd5e1f285eaf",
    name: "<value>",
  },
  productType: "service",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2026-02-13T09:38:54.516Z"),
  updatedAt: new Date("2025-04-15T12:27:44.096Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `name`                                                                                                  | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `description`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `category`                                                                                              | [models.UpdateProductResponseCategory](../models/update-product-response-category.md)                   | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `sku`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `barcode`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `oemCode`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `currency`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `cost`                                                                                                  | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `price`                                                                                                 | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `taxRate`                                                                                               | [models.UpdateProductResponseTaxRate](../models/update-product-response-tax-rate.md)                    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `stockMinimum`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `defaultSupplier`                                                                                       | [models.UpdateProductResponseDefaultSupplier](../models/update-product-response-default-supplier.md)    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `productType`                                                                                           | [models.UpdateProductResponseProductType](../models/update-product-response-product-type.md)            | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `isActive`                                                                                              | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `organizationSlug`                                                                                      | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `updatedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `effectivePrice`                                                                                        | *number*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `priceSource`                                                                                           | [models.UpdateProductResponsePriceSource](../models/update-product-response-price-source.md)            | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `appliedPriceList`                                                                                      | [models.UpdateProductResponseAppliedPriceList](../models/update-product-response-applied-price-list.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |