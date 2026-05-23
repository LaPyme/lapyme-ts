# ListApiPurchasesResponse

## Example Usage

```typescript
import { ListApiPurchasesResponse } from "lapyme/models/operations";

let value: ListApiPurchasesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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
    data: [],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://french-sonata.com/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiPurchaseListResponse](../../models/api-purchase-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |