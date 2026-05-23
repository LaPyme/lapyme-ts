# ApiProductCreateResponseAppliedPriceList

## Example Usage

```typescript
import { ApiProductCreateResponseAppliedPriceList } from "lapyme/models";

let value: ApiProductCreateResponseAppliedPriceList = {
  id: "d37862b9-2cbd-42a3-a3a5-ac4262ceb29c",
  name: "<value>",
  isAutomatic: true,
  automaticPricingMode: "base_price_adjustment",
  adjustmentPercentage: 4737.71,
  taxInclusive: true,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `isAutomatic`                                                                                                          | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `automaticPricingMode`                                                                                                 | [models.ApiProductCreateResponseAutomaticPricingMode](../models/api-product-create-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `adjustmentPercentage`                                                                                                 | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `taxInclusive`                                                                                                         | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |