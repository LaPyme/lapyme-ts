# GetPriceListsResponse

## Example Usage

```typescript
import { GetPriceListsResponse } from "lapyme/models/operations";

let value: GetPriceListsResponse = {
  headers: {},
  result: {
    success: true,
    data: [
      {
        id: "35a51255-d0f4-4626-8b81-7b9a0d343861",
        name: "<value>",
        isAutomatic: false,
        automaticPricingMode: "cost_markup",
        adjustmentPercentage: 24.44,
        taxInclusive: false,
        createdAt: new Date("2025-07-17T03:57:46.972Z"),
      },
    ],
    pagination: {
      page: 6242.53,
      limit: 2556.99,
      total: 7252.85,
      totalPages: 2388.57,
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.PriceListListResponse](../../models/price-list-list-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |