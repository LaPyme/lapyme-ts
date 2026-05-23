# GetPriceListByIdResponseData

## Example Usage

```typescript
import { GetPriceListByIdResponseData } from "lapyme/models";

let value: GetPriceListByIdResponseData = {
  id: "58d3af7f-831d-41c6-aff4-ef87f7efe619",
  name: "<value>",
  isAutomatic: false,
  automaticPricingMode: "cost_markup",
  adjustmentPercentage: 2337.54,
  taxInclusive: false,
  createdAt: new Date("2025-05-31T18:35:06.337Z"),
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `isAutomatic`                                                                                                            | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `automaticPricingMode`                                                                                                   | [models.GetPriceListByIdResponseAutomaticPricingMode](../models/get-price-list-by-id-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `adjustmentPercentage`                                                                                                   | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `taxInclusive`                                                                                                           | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |