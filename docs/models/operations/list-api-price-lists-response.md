# ListApiPriceListsResponse

## Example Usage

```typescript
import { ListApiPriceListsResponse } from "lapyme/models/operations";

let value: ListApiPriceListsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        id: "5350e49e-4642-41ec-be4d-48dffffca909",
        name: "<value>",
        isAutomatic: true,
        automaticPricingMode: "base_price_adjustment",
        adjustmentPercentage: 7047.14,
        taxInclusive: true,
        createdAt: new Date("2025-10-14T08:59:31.623Z"),
        object: "price_list",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://tired-collectivization.com",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiPriceListListResponse](../../models/api-price-list-list-response.md) | :heavy_check_mark:                                                              | N/A                                                                             |