# ApiPriceListUpdateResponseData

## Example Usage

```typescript
import { ApiPriceListUpdateResponseData } from "lapyme/models";

let value: ApiPriceListUpdateResponseData = {
  priceList: {
    id: "565db26a-0ab8-480f-bacd-0ff122627f63",
    name: "<value>",
    isAutomatic: true,
    automaticPricingMode: "base_price_adjustment",
    adjustmentPercentage: 7658.96,
    taxInclusive: false,
    createdAt: new Date("2024-05-16T10:02:35.387Z"),
    object: "price_list",
  },
  shouldSyncPrices: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `priceList`                                                                                          | [models.ApiPriceListUpdateResponsePriceList](../models/api-price-list-update-response-price-list.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `shouldSyncPrices`                                                                                   | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |