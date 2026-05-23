# ApiPriceListListResponseData

## Example Usage

```typescript
import { ApiPriceListListResponseData } from "lapyme/models";

let value: ApiPriceListListResponseData = {
  id: "b006eed0-7e9c-48f9-8c37-71e4f03fb61c",
  name: "<value>",
  isAutomatic: false,
  automaticPricingMode: "base_price_adjustment",
  adjustmentPercentage: null,
  taxInclusive: false,
  createdAt: new Date("2024-12-13T19:47:09.442Z"),
  object: "price_list",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `name`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isAutomatic`                                                                                                           | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `automaticPricingMode`                                                                                                  | [models.ApiPriceListListResponseAutomaticPricingMode](../models/api-price-list-list-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `adjustmentPercentage`                                                                                                  | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxInclusive`                                                                                                          | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `object`                                                                                                                | *"price_list"*                                                                                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |