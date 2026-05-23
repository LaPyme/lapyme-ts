# ApiPriceListCreateResponsePriceList

## Example Usage

```typescript
import { ApiPriceListCreateResponsePriceList } from "lapyme/models";

let value: ApiPriceListCreateResponsePriceList = {
  id: "74156d08-fd8f-4a88-8003-c4c3b43958bd",
  name: "<value>",
  isAutomatic: false,
  automaticPricingMode: "base_price_adjustment",
  adjustmentPercentage: null,
  taxInclusive: true,
  createdAt: new Date("2024-12-31T10:19:59.932Z"),
  object: "price_list",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `isAutomatic`                                                                                                               | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `automaticPricingMode`                                                                                                      | [models.ApiPriceListCreateResponseAutomaticPricingMode](../models/api-price-list-create-response-automatic-pricing-mode.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `adjustmentPercentage`                                                                                                      | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `taxInclusive`                                                                                                              | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `createdAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                               | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `object`                                                                                                                    | *"price_list"*                                                                                                              | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |