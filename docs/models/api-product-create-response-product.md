# ApiProductCreateResponseProduct

## Example Usage

```typescript
import { ApiProductCreateResponseProduct } from "lapyme/models";

let value: ApiProductCreateResponseProduct = {
  id: "84addd67-b778-4aa7-a3cb-351593f0a1bb",
  name: "<value>",
  description: "vary polarisation minty cinder courageously worth",
  category: {
    id: "de3dba53-8bf3-42ac-8263-e27830a84bdd",
    name: "<value>",
  },
  sku: "<value>",
  barcode: "<value>",
  currency: "Taka",
  cost: 66.42,
  price: 8675.8,
  taxRate: {
    id: 9271.98,
    value: 2146.53,
  },
  defaultSupplier: null,
  productType: "product",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2024-08-24T22:14:16.806Z"),
  updatedAt: new Date("2024-04-08T13:33:08.247Z"),
  object: "product",
  variantGroupId: "ef1a707e-65ed-41d5-81ab-2908dab709d8",
  variantOptions: {
    "key": "<value>",
  },
  isExempt: true,
  stockSummary: {
    totalQuantity: 2005.14,
    warehouseCount: 386699,
    byWarehouse: [
      {
        warehouseId: "bb0aef60-d2fc-4197-b070-8b359152bd69",
        warehouseName: "<value>",
        quantity: 3742.31,
        onHand: 612.24,
        reservedQuantity: 5602.23,
        incomingQuantity: 9859.86,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `category`                                                                                                     | [models.ApiProductCreateResponseCategory](../models/api-product-create-response-category.md)                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sku`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `barcode`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `currency`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `cost`                                                                                                         | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `price`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `taxRate`                                                                                                      | [models.ApiProductCreateResponseTaxRate](../models/api-product-create-response-tax-rate.md)                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultSupplier`                                                                                              | [models.ApiProductCreateResponseDefaultSupplier](../models/api-product-create-response-default-supplier.md)    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `productType`                                                                                                  | [models.ApiProductCreateResponseProductType](../models/api-product-create-response-product-type.md)            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isActive`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organizationSlug`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `effectivePrice`                                                                                               | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `priceSource`                                                                                                  | [models.ApiProductCreateResponsePriceSource](../models/api-product-create-response-price-source.md)            | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `appliedPriceList`                                                                                             | [models.ApiProductCreateResponseAppliedPriceList](../models/api-product-create-response-applied-price-list.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `object`                                                                                                       | *"product"*                                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantGroupId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantOptions`                                                                                               | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isExempt`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `stockSummary`                                                                                                 | [models.ApiProductCreateResponseStockSummary](../models/api-product-create-response-stock-summary.md)          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |