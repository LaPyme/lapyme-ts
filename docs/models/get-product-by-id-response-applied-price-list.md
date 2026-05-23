# GetProductByIdResponseAppliedPriceList

## Example Usage

```typescript
import { GetProductByIdResponseAppliedPriceList } from "lapyme/models";

let value: GetProductByIdResponseAppliedPriceList = {
  id: "da3f1f33-0b78-41c3-8504-16341b97f57c",
  name: "<value>",
  isAutomatic: true,
  automaticPricingMode: "cost_markup",
  adjustmentPercentage: 1005.93,
  taxInclusive: true,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `isAutomatic`                                                                                                       | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `automaticPricingMode`                                                                                              | [models.GetProductByIdResponseAutomaticPricingMode](../models/get-product-by-id-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `adjustmentPercentage`                                                                                              | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `taxInclusive`                                                                                                      | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |