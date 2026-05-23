# CreateProductResponseAppliedPriceList

## Example Usage

```typescript
import { CreateProductResponseAppliedPriceList } from "lapyme/models";

let value: CreateProductResponseAppliedPriceList = {
  id: "2027c4fd-8e8f-4a3d-b121-a92c2fe5a3bf",
  name: "<value>",
  isAutomatic: true,
  automaticPricingMode: "base_price_adjustment",
  adjustmentPercentage: 3718.58,
  taxInclusive: true,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `isAutomatic`                                                                                                   | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `automaticPricingMode`                                                                                          | [models.CreateProductResponseAutomaticPricingMode](../models/create-product-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `adjustmentPercentage`                                                                                          | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `taxInclusive`                                                                                                  | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |