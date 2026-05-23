# GetPriceListByIdResponse

## Example Usage

```typescript
import { GetPriceListByIdResponse } from "lapyme/models";

let value: GetPriceListByIdResponse = {
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success`                                                                              | *true*                                                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.GetPriceListByIdResponseData](../models/get-price-list-by-id-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |