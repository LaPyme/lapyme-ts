# GetPriceListByIdResponse

## Example Usage

```typescript
import { GetPriceListByIdResponse } from "lapyme/models/operations";

let value: GetPriceListByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: {
      id: "fa66874e-1c14-44c9-8e54-1c1a13f2387d",
      name: "<value>",
      isAutomatic: false,
      automaticPricingMode: "base_price_adjustment",
      adjustmentPercentage: 7307.02,
      taxInclusive: false,
      createdAt: new Date("2025-09-06T07:08:53.953Z"),
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.GetPriceListByIdResponse](../../models/get-price-list-by-id-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |