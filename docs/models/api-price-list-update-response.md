# ApiPriceListUpdateResponse

## Example Usage

```typescript
import { ApiPriceListUpdateResponse } from "lapyme/models";

let value: ApiPriceListUpdateResponse = {
  requestId: "<id>",
  data: {
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
    shouldSyncPrices: true,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `requestId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `data`                                                                                    | [models.ApiPriceListUpdateResponseData](../models/api-price-list-update-response-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `warnings`                                                                                | *any*[]                                                                                   | :heavy_check_mark:                                                                        | N/A                                                                                       |