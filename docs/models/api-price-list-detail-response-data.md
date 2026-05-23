# ApiPriceListDetailResponseData

## Example Usage

```typescript
import { ApiPriceListDetailResponseData } from "lapyme/models";

let value: ApiPriceListDetailResponseData = {
  id: "1f9bac34-0e6b-47ca-9055-3134327713c0",
  name: "<value>",
  isAutomatic: true,
  automaticPricingMode: "base_price_adjustment",
  adjustmentPercentage: 9727.7,
  taxInclusive: true,
  createdAt: new Date("2024-11-29T04:02:42.644Z"),
  object: "price_list",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `isAutomatic`                                                                                                               | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `automaticPricingMode`                                                                                                      | [models.ApiPriceListDetailResponseAutomaticPricingMode](../models/api-price-list-detail-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `adjustmentPercentage`                                                                                                      | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `taxInclusive`                                                                                                              | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `createdAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `object`                                                                                                                    | *"price_list"*                                                                                                              | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |