# PriceListListResponseData

## Example Usage

```typescript
import { PriceListListResponseData } from "lapyme/models";

let value: PriceListListResponseData = {
  id: "d931d051-5065-4786-b3b6-63f5258d5b7d",
  name: "<value>",
  isAutomatic: false,
  automaticPricingMode: "base_price_adjustment",
  adjustmentPercentage: 1461.41,
  taxInclusive: false,
  createdAt: new Date("2025-02-28T13:01:02.884Z"),
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isAutomatic`                                                                                                    | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `automaticPricingMode`                                                                                           | [models.PriceListListResponseAutomaticPricingMode](../models/price-list-list-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `adjustmentPercentage`                                                                                           | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `taxInclusive`                                                                                                   | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |