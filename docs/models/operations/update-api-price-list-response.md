# UpdateApiPriceListResponse

## Example Usage

```typescript
import { UpdateApiPriceListResponse } from "lapyme/models/operations";

let value: UpdateApiPriceListResponse = {
  headers: {},
  result: {
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
    warnings: [],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiPriceListUpdateResponse](../../models/api-price-list-update-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |