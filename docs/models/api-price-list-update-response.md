# ApiPriceListUpdateResponse

## Example Usage

```typescript
import { ApiPriceListUpdateResponse } from "lapyme/models";

let value: ApiPriceListUpdateResponse = {
  requestId: "<id>",
  data: {
    priceList: {
      id: "2958ecfc-7b78-4e54-a06d-c7f62f8663b7",
      name: "<value>",
      isAutomatic: false,
      automaticPricingMode: "base_price_adjustment",
      adjustmentPercentage: 2396.83,
      taxInclusive: true,
      createdAt: new Date("2025-04-30T20:16:20.962Z"),
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