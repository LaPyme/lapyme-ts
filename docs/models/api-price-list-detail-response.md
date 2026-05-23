# ApiPriceListDetailResponse

## Example Usage

```typescript
import { ApiPriceListDetailResponse } from "lapyme/models";

let value: ApiPriceListDetailResponse = {
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
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `requestId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `data`                                                                                    | [models.ApiPriceListDetailResponseData](../models/api-price-list-detail-response-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |