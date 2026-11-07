# ListApiPriceListsResponse

## Example Usage

```typescript
import { ListApiPriceListsResponse } from "lapyme/models/operations";

let value: ListApiPriceListsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
        sourcePriceListId: "9998d21d-5f35-45ff-b0a7-fc3796447bf8",
        taxInclusive: true,
        createdAt: new Date("2024-03-13T22:18:39.439Z"),
        object: "price_list",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://burly-quinoa.name",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiPriceListListResponse](../../models/api-price-list-list-response.md) | :heavy_check_mark:                                                              | N/A                                                                             |