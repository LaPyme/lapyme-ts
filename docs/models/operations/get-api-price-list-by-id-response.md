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
      sourcePriceListId: "c6ce5028-6ee0-4bd9-af26-d417c9f40547",
      taxInclusive: true,
      createdAt: new Date("2024-11-24T14:50:35.379Z"),
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