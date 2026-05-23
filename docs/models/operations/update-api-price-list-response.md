# UpdateApiPriceListResponse

## Example Usage

```typescript
import { UpdateApiPriceListResponse } from "lapyme/models/operations";

let value: UpdateApiPriceListResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiPriceListUpdateResponse](../../models/api-price-list-update-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |