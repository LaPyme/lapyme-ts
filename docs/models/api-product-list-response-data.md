# ApiProductListResponseData

## Example Usage

```typescript
import { ApiProductListResponseData } from "lapyme/models";

let value: ApiProductListResponseData = {
  id: "c818941c-2ece-4f3f-b2ee-a6a8bf3733bc",
  name: "<value>",
  description: "diversity throughout along confiscate",
  category: {
    id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
    name: "<value>",
  },
  sku: "<value>",
  barcode: null,
  currency: "Jamaican Dollar",
  cost: 5709.68,
  price: 8092.19,
  taxRate: {
    id: 9545.45,
    value: 8570.91,
  },
  defaultSupplier: {
    id: "e2939b22-6734-418f-802e-69ca6e74fd88",
    name: "<value>",
  },
  productType: "product",
  isActive: false,
  organizationSlug: "<value>",
  createdAt: new Date("2025-08-26T15:50:19.113Z"),
  updatedAt: new Date("2024-05-20T09:04:55.702Z"),
  object: "product",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `category`                                                                                                 | [models.ApiProductListResponseCategory](../models/api-product-list-response-category.md)                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sku`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `barcode`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `currency`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `cost`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `price`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `taxRate`                                                                                                  | [models.ApiProductListResponseTaxRate](../models/api-product-list-response-tax-rate.md)                    | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `defaultSupplier`                                                                                          | [models.ApiProductListResponseDefaultSupplier](../models/api-product-list-response-default-supplier.md)    | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `productType`                                                                                              | [models.ApiProductListResponseProductType](../models/api-product-list-response-product-type.md)            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `isActive`                                                                                                 | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organizationSlug`                                                                                         | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `effectivePrice`                                                                                           | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `priceSource`                                                                                              | [models.ApiProductListResponsePriceSource](../models/api-product-list-response-price-source.md)            | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `appliedPriceList`                                                                                         | [models.ApiProductListResponseAppliedPriceList](../models/api-product-list-response-applied-price-list.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `object`                                                                                                   | *"product"*                                                                                                | :heavy_check_mark:                                                                                         | N/A                                                                                                        |