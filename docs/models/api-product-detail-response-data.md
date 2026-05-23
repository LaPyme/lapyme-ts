# ApiProductDetailResponseData

## Example Usage

```typescript
import { ApiProductDetailResponseData } from "lapyme/models";

let value: ApiProductDetailResponseData = {
  id: "2d8b14a5-a6a6-4b4e-bd4d-aaed90d2f3e0",
  name: "<value>",
  description: "converse hm what butter cantaloupe fess ick swim officially",
  category: {
    id: "2d8f757f-880c-44ea-a2a2-181f028ad2c8",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  currency: "Fiji Dollar",
  cost: 9182.58,
  price: 3877.38,
  taxRate: {
    id: 9015.92,
    value: 9361.09,
  },
  defaultSupplier: {
    id: "fbfd2b18-6778-4eb9-af05-34fde5aab2c7",
    name: "<value>",
  },
  productType: "combo",
  isActive: true,
  organizationSlug: "<value>",
  createdAt: new Date("2025-05-21T13:30:13.702Z"),
  updatedAt: new Date("2026-12-23T06:58:29.575Z"),
  object: "product",
  variantGroupId: "a4a11362-3d90-4660-a52c-6f10d5cab105",
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  isExempt: false,
  stockSummary: {
    totalQuantity: 6199.54,
    warehouseCount: 410838,
    byWarehouse: [
      {
        warehouseId: "13d87d45-dfff-448a-9ff6-b1ad1dc6f687",
        warehouseName: "<value>",
        quantity: 1282.39,
        onHand: 989.19,
        reservedQuantity: 7955.85,
        incomingQuantity: 6243.26,
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
| `category`                                                                                                     | [models.ApiProductDetailResponseCategory](../models/api-product-detail-response-category.md)                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sku`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `barcode`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `currency`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `cost`                                                                                                         | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `price`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `taxRate`                                                                                                      | [models.ApiProductDetailResponseTaxRate](../models/api-product-detail-response-tax-rate.md)                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `defaultSupplier`                                                                                              | [models.ApiProductDetailResponseDefaultSupplier](../models/api-product-detail-response-default-supplier.md)    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `productType`                                                                                                  | [models.ApiProductDetailResponseProductType](../models/api-product-detail-response-product-type.md)            | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isActive`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organizationSlug`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `effectivePrice`                                                                                               | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `priceSource`                                                                                                  | [models.ApiProductDetailResponsePriceSource](../models/api-product-detail-response-price-source.md)            | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `appliedPriceList`                                                                                             | [models.ApiProductDetailResponseAppliedPriceList](../models/api-product-detail-response-applied-price-list.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `object`                                                                                                       | *"product"*                                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantGroupId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantOptions`                                                                                               | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isExempt`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `stockSummary`                                                                                                 | [models.ApiProductDetailResponseStockSummary](../models/api-product-detail-response-stock-summary.md)          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |