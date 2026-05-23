# GetApiPriceListByIdResponse

## Example Usage

```typescript
import { GetApiPriceListByIdResponse } from "lapyme/models/operations";

let value: GetApiPriceListByIdResponse = {
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
      id: "4b2d5e0f-5679-499f-b5f1-268756621269",
      name: "<value>",
      isAutomatic: true,
      automaticPricingMode: "base_price_adjustment",
      adjustmentPercentage: 777.56,
      taxInclusive: true,
      createdAt: new Date("2026-04-27T09:09:47.845Z"),
      object: "price_list",
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiPriceListDetailResponse](../../models/api-price-list-detail-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |