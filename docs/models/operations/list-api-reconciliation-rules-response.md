# ListApiReconciliationRulesResponse

## Example Usage

```typescript
import { ListApiReconciliationRulesResponse } from "lapyme/models/operations";

let value: ListApiReconciliationRulesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    object: "list",
    url: "https://babyish-pick.org",
    hasMore: false,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                   | Record<string, *string*[]>                                                                                                  | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `result`                                                                                                                    | [operations.ListApiReconciliationRulesResponseBody](../../models/operations/list-api-reconciliation-rules-response-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |