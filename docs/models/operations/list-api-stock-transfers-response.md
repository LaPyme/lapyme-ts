# ListApiStockTransfersResponse

## Example Usage

```typescript
import { ListApiStockTransfersResponse } from "lapyme/models/operations";

let value: ListApiStockTransfersResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://moral-bran.net",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiTransferListResponse](../../models/api-transfer-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |