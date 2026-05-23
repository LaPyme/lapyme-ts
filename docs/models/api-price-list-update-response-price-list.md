# ApiPriceListUpdateResponsePriceList

## Example Usage

```typescript
import { ApiPriceListUpdateResponsePriceList } from "lapyme/models";

let value: ApiPriceListUpdateResponsePriceList = {
  id: "3ed83b04-ab9b-4002-bb08-44e435505734",
  name: "<value>",
  isAutomatic: true,
  automaticPricingMode: "cost_markup",
  adjustmentPercentage: 2568.17,
  taxInclusive: false,
  createdAt: new Date("2024-08-28T16:23:50.810Z"),
  object: "price_list",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `isAutomatic`                                                                                                               | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `automaticPricingMode`                                                                                                      | [models.ApiPriceListUpdateResponseAutomaticPricingMode](../models/api-price-list-update-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `adjustmentPercentage`                                                                                                      | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `taxInclusive`                                                                                                              | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `createdAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `object`                                                                                                                    | *"price_list"*                                                                                                              | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |