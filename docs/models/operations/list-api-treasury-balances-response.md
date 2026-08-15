# ListApiTreasuryBalancesResponse

## Example Usage

```typescript
import { ListApiTreasuryBalancesResponse } from "lapyme/models/operations";

let value: ListApiTreasuryBalancesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://blond-affect.net",
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiTreasuryBalanceListResponse](../../models/api-treasury-balance-list-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |