# ListApiCheckDepositsResponse

## Example Usage

```typescript
import { ListApiCheckDepositsResponse } from "lapyme/models/operations";

let value: ListApiCheckDepositsResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://classic-discourse.org",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `result`                                                                               | [models.ApilistCheckDepositsResponse](../../models/apilist-check-deposits-response.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |